import {
  InformationCircleIcon,
  BriefcaseIcon,
  SparklesIcon,
  CodeBracketIcon,
} from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

const NavComponent: React.FC = function () {
  return (
    <div className="p-2">
      <div className="flex flex-col gap-4 justify-end h-[94vh] lg:justify-normal lg:h-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-end gap-2 p-2 rounded-md justify-center lg:justify-normal 
            ${isActive ? "bg-black text-white" : "bg-gray-100"}`
          }
        >
          <InformationCircleIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold hidden lg:block">
            Mục tiêu
          </span>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `flex items-end gap-2 p-2 rounded-md justify-center lg:justify-normal 
            ${isActive ? "bg-black text-white" : "bg-gray-100"}`
          }
        >
          <BriefcaseIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold hidden lg:block">
            Kinh nghiệm
          </span>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `flex items-end gap-2 p-2 rounded-md justify-center lg:justify-normal 
            ${isActive ? "bg-black text-white" : "bg-gray-100"}`
          }
        >
          <SparklesIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold hidden lg:block">Kỹ năng</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-end gap-2 p-2 rounded-md justify-center lg:justify-normal 
            ${isActive ? "bg-black text-white" : "bg-gray-100"}`
          }
        >
          <CodeBracketIcon className="size-6 bg-black text-white p-1 rounded-md" />
          <span className="text-sm font-semibold hidden lg:block">Dự án</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavComponent;
