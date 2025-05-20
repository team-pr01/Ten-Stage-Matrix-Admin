import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";

const ReDonation = () => {
  return (
    <div className="font-Outfit">
      <h1 className="text-white font-medium text-[26px] mb-5">
        USDT Wallet address
      </h1>
      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-6 py-8 shadow-lg text-white flex flex-col">
        <img src={ICONS.activeReferral} className="size-[68px]" />

        {/* Text Content */}
        <div>
          <p className="font-medium text-lg mt-[13px]">Policy</p>
          <h3 className="text-[30px] font-medium mt-[6px]">Re-Donation Rule</h3>
          <p className="text-lg text-neutral-140 mt-[13px]">
            Set the percentage and condition for automatic re - donation when
            user reach their max earnings
          </p>
        </div>
        <div className="flex flex-row  gap-[13px]">
          <Link
            to={"/"}
            className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit mt-[17px]"
          >
            Save Changes
          </Link>
          <Link
            to={"/"}
            className="bg-primary-40 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-40/60 transition duration-300 w-fit mt-[17px]"
          >
            Cancel
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="mt-[42px] flex flex-col gap-[18px]">
        <h1 className="text-white font-medium text-[26px]">
          Re-Donation Amount
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              Percentage (%)
            </label>
            <div className="flex items-center justify-between relative">
              <input
                type="text"
                placeholder="Enter Percentage"
                className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
              />
              <p className="size-6 absolute right-3 text-white">%</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-[26px] flex flex-col gap-[18px]">
        <h1 className="text-white font-medium text-[26px]">
          Re-Donation Stages
        </h1>

        {/* Dropdown of stages */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="stage" className="text-neutral-85">
            Trigger Condition
          </label>
          <div className="flex items-center justify-between relative">
            <select
              id="stage"
              className="w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 bg-transparent appearance-none"
            >
              <option value="" disabled selected>
                Select Stage
              </option>
              {[...Array(11)].map((_, i) => (
                <option key={i + 1} value={`Stage ${i + 1}`}>
                  Stage {i + 1}
                </option>
              ))}
            </select>
            <img
              src={ICONS.condition}
              alt=""
              className="size-6 absolute right-3 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReDonation;
