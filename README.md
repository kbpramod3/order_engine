### Order Execution Engine- Decentralized Exchange(DEX)

### Project Overview

This project delivers a high-throughput order execution engine designed for the Solana ecosystem, focusing on intelligent decentralized exchange(DEX) routing and real-time client communication.


### Problem Statement

The goal was to build a robust, scalable engine capable of processing concurrent trading orders,intelligently routing them to the best execution venue(Raydium or Meteora), and providing traders with instant status updates via WebSocket throughout the order lifecycle.

![Architecture](./assets/architecture.png)

### Order Types Supported

The engine successfully supports all three core order types: Market, Limit, and Sniper.

● Implementation Progression: The system was initially built to handle Market Orders(immediate execution). This foundation was then extended to integrate the more complex logic required for Limit Orders(conditional execution based on target price) and Sniper Orders(execution triggered by specific liquidity or launch events).

•Engine Extensibility: The modular worker and routing structure ensures that each order type is processed by dedicated workers, showcasing a high degree of separation of concerns and future extensibility.

### Implementation Option: Mock Execution

This implementation uses Mock Execution. This choice allowed us to prioritize and rigorously test the core requirements: the architecture, queue management, concurrent processing, real-time WebSocket communication, and complex routing logic. DEX responses are simulated with realistic delays(2-3 seconds) and mock price variations(2-5% difference) to ensure the router functions correctly.

### Core Order Execution Flow

The system processes orders through a seamless flow, providing real-time transparency via a single HTTP/WebSocket endpoint:

1. Order Submission: User submits an order via POST/api/orders/execute.

2. API Validation& WS Upgrade: The API validates the order, returns a unique orderld, and immediately upgrades the HTTP connection to a WebSocket for live status updates.

3. DEX Routing: The system concurrently fetches real-time quotes from the mock Raydium and Meteora pools. It compares prices and selected liquidity to determine the optimal execution venue.

4. Execution Progress: The client receives status updates as the order moves through the system:

"pending": Order received and queued.

"routing": Comparing DEX prices.

"building": Creating the transaction payload.

"submitted": Transaction simulated to be sent to the network.

"confirmed": Transaction successful(includes mock txHash).

"failed": If any step fails(includes error/reason).

5. Transaction Settlement: The engine simulates the execution of the swap, handling slippage protection and returning the final execution price and transaction hash.

### Key Technologies



| Technology | Purpose |
| --- | --- |
| Node.js+ TypeScript | Core runtime environment, ensuring type safety and robust data integrity. |
| Fastify | High-performance web framework with built- in WebSocket support. |
| BullMQ+ Redis | Robust distributed queue system for concurrent and reliable order processing, retries, and rate limiting. |
| PostgreSQL+Prisma | Primary database for persistent storage of complete order history, managed by the Prisma ORM. |
| Redis | High-speed cache for storing and monitoring active order states and transient data. |
| Pino | High-performance logging for production- grade monitoring and diagnostics. |

### Key Features

Decoupling and Scalability: The architecture achieves microservice-like decoupling within a single repository, making each worker independent and allowing for linear scalability through horizontal scaling of worker processes.

● Distributed Worker Model: Dedicated workers for price streaming, limit order matching,sniper triggers, and order execution ensure linear scalability and high resilience.

High-Speed Matching: Orders are stored in Redis using a bucket model for$O(1)$ lookup, using specific keys like limit_bucket:{pair}:{price}, allowing instant execution for multiple orders at the same price.

Best Price Execution\& Fallback: Continuously computes and caches the BEST price across multiple DEXs(Raydium, Meteora). Includes caching& fallback logic where if the stream is temporarily unavailable, the system safely defaults to directly querying the DEXs.

Real-time Notifications: Uses WebSockets and QueueEvents to stream order stage updates from the Order Worker to the client.

Fintech-Grade Foundation: Built for throughput, using BullMQ for job queuing,

PostgreSQL for persistent storage, and implementing Exponential Backoff with Jitter for robust retry behavior.

### System Architecture

The trading engine is built on a highly decoupled microservices architecture, leveraging BullMQ for reliable, distributed task processing. This architecture emphasizes processor separation,worker orchestration, and high-throughput event pipelines.

•Client: Initiates the order and maintains a WebSocket connection to receive real-time status updates.

Server: Acts as the API gateway, handles WebSocket upgrades, and routes orders to the appropriate BullMQ queues.

● Workers(BullMQ): Independent services that handle the heavy lifting of routing, execution,and data synchronization.

● PostgreSQL: The source of truth for all historical trading data and completed order records.

● Redis: Serves as the message broker for BullMQ and acts as a high-speed cache for active order states and transient data.

![Architecture](./assets/architecture.png)

### 3 Component Deep Dive

### 1. API Server(Fastify)

The Fastify server is the primary entry point for all user interactions.

● Logging: Uses Pino for efficient, structured logging across all API endpoints and server events, critical for production monitoring.

● Connectivity: It is connected directly to both the PostgreSQL database(for initial record creation via Prisma) and the Redis instance(for queue management and real-time state updates).

● Distribution Logic: Upon receiving an order, the server validates the payload, adds the initial order details to PostgreSQL, and then distributes the order job into the appropriate BullMQ queue.

● Real-time: The server manages the WebSocket connections, enabling immediate streaming of status updates back to the originating client.

