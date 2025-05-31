/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import Stages from "../../../components/Dashboard/StagesManagementPage/Stages/Stages";
import Heading from "../../../components/Reusable/Heading";
import {
  useGetAllCommissionsQuery,
} from "../../../redux/Features/User/adminApi";

const StateManagement = () => {

  const { data: commission } = useGetAllCommissionsQuery({});

  const data = [
    {
      icon: ICONS.totalDonation,
      title: "Total donation",
      value: `$${commission?.data?.donations?.total_amount || 0}`,
    },
    {
      icon: ICONS.totalPayment,
      title: "Total Deposit",
      value: `$${commission?.data?.deposits?.total_amount || 0}`,
    },
    {
      icon: ICONS.withdrawals,
      title: "Total Withdraw",
      value: `$${commission?.data?.withdrawals?.total_amount || 0}`,
    },
    {
      icon: ICONS.totalUser,
      title: "Total Users",
      value: `${commission?.data?.users?.total || 0}`,
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-7">
        <Heading
          iconSrc={ICONS.stateManagement}
          title="Stage Management"
          subtitle="Overview off all stages, users ,and cycles"
        />
        <Stages />
      </div>
      <div className="flex flex-col gap-7">
        <Heading
          iconSrc={ICONS.earningAndDonation}
          title=" Earnings & Donations Tracking "
          subtitle="Track total donations and payouts"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 flex-wrap">
          {data?.map((item) => (
            <div
              key={item.title}
              className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center px-[100px] py-[30px] w-full`}
            >
              <img src={item?.icon} alt="" className="size-[90px]" />
              <h2 className="text-white text-2xl font-medium capitalize mt-6 text-center">
                {item?.title}
              </h2>
              <h1
                className={`text-white font-medium capitalize mt-[6px] text-center text-[34px]`}
              >
                {item?.value}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateManagement;
