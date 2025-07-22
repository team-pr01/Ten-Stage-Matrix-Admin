import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import MainLayout from "../layouts/MainLayout/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import StateManagement from "../pages/Dashboard/StateManagement/StateManagement";
import Withdrawals from "../pages/Dashboard/Withdrawals/Withdrawals";
import Settings from "../pages/Dashboard/Settings/Settings";
import UserManagement from "../pages/Dashboard/Settings/UserManagement/UserManagement";
import ChargesOverview from "../pages/Dashboard/Settings/ChargesOverview/ChargesOverview";
import StageCommission from "./../pages/Dashboard/Settings/StageCommission/StageCommission";
import ReDonation from "../pages/Dashboard/Settings/ReDonation/ReDonation";
import MaxEarning from "../pages/Dashboard/Settings/MaxEarning/MaxEarning";
import DOnationAndDeposits from "../pages/Dashboard/DOnationAndDeposits/DOnationAndDeposits";
import ProtectedRoute from "./ProtectedRoute";
import ManageCharges from "../pages/Dashboard/Settings/ManageCharges/ManageCharges";
import Limitations from "../components/Dashboard/SettingsPage/Limitations/Limitations";
import WalletAddress from "../pages/Dashboard/WalletAddress/WalletAddress";
import ManageWalletAddress from "../pages/Dashboard/ManageWalletAddress/ManageWalletAddress";
import SendEmail from "../pages/Dashboard/SendEmail/SendEmail";
import Levels from "../pages/Dashboard/Levels/Levels";
import Notice from "../pages/Dashboard/Settings/Notice/Notice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "stage-management",
        element: <StateManagement />,
      },
      {
        path: "withdrawals",
        element: <Withdrawals />,
      },
      {
        path: "donation-deposits",
        element: <DOnationAndDeposits />,
      },
      {
        path: "levels",
        element: <Levels/>,
      },
      {
        path: "send-email",
        element: <SendEmail/>,
      },
      {
        path: "setting",
        element: <Settings />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "charges-overview",
        element: <ChargesOverview />,
      },
      {
        path: "limitations",
        element: <Limitations />,
      },
      {
        path: "wallet-address",
        element: <WalletAddress />,
      },
      {
        path: "stage-settings",
        element: <StageCommission />,
      },
      {
        path: "re-donation-rules",
        element: <ReDonation />,
      },
      {
        path: "system-control",
        element: <ReDonation />,
      },
      {
        path: "max-earning",
        element: <MaxEarning />,
      },
      {
        path: "manage-wallet-address",
        element: <ManageWalletAddress />,
      },
      {
        path: "manage-charges",
        element: <ManageCharges />,
      },
      {
        path: "manage-notice",
        element: <Notice />,
      },
    ],
  },
]);
