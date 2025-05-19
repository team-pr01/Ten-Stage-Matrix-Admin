import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40 flex">
      <Sidebar />   
      <div className="w-full">
        <DashboardHeader/>
        <div className="px-5 py-[30px]">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
