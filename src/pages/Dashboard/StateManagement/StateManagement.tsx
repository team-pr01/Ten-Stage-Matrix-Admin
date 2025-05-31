import { ICONS } from "../../../assets";
import Stages from "../../../components/Dashboard/StagesManagementPage/Stages/Stages";
import Heading from "../../../components/Reusable/Heading";
import { useGetAllDonationsQuery, useGetAllUsersQuery } from "../../../redux/Features/User/adminApi";

const StateManagement = () => {
  const { data: allUsers } = useGetAllUsersQuery({});
  const {data:donations} = useGetAllDonationsQuery({});

  const data = [
    {
      icon: ICONS.totalDonation,
      title: "Total donation",
      value: `$${donations?.data?.donations?.total_donations || 0}`,
    },
    {
      icon: ICONS.totalPayment,
      title: "Total Deposit",
      value: `$${donations?.data?.transactions?.deposits || 0}`,
    },
    {
      icon: ICONS.totalUser,
      title: "Total Users",
      value: `${allUsers?.data?.users?.length || 0}`,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 flex-wrap">
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
