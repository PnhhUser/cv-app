import { Outlet } from "react-router-dom";
import EducationComponent from "../components/education";
import NavComponent from "../components/nav";
import PersonInfomationComponent from "../components/personInfomation";

function Layout() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto] lg:auto-rows-fr h-screen bg-gray-50 gap-2 py-2 px-2">
      <div className="col-span-10 lg:row-span-7 lg:col-span-4 shadow bg-white rounded-md">
        <PersonInfomationComponent />
      </div>
      <div className="col-span-10 lg:row-span-6 lg:col-span-4 lg:col-start-1 shadow bg-white rounded-md">
        <EducationComponent />
      </div>
      <div className="hidden lg:block col-span-12 lg:col-span-4 lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-span-13 shadow bg-white rounded-md">
        <NavComponent />
      </div>
      <div className="col-span-10 row-span-12 lg:col-span-12 lg:col-start-7 lg:row-start-1 lg:row-span-13 shadow bg-white rounded-md">
        <Outlet />
      </div>
      <div className="col-start-11 col-end-13 row-start-1 row-span-14 shadow bg-white rounded-md lg:hidden">
        <NavComponent />
      </div>
    </div>
  );
}

export default Layout;
