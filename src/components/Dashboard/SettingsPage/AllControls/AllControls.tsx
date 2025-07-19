import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";

const AllControls = () => {
  const allControls = [
    // {
    //   icon: ICONS.user,
    //   title: "USERS",
    //   subtitle: "Account Management",
    //   description: "Configure Commission Rates For Each Stage.",
    //   path: "/dashboard/user-management",
    // },
    // {
    //   icon: ICONS.charges,
    //   title: "Charges",
    //   subtitle: "Withdrawal & Transfer",
    //   description: "Configure Commission Rates For Each Stage.",
    //   path: "/dashboard/charges-overview",
    // },
    {
      icon: ICONS.usdt,
      title: "USDT",
      subtitle: "Wallet Address",
      description: "Manage USDT Receiving Address",
      path: "/dashboard/manage-wallet-address",
    },
    {
      icon: ICONS.commission,
      title: "Commissions",
      subtitle: "Stage Settings",
      description: "Configure Commission Rates For Each Stage.",
      path: "/dashboard/stage-settings",
    },
    {
      icon: ICONS.reDonation,
      title: "Charges",
      subtitle: "Manage Charges",
      description: "Manage all charges",
      path: "/dashboard/manage-charges",
    },
    {
      icon: ICONS.limit,
      title: "Limits",
      subtitle: "Max/Min Limitations",
      description: "Set max/min limitations",
      path: "/dashboard/limitations",
    },
    // {
    //   icon: ICONS.reDonation,
    //   title: "Re-Donation",
    //   subtitle: "Rules",
    //   description: "Update Minimum Re-Donation Per Stage.",
    //   path: "/dashboard/re-donation-rules",
    // },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 font-Outfit mt-5">
      {allControls.map((control, idx) => (
        <div
          key={idx}
          className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-6 py-8 shadow-lg text-white flex flex-col lg:flex-row items-start lg:items-center gap-[33px]"
        >
          {/* Icon and Button */}
          <div className="flex flex-col gap-[25px] items-center">
            <img
              src={control.icon}
              alt={control.subtitle}
              className="size-[86px]"
            />
            <Link
              to={control.path}
              className="bg-primary-10 text-white px-7 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300"
            >
              Edit
            </Link>
          </div>

          {/* Text Content */}
          <div>
            <p className="font-medium text-base md:text-lg">{control.title}</p>
            <h3 className="text-2xl md:text-[34px] font-medium">{control.subtitle}</h3>
            <p className="text-sm text-neutral-135 mt-2 md:mt-0">{control.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllControls;
