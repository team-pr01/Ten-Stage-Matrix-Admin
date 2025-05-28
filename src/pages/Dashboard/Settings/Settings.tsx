/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import AllControls from "../../../components/Dashboard/SettingsPage/AllControls/AllControls";
import { useGetSettingDetailsQuery, usePauseSystemMutation } from "../../../redux/Features/User/adminApi";
import Loader from "../../../components/Loader/Loader";

const Settings = () => {
  const {data} = useGetSettingDetailsQuery({});
  const [pauseSystem, {isLoading}] = usePauseSystemMutation();

  const handlePauseSystem = async () => {
    try {
      const payload = {
        maintenance_mode : {
          enabled : data?.data?.maintenance_mode?.enabled ? false : true
        }
      };
      const response = await pauseSystem(payload).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="font-Outfit">
      <Heading
        iconSrc={ICONS.adminControl}
        title="Admin Controls"
        subtitle="Modify system settings and trigger actions"
      />
      <AllControls />

      <h1 className="font-medium text-xl text-white mt-7 mb-5">
        System Status
      </h1>
      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-6 py-8 shadow-lg text-white flex flex-col">
        <img src={ICONS.currentStage} className="size-[86px]" />

        {/* Text Content */}
        <div>
          <p className="font-medium text-lg mt-[13px]">Current status</p>
          <h3 className="text-[34px] font-medium mt-[6px]">System {data?.data?.maintenance_mode?.enabled ? "Paused" : "Active"}</h3>
          <p className="text-sm text-neutral-135 mt-[13px]">
            Platform is running normally.
          </p>
        </div>
        <button
        onClick={handlePauseSystem}
          className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit mt-[17px] cursor-pointer"
        >
          {isLoading ? <Loader size="size-6" /> : data?.data?.maintenance_mode?.enabled ? "Resume System" : "Pause System"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
