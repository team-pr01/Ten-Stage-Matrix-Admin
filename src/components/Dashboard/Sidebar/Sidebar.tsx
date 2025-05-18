import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../../../assets";
import {
  MdDashboard,
  MdPeopleAlt,
  MdOutlineSettings,
  MdReport,
} from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaDonate, FaMoneyCheckAlt } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const dashboardSidebarLinks = [
    {
      icon: <MdDashboard />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <AiOutlineTransaction />,
      label: "Transactions",
      path: "/dashboard/transactions",
    },
    {
      icon: <FiSend />,
      label: "Fund Transfer",
      path: "/dashboard/fund-transfer",
    },
    {
      icon: <MdPeopleAlt />,
      label: "Network",
      path: "/dashboard/network",
    },
    {
      icon: <RiMoneyDollarCircleLine />,
      label: "Deposit",
      path: "/dashboard/deposit",
    },
    {
      icon: <FaMoneyCheckAlt />,
      label: "Withdraw",
      path: "/dashboard/withdraw",
    },
    {
      icon: <FaDonate />,
      label: "Donate",
      path: "/dashboard/donate",
    },
    {
      icon: <MdReport />,
      label: "Report",
      path: "/dashboard/report",
    },
    {
      icon: <MdOutlineSettings />,
      label: "Setting",
      path: "/dashboard/setting",
    },
  ];
  return (
    <div className="w-[323px] bg-neutral-30 border-r border-neutral-25/50 px-10 py-[19px] h-screen overflow-y-auto font-Outfit flex flex-col gap-[30px] sticky top-0 left-0">
      {/* Logo */}
      <Link to={"/"}>
        <img src={IMAGES.logo} alt="logo" className="z-10" />
      </Link>

      <div className="flex flex-col gap-8">
        {dashboardSidebarLinks?.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-2 text-xl hover:text-primary-10 transition duration-300 ${
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
