import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  const token = sessionStorage.getItem("token");
  const location = useLocation();
  console.log(token);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
