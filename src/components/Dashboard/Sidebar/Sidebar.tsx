import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../../../assets";
import { FaUsersCog, FaUsers, FaHandHoldingUsd, FaMoneyBillWave } from "react-icons/fa";
import { MdFeed, MdSettings } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const dashboardSidebarLinks = [
  {
    icon: <FaUsersCog />,
    label: "User management",
    path: "/dashboard/user-management",
  },
  {
    icon: <FaUsers />,
    label: "Stage Management",
    path: "/dashboard/stage-management",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Earnings & Donations TR",
    path: "/dashboard/earnings-donations",
  },
  {
    icon: <FaMoneyBillWave />,
    label: "Withdrawals",
    path: "/dashboard/withdrawals",
  },
  {
    icon: <MdFeed />,
    label: "Newsfeed",
    path: "/dashboard/newsfeed",
  },
  {
    icon: <MdSettings />,
    label: "Setting",
    path: "/dashboard/setting",
  },
];
  return (
    <div className="w-[330px] bg-neutral-30 border-r border-neutral-25/50 px-7 py-[19px] h-screen overflow-y-auto font-Outfit flex flex-col gap-[30px] sticky top-0 left-0">
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
  );
};

export default Sidebar;
