/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useGetStageStatsQuery } from "../../../../redux/Features/Stage/stageApi";
import Loader from "../../../Loader/Loader";

const Stages = () => {
  const { data, isLoading } = useGetStageStatsQuery({});

  return (
    isLoading ?
    <div className="flex items-center justify-center">
      <Loader size="size-10" />
    </div>
    :
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-Outfit">
      {data?.data?.stages?.map((stage : any) => {
        return (
          <div
            key={stage?._id}
            className="rounded-[15px] border-[3px] border-white/20 bg-neutral-30 text-white px-6 py-5 w-full max-w-sm"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl">Stage {stage?.stage_number}</h2>
              <span className="bg-primary-10 text-white text-sm px-3 py-1 rounded-full">
                {stage?.stats?.total_users} users
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl font-medium">Total donated</p>
              <p className="font-medium">${stage?.stats?.total_donations}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stages;
