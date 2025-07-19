import { FaUsersCog, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import {  MdEmail, MdSettings } from "react-icons/md";
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
  // {
  //   icon: <FaHandHoldingUsd />,
  //   label: "Earnings & Donations TR",
  //   path: "/dashboard/earnings-donations",
  // },
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
  {
    icon: <PiHandDepositFill />,
    label: "Wallet Address",
    path: "/dashboard/wallet-address",
  },
  {
    icon: <MdEmail />,
    label: "Send Email",
    path: "/dashboard/send-email",
  },
  {
    icon: <MdSettings />,
    label: "Setting",
    path: "/dashboard/setting",
  },
];