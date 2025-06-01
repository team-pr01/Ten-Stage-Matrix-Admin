import { useForm } from "react-hook-form";
import { useGetSettingDetailsQuery, useUpdateSettingMutation } from "../../../../redux/Features/User/adminApi";
import Loader from "../../../Loader/Loader";
import { toast } from "sonner";

type TFormValues = {
  max_withdrawal: string;
  min_withdrawal: string;
  max_transfer: string;
  min_transfer: string;
};
const Limitations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const { data:setting } = useGetSettingDetailsQuery({});
  console.log(setting);
  const [updateSetting, {isLoading}] = useUpdateSettingMutation();

  const handleUpdateLimit = async (data: TFormValues) => {
    try {
      const payload = {
        limits: {
          max_withdrawal: Number(data.max_withdrawal ?? setting?.data?.limits?.max_withdrawal),
          min_withdrawal: Number(data.min_withdrawal ?? setting?.data?.limits?.min_withdrawal),
          max_transfer: Number(data.max_transfer ?? setting?.data?.limits?.max_transfer),
          min_transfer: Number(data.min_transfer ?? setting?.data?.limits?.min_transfer),
        },
      };
      const response = await updateSetting(payload).unwrap();
      if(response?.message) toast.success(response?.message);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="font-Outfit">
      <div className="flex flex-col gap-[18px]">
        <h1 className="text-white font-medium text-[26px]">
          Update Max/Min limits
        </h1>
        <form
          onSubmit={handleSubmit(handleUpdateLimit)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2 mt-[17px]">
            <label htmlFor="" className="text-neutral-85">
              Max Withdraw Limit
            </label>
            <input
              type="number"
              placeholder="Example: 10"
              {...register("max_withdrawal")}
              className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.max_withdrawal ? "border-red-500" : "border-neutral-90"
              }`}
            />
            {typeof errors === "object" && "message" in errors && (
              <span className="text-red-500 text-sm">
                {String(errors.message)}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-[17px]">
            <label htmlFor="" className="text-neutral-85">
              Min Withdraw Limit
            </label>
            <input
              type="number"
              placeholder="Enter your passcode"
              {...register("min_withdrawal")}
              className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.min_withdrawal ? "border-red-500" : "border-neutral-90"
              }`}
            />
            {typeof errors === "object" && "message" in errors && (
              <span className="text-red-500 text-sm">
                {String(errors.message)}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-[17px]">
            <label htmlFor="" className="text-neutral-85">
              Max Transfer Limit
            </label>
            <input
              type="number"
              placeholder="Enter your passcode"
              {...register("max_transfer")}
              className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.max_transfer ? "border-red-500" : "border-neutral-90"
              }`}
            />
            {typeof errors === "object" && "message" in errors && (
              <span className="text-red-500 text-sm">
                {String(errors.message)}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-[17px]">
            <label htmlFor="" className="text-neutral-85">
              Min Transfer Limit
            </label>
            <input
              type="number"
              placeholder="Enter your passcode"
              {...register("min_transfer")}
              className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.min_transfer ? "border-red-500" : "border-neutral-90"
              }`}
            />
            {typeof errors === "object" && "message" in errors && (
              <span className="text-red-500 text-sm">
                {String(errors.message)}
              </span>
            )}
          </div>

          <button className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer">
           {isLoading ? <Loader size="size-6" /> : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Limitations;
