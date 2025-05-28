/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ICONS } from "../../../../assets";
import StageCommissionSettings from "../../../../components/Dashboard/SettingsPage/StageCommisionPage/StageCommissionSettings";
import {
  useGetSingleStageQuery,
  useUpdateStageMutation,
} from "../../../../redux/Features/Stage/stageApi";
import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader/Loader";
import { toast } from "sonner";

type StageFormValues = {
  stage_number: string;
  commission_percentage: number;
  donation_requirement: number;
};

const StageCommission = () => {
  const [id, setId] = useState("");
  const [stageNumber, setStageNumber] = useState(0);
  const [updateStage, { isLoading }] = useUpdateStageMutation();
  const { data } = useGetSingleStageQuery(stageNumber);
  const { register, handleSubmit, setValue } = useForm<StageFormValues>();

  useEffect(() => {
    if (data) {
      setValue("stage_number", data?.data?.stage_number);
      setValue("commission_percentage", data?.data?.commission_percentage);
      setValue("donation_requirement", data?.data?.donation_requirement);
    }
  }, [data, setValue]);

  const handleUpdateStage = async (data: StageFormValues) => {
    try {
      const payload = {
        ...data,
      };
      const response = await updateStage({
        id: stageNumber,
        data: payload,
      }).unwrap();
      if (response?.message) {
        toast.success(response?.message);
        setId("");
      }
    } catch (error: any) {
      toast.error(error?.data?.error?.message || "An error occurred");
      console.log(error);
    }
  };

  return (
    <div className="font-Outfit">
      <h1 className="text-white font-medium text-[26px] mb-5">
        Edit Stage Commissions
      </h1>

      <StageCommissionSettings setId={setId} setStageNumber={setStageNumber} />

      {id && (
        <div className="mt-[42px] flex flex-col gap-[18px]">
          <h1 className="text-white font-medium text-[26px]">
            Update Commission
          </h1>

          <form
            onSubmit={handleSubmit(handleUpdateStage)}
            className="flex flex-col gap-5"
          >
            {/* Stage Input */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="stage" className="text-neutral-85">
                Stage Number
              </label>
              <div className="flex items-center relative">
                <input
                  id="stage"
                  type="text"
                  placeholder="Stage 01"
                  {...register("stage_number")}
                  disabled
                  className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                />
                <img
                  src={ICONS.growth}
                  alt=""
                  className="size-6 absolute right-3"
                />
              </div>
            </div>

            {/* Commission Input */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="commission" className="text-neutral-85">
                Commission (%)
              </label>
              <div className="flex items-center relative">
                <input
                  id="commission"
                  type="number"
                  placeholder="08"
                  {...register("commission_percentage")}
                  className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                />
                <p className="absolute right-3 text-white">%</p>
              </div>
            </div>

            {/* Donation Input */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="donation" className="text-neutral-85">
                Donation Amount
              </label>
              <div className="flex items-center relative">
                <input
                  id="donation"
                  type="number"
                  placeholder="100"
                  {...register("donation_requirement")}
                  className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                />
                <p className="absolute right-3 text-white">$</p>
              </div>
            </div>

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
                onClick={() => setId("")}
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

export default StageCommission;
