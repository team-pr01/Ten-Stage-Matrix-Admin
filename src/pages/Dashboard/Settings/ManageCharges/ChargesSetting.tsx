/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../../../../components/Loader/Loader";
import { useGetSettingDetailsQuery } from "../../../../redux/Features/User/adminApi";
import { ICONS } from "../../../../assets";

const ChargesSetting = ({setKey} : {setKey: any}) => {
  const { data, isLoading } = useGetSettingDetailsQuery({});
  const charges = [
    {
      title: "Deposit Charge",
      key: "deposit_charge",
      value: data?.data?.charge_fee?.deposit_charge,
    },
    {
      title: "Transfer Charge",
      key: "transfer_charge",
      value: data?.data?.charge_fee?.transfer_charge,
    },
    {
      title: "Withdrawal Charge",
      key: "withdrawal_charge",
      value: data?.data?.charge_fee?.withdrawal_charge,
    },
  ];
  return (
    <div className="font-Outfit">
      <h1 className="text-2xl font-medium text-white mb-6">Charges Overview</h1>

      <div>
        {isLoading ? (
          <div className="h-[400px] flex justify-center items-center">
            <Loader size="size-10" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {charges.map((charge) => (
              <div
                key={charge?.key}
                className="border-[3px] border-neutral-25/20 bg-neutral-30 p-5 rounded-xl"
              >
                <img src={ICONS.withdrawals} alt="" className="size-10" />
                <h1 className="text-lg text-white mt-3">{charge?.title}</h1>
                <p className="mt-1 text-white text-2xl font-bold">
                  {charge?.value}%
                </p>

                <button onClick={() => setKey(charge?.key)} className="bg-neutral-500/50 text-white px-6 py-2 rounded-full text-sm hover:bg-primary-10 transition duration-300 mt-4 cursor-pointer">
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChargesSetting;