### 2. Order Worker(BullMQ)

The core execution engine for Market Orders and the final step for conditional orders.

Order Routing through Jobs: Execution logic is encapsulated as a BullMQ job. The orderld is used directly as the jobld to ensure idempotency(preventing duplicate execution).

Concurrency Control: Each job is locked while being processed, preventing other workers from concurrently accessing and executing the same order, thereby enforcing concurrency control.

Resilience: The worker attempts retries using Exponential Backoff with Jitter($\le 3$ attempts). If the job fails, it moves to a Dead Letter Queue(DLQ) for auditing and post-mortem analysis.

Workflow: It executes the trade, handles slippage simulation, and updates the order status in Redis before signaling the DBSync Worker.

### 3. Stream Worker

This component is dedicated to distributing real-time state changes and ensuring efficient quote acquisition.

● DEX Quote Caching: To prevent continuously hitting external DEX APls, the Stream Worker polls Raydium and Meteora every 500ms and caches the results in Redis using Hash Sets.

Caching& Fallback: The worker implements a fallback strategy: if the live stream of quotes encounters an error, it defaults to using the last successfully cached quotes from Redis, ensuring continuous operation.

Redis Keys: The caching keys are: quotes:${tokenln}-${tokenOut}:RAYDIUM,quotes:${tokenIn}-${tokenOut}:METEORA, and quotes:${tokenIn}-${tokenOut}:BEST.

Role: The Stream Worker monitors execution events and uses QueueEvents to broadcast status updates to the API Server's WebSocket layer.

### 4. DBSync Worker(BullMQ)

Ensuring data integrity and persistence.

Database Consistency: This worker is crucial for database consistency. It asynchronously synchronizes the final, complete order record from the transient Redis cache to the persistent PostgreSQL database(managed by Prisma).

Process: This separation of concerns ensures that the main execution path is never blocked by slow disk I/O, allowing for high throughput.

### 5. Conditional Order Workers(Limit and Sniper)

These specialized workers manage the execution of conditional orders.

Limit Worker(High-Speed Matching): This worker utilizes a Redis bucket model for$O(1)$ complexity matching. Order details and the list of orders at a specific price level are managed by Redis keys: orderKey= limit:${pair}:${orderld} and bucketKey=limit_bucket:${pair}:{order.limitPrice}.

- Sniper Worker: Watches for on-chain events. Both workers achieve order routing through jobs by pushing the orderld to the main Order Worker queue upon condition fulfillment.

### Testing and Quality Assurance

A rigorous testing methodology was employed to ensure the reliability and performance of the engine.

### Unit and Integration Testing

Comprehensive unit tests cover critical modules, including:

Routing Logic: Ensuring correct price comparison and optimal DEX selection.

Queue Behavior: Validating order distribution, concurrency limits, and resilient retry logic.We utilize Exponential Backoff with Jitter to randomize retry timing and prevent thundering herd issues. Failed jobs are moved to a Dead Letter Queue(DLQ) for later auditing.

●WebSocket Lifecycle: Verifying that all status updates are correctly emitted and streamed.

![Unit and Integration Testing](./assets/jest.png)

### Manual Testing

Manual testing was performed via the provided Postman/lnsomnia collection to simulate real-world usage and verify the end-to-end flow of Market, Limit, and Sniper orders.

### K6 Load Testing

Load testing using K6 was executed to assess the system's performance and stability under stress, specifically targeting a throughput of 100 orders per minute with$\le 10$ concurrent orders.



| Test Scenario | Goal | Result Image |
| --- | --- | --- |
| Market Order Throughput | Test sustained execution rate and latency for Market Orders. | ![Market](./assets/k6-market.png)  |
| Limit Order Throughput | Test the performance of the conditional logic under high load. | ![Limit](./assets/k6-limit.png) |
| Sniper Order Throughput | Test the rapid execution efficiency upon trigger. | ![Sniper](./assets/k6-sniper.png) |
| WebSocket Stability | Test simultaneous WebSocket connections and continuous status streaming. | ![Websocket](./assets/k6-ws.png) |

### Deployment

The entire application is deployed using a containerized approach, demonstrating strong backend engineering and production-grade architecture.

### Multi-Stage Docker Deployment

● Multi-stage optimization is utilized in the Dockerfile to create small, secure, and production-ready images for the Server and all Worker services.

● The deployment includes separate containers for all components, showcasing a fully distributed Microservice-like separation within the deployment context: Server, Order Worker, Limit/Sniper Workers, DBSync Worker, Stream Worker, PostgreSQL, and Redis.

### EC2 Instance Deployment& Monitoring

●All containerized components are deployed onto an Amazon EC2 instance using Docker Compose. This provides robust EC2 hosting for the production environment.

● Logs+ monitoring are facilitated by the use of Pino for structured logging, allowing centralized log aggregation and analysis for debugging and performance tracking.

### s Frontend Access

A simple web interface was developed to demonstrate the core functionality and visualize the real-time WebSocket status updates.

Live URL:(https://order-engine.netlify.app/)


### Thank You

Thank You for reviewing the Order Execution Engine. This project was designed to showcase expertise in distributed systems, reliable queue systems, robust caching layers, streaming+WebSockets, and scalable application architecture in a complex financial domain.