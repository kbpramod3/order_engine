export class CircuitBreaker {
  private failures = 0;
  private state: "CLOSED" | "OPEN" | "HALF_OPEN" = "CLOSED";
  private lastFailureTime = 0;

  constructor(
    private failureThreshold = 3,
    private cooldownMs = 5000,
    private halfOpenTrialMs = 3000
  ) {}

  allowRequest() {
    if (this.state === "OPEN") {
      const now = Date.now();
      if (now - this.lastFailureTime > this.cooldownMs) {
        this.state = "HALF_OPEN";
        return true;
      }
      return false;
    }
    return true;
  }

  recordFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();

    if (this.failures >= this.failureThreshold) {
      this.state = "OPEN";
    }
  }

  recordSuccess() {
    this.failures = 0;
    this.state = "CLOSED";
  }
}
