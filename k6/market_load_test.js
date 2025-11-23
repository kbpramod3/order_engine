import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 50,
  duration: "30s",
};

export default function () {
  const payload = JSON.stringify({
    tokenIn: "SOL",
    tokenOut: "USDC",
    amount: 1,
    type: "market"
  });

  const params = {
    headers: { "Content-Type": "application/json" },
  };

  const res = http.post("http://localhost:3000/api/orders/execute", payload, params);

  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(0.2);
}
