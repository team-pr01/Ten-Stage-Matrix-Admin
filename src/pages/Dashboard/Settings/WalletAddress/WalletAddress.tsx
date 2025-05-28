import { useState } from "react";
import { ICONS } from "../../../../assets";
import { Link } from "react-router-dom";
import {
  useGetSettingDetailsQuery,
  useUpdateAdminWalletAddressMutation,
} from "../../../../redux/Features/User/adminApi";
import { useForm } from "react-hook-form";
import Loader from "../../../../components/Loader/Loader";

type TFormValues = {
  admin_wallet_address: string;
};
const WalletAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();
  const { data } = useGetSettingDetailsQuery({}); //for wallet address

  const [updateAdminWalletAddress, { isLoading }] =
    useUpdateAdminWalletAddressMutation();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const handleUpdateAdminWalletAddress = async (data: TFormValues) => {
    try {
      const payload = {
        admin_wallet_address: data.admin_wallet_address,
      };
      const response = await updateAdminWalletAddress(payload).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="font-Outfit">
      <h1 className="text-white font-medium text-[26px] mb-5">
        USDT Wallet address
      </h1>
      <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-6 py-8 shadow-lg text-white flex flex-col">
        <img src={ICONS.activeReferral} className="size-[68px]" />

        {/* Text Content */}
        <div>
          <h3 className="text-[30px] font-medium mt-[6px]">Wallet Address</h3>
          <p className="text-lg text-neutral-140 mt-[13px]">
            {data?.data?.admin_wallet_address || "Not Available"}
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
          <form
            onSubmit={handleSubmit(handleUpdateAdminWalletAddress)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-neutral-85">
                USDT Address
              </label>
              <div className="flex items-center justify-between relative">
                <input
                  type="text"
                  placeholder="Enter your USDT address"
                  {...register("admin_wallet_address")}
                  className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                    errors?.admin_wallet_address
                      ? "border-red-500"
                      : "border-neutral-90"
                  }`}
                />
                <img
                  src={ICONS.wallet}
                  alt=""
                  className="size-6 absolute right-3"
                />
              </div>
            </div>

            <div className="flex flex-row gap-[11px]">
              <button
                type="submit"
                className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
              >
                {isLoading ? <Loader size="size-6" /> : "Save"}
              </button>
              <Link
                to={"/dashboard"}
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
