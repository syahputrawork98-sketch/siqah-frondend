import test from "node:test";
import assert from "node:assert/strict";
import { ApiError } from "../src/shared/api/apiError.js";

test("ApiError keeps status and data metadata", () => {
  const payload = { code: "INVALID_TOKEN" };
  const error = new ApiError("Unauthorized", { status: 401, data: payload });

  assert.equal(error.name, "ApiError");
  assert.equal(error.message, "Unauthorized");
  assert.equal(error.status, 401);
  assert.deepEqual(error.data, payload);
});

test("ApiError applies default metadata when omitted", () => {
  const error = new ApiError("Unknown");

  assert.equal(error.status, 0);
  assert.equal(error.data, null);
});
