import { ICONS } from "../../../../assets";
import CommissionSetting from "../../../../components/Dashboard/SettingsPage/UserManagementPage/CommissionSetting/CommissionSetting";

const UserManagement = () => {
  
  return (
    <div className="font-Outfit">
      <h1 className="text-white font-medium text-[26px]">User Management</h1>

      <div className="flex flex-col md:flex-row items-center gap-7 mt-5">
        {/* Search bar */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-neutral-85">
            Search User
          </label>
          <div className="flex items-center justify-between relative">
            <input
              type="text"
              placeholder="Search by name,email, or ID"
              className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
            />
            <img
              src={ICONS.search}
              alt=""
              className="size-6 absolute right-3"
            />
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-neutral-85">
            Filter Status
          </label>
          <div className="flex items-center justify-between relative">
            <input
              type="text"
              placeholder="All , Active, Inactive"
              className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
            />
            <img
              src={ICONS.filter}
              alt=""
              className="size-6 absolute right-3"
            />
          </div>
        </div>
      </div>

      <CommissionSetting/>
    </div>
  );
};

export default UserManagement;
