import test from "node:test";
import assert from "node:assert/strict";
import { formatCurrencyIdr } from "../src/shared/lib/formatters.js";

test("formatCurrencyIdr formats number to IDR currency", () => {
  const formatted = formatCurrencyIdr(1500000);
  assert.match(formatted, /^Rp/);
  assert.match(formatted, /1\.500\.000/);
});

test("formatCurrencyIdr falls back to zero for invalid value", () => {
  const formatted = formatCurrencyIdr("not-a-number");
  assert.match(formatted, /^Rp/);
  assert.match(formatted, /0/);
});
