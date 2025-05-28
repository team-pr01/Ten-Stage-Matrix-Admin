/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineEdit } from "react-icons/ai";
import { useGetAllStagesQuery } from "../../../../redux/Features/Stage/stageApi";
import Loader from "../../../Loader/Loader";

const StageCommissionSettings = ({setId, setStageNumber} : {setId: any, setStageNumber: any}) => {
  const { data: stages, isLoading } = useGetAllStagesQuery({});
  return (
    <div className="mt-11 rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 py-7 px-[34px]">
      <h1 className="text-2xl font-medium text-white mb-6">Commission Settings</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-white">
          <thead>
            <tr className="border-b border-neutral-110">
              <th className="py-3 px-4 whitespace-nowrap">Stage</th>
              <th className="py-3 px-4 whitespace-nowrap">Donation Required</th>
              <th className="py-3 px-4 whitespace-nowrap">Commission Percentage</th>
              <th className="py-3 px-4 whitespace-nowrap">Edit Stage</th>
            </tr>
          </thead>
          {
            isLoading ?
           <tbody>
              <tr>
                <td colSpan={10} className="py-10">
                  <div className="flex justify-center items-center">
                    <Loader size="size-10" />
                  </div>
                </td>
              </tr>
            </tbody>
            :
          <tbody>
            {stages?.map((stage: any, index: number) => (
              <tr key={index} className="border-b border-neutral-110">
                <td  className="py-3 px-4 whitespace-nowrap">
                  Stage {stage?.stage_number}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  ${stage?.donation_requirement}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {stage?.commission_percentage}%
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <AiOutlineEdit onClick={() => {
                    setStageNumber(stage?.stage_number);
                    setId(stage?._id);
                  }} className="text-2xl cursor-pointer text-white" />
                </td>
              </tr>
            ))}
          </tbody>
          }
        </table>
      </div>
    </div>
  );
};

export default StageCommissionSettings;
