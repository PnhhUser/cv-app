import { NavLink } from "react-router-dom";
import { RouteBase } from "../models/baseModel";

export const RouteLinkComponent: React.FC<RouteBase> = function ({
  path,
  className,
  children,
}) {
  // className mặc định

  if (!className) {
    className = ({ isActive }) =>
      `flex items-end gap-2 p-2 rounded-md justify-center lg:justify-normal 
            ${isActive ? "bg-black text-white" : "bg-gray-100"}`;
  }

  return (
    <NavLink to={path} className={className}>
      {children}
    </NavLink>
  );
};
