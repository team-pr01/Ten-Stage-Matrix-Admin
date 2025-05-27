import { FaUsersCog, FaUsers, FaHandHoldingUsd, FaMoneyBillWave } from "react-icons/fa";
import {  MdSettings } from "react-icons/md";
import { PiHandDepositFill } from "react-icons/pi";

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
    icon: <PiHandDepositFill />,
    label: "Donation & Deposits",
    path: "/dashboard/donation-deposits",
  },
  // {
  //   icon: <MdFeed />,
  //   label: "Newsfeed",
  //   path: "/dashboard/newsfeed",
  // },
  {
    icon: <MdSettings />,
    label: "Setting",
    path: "/dashboard/setting",
  },
];