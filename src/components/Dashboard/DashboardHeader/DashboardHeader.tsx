// import { MdOutlineNotificationsNone } from "react-icons/md";
import DashboardHamburgerMenu from "../../DashboardHamburgerMenu/DashboardHamburgerMenu";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/Features/Auth/authSlice";
import { toast } from "sonner";
const DashboardHeader = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const handleLogout = async () => {
    // Remove cookies
    Cookies.remove("accessToken");
    Cookies.remove("role");

    // Dispatch logout and navigate
    dispatch(logout());
    toast.success("Logged out successfully.");
    navigate("/");
  };
  return (
    <div className="bg-neutral-30 p-5 font-Outfit hidden lg:flex items-center justify-between">
      <h1 className="text-white font-medium text-2xl">Admin Dashboard</h1>

      <div className="flex items-center gap-[18px]">
        {/* <MdOutlineNotificationsNone className="text-neutral-25 text-3xl" /> */}
        <button className="text-white font-medium bg-primary-10 px-5 py-3 rounded-md">
          Connect wallet
        </button>
        <button onClick={handleLogout} className="bg-primary-60 text-white font-medium px-5 py-3 rounded-md cursor-pointer">
          Logout
        </button>
        <DashboardHamburgerMenu />
      </div>
    </div>
  );
};

export default DashboardHeader;
