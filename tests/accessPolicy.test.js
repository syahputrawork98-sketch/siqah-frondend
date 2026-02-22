import test from "node:test";
import assert from "node:assert/strict";
import {
  ROLES,
  ROLE_STORAGE_KEY,
  normalizeRole,
  getActiveRole,
  getDefaultLandingByRole,
} from "../src/app/router/accessPolicy.js";

test("normalizeRole handles case-insensitive aliases", () => {
  assert.equal(normalizeRole("ADMIN"), ROLES.ADMIN);
  assert.equal(normalizeRole("superadmin"), ROLES.SUPERADMIN);
  assert.equal(normalizeRole(" unknown "), null);
});

test("getActiveRole reads and normalizes role from localStorage", () => {
  const previousWindow = global.window;
  global.window = {
    localStorage: {
      getItem(key) {
        assert.equal(key, ROLE_STORAGE_KEY);
        return "AdMiN";
      },
    },
  };

  assert.equal(getActiveRole(), ROLES.ADMIN);

  global.window = previousWindow;
});

test("getActiveRole returns null when storage is unavailable", () => {
  const previousWindow = global.window;
  global.window = undefined;

  assert.equal(getActiveRole(), null);

  global.window = previousWindow;
});

test("getDefaultLandingByRole maps role to route", () => {
  assert.equal(getDefaultLandingByRole(ROLES.ADMIN), "/admin");
  assert.equal(getDefaultLandingByRole(ROLES.SUPERADMIN), "/superadmin");
  assert.equal(getDefaultLandingByRole("guest"), "/");
});
