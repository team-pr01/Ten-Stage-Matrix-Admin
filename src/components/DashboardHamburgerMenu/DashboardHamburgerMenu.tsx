/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { dashboardSidebarLinks } from "../Dashboard/Sidebar/navlinks";
import { IMAGES } from "../../assets";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../redux/Features/Auth/authSlice";
import { toast } from "sonner";

const DashboardHamburgerMenu: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const closestDropdown = target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  const location = useLocation();

  const handleLogout = async () => {
    // Remove cookies
    Cookies.remove("accessToken");
    Cookies.remove("role");

    // Dispatch logout and navigate
    dispatch(logout());
    toast.success("Logged out successfully.");
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative hamburgerMenu block xl:hidden">
      <FaAlignRight
        onClick={toggleHamburgerMenu}
        className="text-white size-7 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 py-5 px-6 bg-primary-70 w-[300px] overflow-y-auto h-screen transition-all duration-300 transform flex flex-col gap-5 justify-between ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          <Link to={"/"}>
            <img src={IMAGES.logo} alt="logo" className="z-10" />
          </Link>

          {dashboardSidebarLinks?.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={toggleHamburgerMenu}
              className={`flex items-center gap-2 text-xl hover:text-primary-10 transition duration-300 ${
                location.pathname === item.path
                  ? "text-primary-10"
                  : "text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="bg-primary-60 text-white font-medium px-5 py-3 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHamburgerMenu;
