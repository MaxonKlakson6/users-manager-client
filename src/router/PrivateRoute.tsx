import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_NAMES } from "src/router/routeNames";

const PrivateRoutes = () => {
  const token: string | null = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};

export default PrivateRoutes;
