/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ICONS } from "../../../assets";
import Loader from "../../../components/Loader/Loader";
import Heading from "../../../components/Reusable/Heading";
import {
  useGetAllLevelsQuery,
  useUpdateLevelPercentageMutation,
} from "../../../redux/Features/User/adminApi";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const Levels = () => {
  const { register, handleSubmit } = useForm<any>();
  const [selectedLevelId, setSelectedLevelId] = useState("");
  const { data, isLoading } = useGetAllLevelsQuery({});
  const [updateLevelPercentage, { isLoading: isUpdating }] =
    useUpdateLevelPercentageMutation();
  const handleUpdatePercentage = async (data: any) => {
    console.log(data);
    try {
      const payload = {
        ...data,
      };
      const response = await updateLevelPercentage({
        id: selectedLevelId,
        data: payload,
      }).unwrap();
      if (response?.message) {
        toast.success(response?.message);
        setSelectedLevelId("");
      }
    } catch (error: any) {
      toast.error(error?.data?.error?.message || "An error occurred");
      console.log(error);
    }
  };
  return (
    <div>
      <Heading
        iconSrc={ICONS.stateManagement}
        title="Manage Levels"
        subtitle="Update level percentage"
      />
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader size="size-10" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 font-Outfit mt-10">
          {data?.data?.map((level: any) => {
            const isOpen = selectedLevelId === level._id;

            return (
              <div
                key={level?._id}
                className={`rounded-[15px] border-[3px] border-white/20 bg-neutral-30 text-white px-6 py-5 w-full max-w-sm ${
                  isOpen ? "h-fit" : "h-[122px]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl">Level {level?.level}</h2>
                  <span className="bg-primary-10 text-white text-sm px-3 py-1 rounded-full">
                    {level?.is_active ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-2xl font-medium">
                    Percentage {level?.percentage}%
                  </p>
                  <button
                    className="font-medium cursor-pointer text-primary-10"
                    onClick={() =>
                      setSelectedLevelId((prev) =>
                        prev === level._id ? null : level._id
                      )
                    }
                  >
                    {isOpen ? "Close" : "Edit"}
                  </button>
                </div>

                {isOpen && (
                  <form
                    onSubmit={handleSubmit(handleUpdatePercentage)}
                    className="mt-5"
                  >
                    <label htmlFor={`percentage-${level._id}`}>
                      Percentage
                    </label>
                    <input
                      id={`percentage-${level._id}`}
                      type="number"
                      placeholder="Enter percentage"
                      {...register("percentage", { required: true })}
                      className="w-full px-4 py-3 mt-2 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
                    />

                    <div className="flex justify-end gap-[11px] mt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedLevelId("")}
                        className="bg-neutral-30 text-white px-4 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
                      >
                        {isUpdating ? <Loader size="size-6" /> : "Save"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Levels;
