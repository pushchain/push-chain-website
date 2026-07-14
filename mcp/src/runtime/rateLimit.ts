/**
 * In-memory token bucket per client IP. On serverless this is explicitly
 * best effort: each warm instance has its own buckets and a cold start
 * resets them. It still stops a single client from hammering one instance.
 * Disable with MCP_DISABLE_RATE_LIMIT=1 (used by tests and local
 * MCP Inspector sessions).
 */

const CAPACITY = 20;
const REFILL_PER_SECOND = 0.5;
const MAX_TRACKED_CLIENTS = 5000;
const IDLE_EVICTION_MS = 10 * 60 * 1000;

interface Bucket {
  tokens: number;
  updatedMs: number;
}

const buckets = new Map<string, Bucket>();

export interface RateLimitDecision {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function checkRateLimit(clientKey: string, nowMs: number = Date.now()): RateLimitDecision {
  if (process.env.MCP_DISABLE_RATE_LIMIT === '1') {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (buckets.size > MAX_TRACKED_CLIENTS) {
    for (const [key, bucket] of buckets) {
      if (nowMs - bucket.updatedMs > IDLE_EVICTION_MS) {
        buckets.delete(key);
      }
    }
    // Pathological case: many distinct, active clients. Drop oldest entries.
    while (buckets.size > MAX_TRACKED_CLIENTS) {
      const oldest = buckets.keys().next().value;
      if (oldest === undefined) break;
      buckets.delete(oldest);
    }
  }

  const bucket = buckets.get(clientKey) ?? { tokens: CAPACITY, updatedMs: nowMs };
  const elapsedSeconds = Math.max(0, (nowMs - bucket.updatedMs) / 1000);
  bucket.tokens = Math.min(CAPACITY, bucket.tokens + elapsedSeconds * REFILL_PER_SECOND);
  bucket.updatedMs = nowMs;

  if (bucket.tokens < 1) {
    buckets.set(clientKey, bucket);
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((1 - bucket.tokens) / REFILL_PER_SECOND),
    };
  }

  bucket.tokens -= 1;
  buckets.set(clientKey, bucket);
  return { allowed: true, retryAfterSeconds: 0 };
}

export function resetRateLimitForTests(): void {
  buckets.clear();
}
