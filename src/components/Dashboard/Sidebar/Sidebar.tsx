import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../../../assets";
import { dashboardSidebarLinks } from "./navlinks";

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-[330px] bg-neutral-30 border-r border-neutral-25/50 px-7 py-[19px] h-screen overflow-y-auto font-Outfit hidden xl:flex flex-col justify-between sticky top-0 left-0">
      <div className="flex flex-col gap-8">
        {/* Logo */}
      <Link to={"/"}>
        <img src={IMAGES.logo} alt="logo" className="z-10" />
      </Link>

      <div className="flex flex-col gap-8">
        {dashboardSidebarLinks?.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-2 text-lg hover:text-primary-10 transition duration-300 ${
              location.pathname === item.path ? "text-primary-10" : "text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      </div>

        {/* User profile */}
      <div className="flex items-center gap-2">
        <img src={IMAGES.dummyAvatar} alt="" className="size-11 rounded-full" />
        <div>
          <h1 className="text-white font-medium text-lg">Thomas Shelvi</h1>
        <p className="text-neutral-50 text-sm mt-[2px]">Actor</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
