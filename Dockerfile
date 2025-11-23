FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# Copy source
COPY prisma ./prisma
COPY src ./src
COPY generated ./generated
COPY tsconfig.json ./
COPY .env.production .env

RUN apt-get update -y && apt-get install -y openssl

RUN npm run build



FROM node:22-slim AS runtime

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm install --omit=dev

RUN apt-get update -y && apt-get install -y openssl

# Copy build + prisma client + schema
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/prisma ./prisma

COPY .env.production .env

EXPOSE 3000

CMD ["node", "dist/server.js"]
