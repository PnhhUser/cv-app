import { Navigate, Outlet } from "react-router-dom";
import { PrivateRouteProps } from "../core/model/auth.model";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
