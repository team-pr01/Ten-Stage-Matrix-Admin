import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import { useState } from "react";
import StatusGrid from "../../../../components/Dashboard/SettingsPage/MaxLimit/StatusBridge";

const MaxEarning = () => {
  const [activeTab, setActiveTab] = useState<
    "All Stages" | "Active" | "Inactive"
  >("All Stages");
  const tabButtons: Array<"All Stages" | "Active" | "Inactive"> = [
    "All Stages",
    "Active",
    "Inactive",
  ];
  return (
    <div className="font-Outfit">
      <h1 className="text-white font-medium text-[19px] mb-5">
        Max Earning Limits
      </h1>
      <h1 className="text-neutral-140 text-lg">
        Set the maximum earning cap for each stage. Charges apply immediately
      </h1>
      <div className="mt-[27px] relative overflow-x-auto">
        <div className="flex items-center gap-6 whitespace-nowrap">
          {tabButtons?.map((button) => (
            <button
              key={button}
              onClick={() => setActiveTab(button)}
              className={`text-xl font-medium transition-all cursor-pointer duration-300 border-b-[3px] pb-[9px] ${
                activeTab === button
                  ? "text-white border-white"
                  : "text-neutral-70 border-transparent"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
        <hr className="border border-neutral-145 w-full h-[1px] absolute top-[37.5px]" />
      </div>

      {activeTab === "All Stages" && <StatusGrid /> }

      {activeTab === "Active" && (
        <>
          <StatusGrid statusType="Active" />

        </>
      )}

      {activeTab === "Inactive" && (
        <>
          <StatusGrid statusType="InActive" />

        </>
      )}

      <div className="mt-[54px] flex flex-col gap-[18px]">
        <h1 className="text-white font-medium text-[26px]">
          Update Earning Cap
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85  bg-transparent">
              Stage
            </label>
            <div className="flex items-center justify-between relative">
              <select
                className="w-full px-4 py-3 rounded-[8px] border   border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 appearance-none  pr-10"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Stage 01
                </option>
                <option value="stage-1" className="bg-primary-70 text-white">
                  Stage 1
                </option>
                <option value="stage-2" className="bg-primary-70 text-white">
                  Stage 2
                </option>
                <option value="stage-3" className="bg-primary-70 text-white">
                  Stage 3
                </option>
              </select>
              <img
                src={ICONS.downArrow}
                alt=""
                className="size-6 absolute right-3 pointer-events-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              Max Earning Amount
            </label>
            <div className="flex items-center justify-between relative">
              <input
                type="text"
                placeholder="Enter amount (USD)"
                className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
              />
              <p className="size-6 absolute right-3 text-white"> $</p>
            </div>
          </div>

          <Link
            to={"/"}
            className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit "
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaxEarning;
