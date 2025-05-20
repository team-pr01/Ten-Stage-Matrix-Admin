import { MdOutlineNotificationsNone } from "react-icons/md";
import DashboardHamburgerMenu from "../../DashboardHamburgerMenu/DashboardHamburgerMenu";

const DashboardHeader = () => {
    return (
        <div className="bg-neutral-30 p-5 font-Outfit hidden lg:flex items-center justify-between">
            <h1 className="text-white font-medium text-2xl">Admin Dashboard</h1>

            <div className="flex items-center gap-[18px]">
                <MdOutlineNotificationsNone className="text-neutral-25 text-3xl" />
                <button className="text-white font-medium bg-primary-10 px-5 py-3 rounded-md">Connect wallet</button>
                <DashboardHamburgerMenu/>
            </div>
        </div>
    );
};

export default DashboardHeader;