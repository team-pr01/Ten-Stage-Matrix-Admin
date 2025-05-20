import { FaUsersCog, FaUsers, FaHandHoldingUsd, FaMoneyBillWave } from "react-icons/fa";
import { MdFeed, MdSettings } from "react-icons/md";

export const dashboardSidebarLinks = [
  {
    icon: <FaUsersCog />,
    label: "User management",
    path: "/dashboard",
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