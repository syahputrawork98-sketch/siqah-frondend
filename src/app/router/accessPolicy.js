export const ROLES = Object.freeze({
  ADMIN: "admin",
  SUPERADMIN: "superadmin",
});

export const ACCESS_POLICY = Object.freeze({
  admin: [ROLES.ADMIN],
  superadmin: [ROLES.SUPERADMIN],
});

const ROLE_ALIASES = Object.freeze({
  admin: ROLES.ADMIN,
  superadmin: ROLES.SUPERADMIN,
});

export const ROLE_STORAGE_KEY = "siqah.active_role";

export function normalizeRole(value) {
  if (!value) return null;
  return ROLE_ALIASES[String(value).trim().toLowerCase()] ?? null;
}

export function getActiveRole() {
  try {
    return normalizeRole(window.localStorage.getItem(ROLE_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function getDefaultLandingByRole(role) {
  if (role === ROLES.SUPERADMIN) return "/superadmin";
  if (role === ROLES.ADMIN) return "/admin";
  return "/";
}
