import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40 flex">
      <Sidebar />   
      <div className="w-full px-5 py-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
