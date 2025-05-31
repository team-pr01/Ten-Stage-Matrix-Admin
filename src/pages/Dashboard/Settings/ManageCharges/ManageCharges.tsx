/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSettingDetailsQuery,
  useUpdateSettingMutation,
} from "../../../../redux/Features/User/adminApi";
import ChargesSetting from "./ChargesSetting";
import Loader from "../../../../components/Loader/Loader";

type StageFormValues = {
  withdrawal_charge: number;
  transfer_charge: number;
  deposit_charge: number;
};
const ManageCharges = () => {
  const [key, setKey] = useState("");
  const [updateSetting, { isLoading }] = useUpdateSettingMutation();
  const { register, handleSubmit } = useForm<StageFormValues>();

  const { data: charge } = useGetSettingDetailsQuery({});

  const handleUpdateCharges = async (data: StageFormValues) => {
    try {
      const payload = {
        charge_fee: {
          withdrawal_charge: Number(
            data.withdrawal_charge ??
              charge?.data?.charge_fee?.withdrawal_charge
          ),
          transfer_charge: Number(
            data.transfer_charge ?? charge?.data?.charge_fee?.transfer_charge
          ),
          deposit_charge: Number(
            data.deposit_charge ?? charge?.data?.charge_fee?.deposit_charge
          ),
        },
      };

      const response = await updateSetting(payload).unwrap();
      console.log(response);
      if (response?.message) {
        toast.success(response?.message);
        setKey("");
      }
    } catch (error: any) {
      toast.error(error?.data?.error?.message || "An error occurred");
      console.log(error);
    }
  };
  return (
    <div className="font-Outfit">
      <ChargesSetting setKey={setKey} />

      {key && (
        <div className="mt-[42px] flex flex-col gap-[18px]">
          <h1 className="text-white font-medium text-[26px]">Update Charges</h1>

          <form
            onSubmit={handleSubmit(handleUpdateCharges)}
            className="flex flex-col gap-5"
          >
            {key === "deposit_charge" && (
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="commission" className="text-neutral-85">
                  Deposit Charge
                </label>
                <input
                  id={"deposit_charge"}
                  type="number"
                  placeholder="Example - 4"
                  {...register("deposit_charge")}
                  className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                />
              </div>
            )}
            {key === "transfer_charge" && (
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="commission" className="text-neutral-85">
                  Transfer Charge
                </label>
                <input
                  id={"transfer_charge"}
                  type="number"
                  placeholder="Example - 4"
                  {...register("transfer_charge")}
                  className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                />
              </div>
            )}
            {key === "withdrawal_charge" && (
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="commission" className="text-neutral-85">
                  Withdrawal Charge
                </label>
                <input
                  id={"withdrawal_charge"}
                  type="number"
                  placeholder="Example - 4"
                  {...register("withdrawal_charge")}
                  className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                />
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-row gap-[11px]">
              <button
                type="submit"
                className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
              >
                {isLoading ? <Loader size="size-6" /> : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setKey("")}
                className="bg-primary-70 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageCharges;
