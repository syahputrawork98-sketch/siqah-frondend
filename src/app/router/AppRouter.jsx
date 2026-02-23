import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RoleGuard from "@/app/router/RoleGuard";
import { ACCESS_POLICY } from "@/app/router/accessPolicy";
import PublicLayout from "@/app/layouts/PublicLayout";
import RoleLayout from "@/app/layouts/RoleLayout";
import {
  ADMIN_ROUTES,
  PUBLIC_ROUTES,
  SUPERADMIN_ROUTES,
} from "@/app/router/routes";

function renderRoutes(routes, keyPrefix) {
  return routes.map((route, index) => {
    if (route.index) {
      return (
        <Route
          key={`${keyPrefix}-index-${index}`}
          index
          element={route.element}
        />
      );
    }

    return (
      <Route
        key={`${keyPrefix}-${route.path}-${index}`}
        path={route.path}
        element={route.element}
      />
    );
  });
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          {renderRoutes(PUBLIC_ROUTES, "public")}
        </Route>

        <Route element={<RoleGuard allowedRoles={ACCESS_POLICY.superadmin} />}>
          <Route path="/superadmin" element={<RoleLayout role="superadmin" />}>
            {renderRoutes(SUPERADMIN_ROUTES, "superadmin")}
          </Route>
        </Route>

        <Route element={<RoleGuard allowedRoles={ACCESS_POLICY.admin} />}>
          <Route path="/admin" element={<RoleLayout role="admin" />}>
            {renderRoutes(ADMIN_ROUTES, "admin")}
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
