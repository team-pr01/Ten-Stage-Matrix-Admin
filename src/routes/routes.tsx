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
import WalletAddress from "../pages/Dashboard/Settings/WalletAddress/WalletAddress";

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
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "stage-management",
        element: <StateManagement/>,
      },
      {
        path: "earnings-donations",
        element: <StateManagement/>,
      },
      {
        path: "withdrawals",
        element: <Withdrawals/>,
      },
      {
        path: "newsfeed",
        element: <StateManagement/>,
      },
      {
        path: "setting",
        element: <Settings/>,
      },
      {
        path: "user-management",
        element: <UserManagement/>,
      },
      {
        path: "charges-overview",
        element: <ChargesOverview/>,
      },
      {
        path: "wallet-address",
        element: <WalletAddress/>,
      },
    ],
  },
]);