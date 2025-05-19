import { ICONS } from "../../../assets";
import Stages from "../../../components/Dashboard/StagesManagementPage/Stages/Stages";
import Heading from "../../../components/Reusable/Heading";

const StateManagement = () => {
  const data = [
    {
      icon: ICONS.totalDonation,
      title: "Total donation",
      value: "$50,869",
    },
    {
      icon: ICONS.totalPayment,
      title: "Total Payments",
      value: "$50,869",
    },
    {
      icon: ICONS.totalUser,
      title: "Total Users",
      value: "182",
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
        <div className="flex items-center gap-12 flex-wrap">
          {data?.map((item) => (
            <div
              key={item.title}
              className={`rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col items-center justify-center px-[100px] py-[30px]`}
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
