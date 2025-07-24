/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import {
  useGetSettingDetailsQuery,
  useUpdateSettingMutation,
} from "../../../../redux/Features/User/adminApi";
import { toast } from "sonner";
import Loader from "../../../../components/Loader/Loader";

const Notice = () => {
  const { data: setting } = useGetSettingDetailsQuery({});
  console.log(setting);
  const [updateSetting, { isLoading }] = useUpdateSettingMutation();
  const { register, handleSubmit, reset } = useForm<any>();

  const handleUpdateCharges = async (data: any) => {
    try {
      if (!setting?.data?.notice?.enabled) {
        toast.error("Please enable the notice before updating it");
        return;
      }
      const payload = {
        notice: {
          message: data.notice,
          enabled: setting?.data?.notice?.enabled,
        },
      };

      const response = await updateSetting(payload).unwrap();
      if (response?.message) {
        toast.success(response?.message);
        reset();
      }
    } catch (error: any) {
      toast.error(error?.data?.error?.message || "An error occurred");
      console.log(error);
    }
  };

  const [pauseSystem, { isLoading: isUpdatingSetting }] =
    useUpdateSettingMutation();

  const handleManageNotice = async () => {
    try {
      const payload = {
        notice: {
          enabled: setting?.data?.notice?.enabled ? false : true,
        },
      };
      const response = await pauseSystem(payload).unwrap();
      if (response?.message) {
        toast.success(response?.message || "Notice updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-[18px]">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-medium text-lg md:text-[26px]">Update Notice</h1>
        <button
          onClick={handleManageNotice}
        
          className="bg-primary-10 text-white px-10 py-3 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer text-nowrap"
        >
          {isUpdatingSetting ? (
            <Loader size="size-6" />
          ) : setting?.data?.notice?.enabled ? (
            "Disable Notice"
          ) : (
            "Enable Notice"
          )}
        </button>
      </div>

      <form
        onSubmit={handleSubmit(handleUpdateCharges)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="commission" className="text-neutral-85">
            Notice
          </label>
          <input
            id={"notice"}
            type="text"
            placeholder="Enter notice"
            {...register("notice")}
            className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-[11px]">
          <button
            type="submit"
            className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
          >
            {isLoading ? <Loader size="size-6" /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Notice;
