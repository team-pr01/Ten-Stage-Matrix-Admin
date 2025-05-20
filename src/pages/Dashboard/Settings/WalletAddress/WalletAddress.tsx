import { useState } from "react";
import { ICONS } from "../../../../assets";
import { Link } from "react-router-dom";

const WalletAddress = () => {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  return (
    <div className="font-Outfit">
      <h1 className="text-white font-medium text-[26px] mb-5">
        USDT Wallet address
      </h1>
      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-6 py-8 shadow-lg text-white flex flex-col">
        <img src={ICONS.activeReferral} className="size-[68px]" />

        {/* Text Content */}
        <div>
          <p className="font-medium text-lg mt-[13px]">Active</p>
          <h3 className="text-[30px] font-medium mt-[6px]">BEP-20 Address</h3>
          <p className="text-lg text-neutral-140 mt-[13px]">
            TQ#v....8hjhjahuhuehruhasuehruewtygruhsfuhszr8748795ry
          </p>
        </div>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit mt-[17px] cursor-pointer"
        >
          Edit
        </button>
      </div>

      {isFormVisible && (
        <div className="mt-[42px] flex flex-col gap-[18px]">
          <h1 className="text-white font-medium text-[26px]">
            Update USDT Address
          </h1>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-neutral-85">
                USDT Address
              </label>
              <div className="flex items-center justify-between relative">
                <input
                  type="text"
                  placeholder="Enter your USDT address"
                  className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
                />
                <img
                  src={ICONS.wallet}
                  alt=""
                  className="size-6 absolute right-3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-neutral-85">
                BSC
              </label>
              <div className="flex items-center justify-between relative">
                <input
                  type="text"
                  placeholder="BEP-20"
                  className={`w-full px-4 py-3 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
                />
                <img
                  src={ICONS.wifi}
                  alt=""
                  className="size-6 absolute right-3"
                />
              </div>
            </div>
            <div className="flex flex-row gap-[11px]">
              <button
                type="submit"
                className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit "
              >
                Save
              </button>
              <Link
                to={"/"}
                className="bg-primary-70 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-70/60 transition duration-300 w-fit "
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default WalletAddress;
