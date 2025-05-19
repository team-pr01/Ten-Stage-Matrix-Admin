import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";

const AllControls = () => {
  const allControls = [
    {
      icon: ICONS.user,
      title: "USERS",
      subtitle: "Account Management",
      description: "Configure Commission Rates For Each Stage.",
      path: "/dashboard/user-management",
    },
    {
      icon: ICONS.charges,
      title: "Charges",
      subtitle: "Withdrawal & Transfer",
      description: "Configure Commission Rates For Each Stage.",
      path: "/dashboard/charges-overview",
    },
    {
      icon: ICONS.usdt,
      title: "USDT",
      subtitle: "Wallet Address",
      description: "Manage USDT Receiving Address",
      path: "/wallet-address",
    },
    {
      icon: ICONS.commission,
      title: "Commissions",
      subtitle: "Stage Settings",
      description: "Configure Commission Rates For Each Stage.",
      path: "/stage-settings",
    },
    {
      icon: ICONS.system,
      title: "System",
      subtitle: "System Control",
      description: "Pause Or Resume The Platform",
      path: "/system-control",
    },
    {
      icon: ICONS.limit,
      title: "Limits",
      subtitle: "Max Earning",
      description: "Set Earning Caps Per Stage.",
      path: "/max-earning",
    },
    {
      icon: ICONS.reDonation,
      title: "Re-Donation",
      subtitle: "Rules",
      description: "Update Minimum Re-Donation Per Stage.",
      path: "/re-donation-rules",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-Outfit mt-5">
      {allControls.map((control, idx) => (
        <div
          key={idx}
          className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 px-6 py-8 shadow-lg text-white flex items-center gap-[33px]"
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
            <p className="font-medium text-lg">{control.title}</p>
            <h3 className="text-[34px] font-medium">{control.subtitle}</h3>
            <p className="text-sm text-neutral-135">{control.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllControls;
