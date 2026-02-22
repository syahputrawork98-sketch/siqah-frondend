import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getActiveRole, getDefaultLandingByRole } from "@/app/router/accessPolicy";

export default function RoleGuard({ allowedRoles = [] }) {
  const location = useLocation();
  const activeRole = getActiveRole();

  // Keep route access backward-compatible during migration when session is not wired yet.
  if (!activeRole) {
    return <Outlet />;
  }

  if (allowedRoles.includes(activeRole)) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={getDefaultLandingByRole(activeRole)}
      replace
      state={{ from: location.pathname }}
    />
  );
}
