import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import DashboardHamburgerMenu from "../../components/DashboardHamburgerMenu/DashboardHamburgerMenu";

const DashboardLayout = () => {
  return (
    <div className="bg-primary-40">
      <div className="lg:hidden flex items-center justify-between w-full p-5">
        {/* Logo */}
        <Link to={"/dashboard"}>
          <img src={IMAGES.logo} alt="logo" className="z-10" />
        </Link>
        <DashboardHamburgerMenu />
      </div>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full min-h-screen flex-1 flex flex-col overflow-y-scroll overflow-hidden">
          <DashboardHeader />
          <div className="px-5 py-[30px] w-full flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
