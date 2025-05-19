import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import { Table } from "../../../components/Reusable/Table";

const Withdrawals = () => {
  const data = [
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      action: "",
    },
  ];

  const withdrawHistory = [
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      status: "Approved",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      status: "Rejected",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      status: "Approved",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      status: "Rejected",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      status: "Approved",
    },
    {
      userWallet: "0xA1B2C3****90BE",
      amount: "$400",
      requestedDate: "2025/05/15",
      time: "10:30 PM",
      status: "Rejected",
    },
  ];

  const handleApprove = () => {
    console.log("object");
  };

  const handleReject = () => {
    console.log("object");
  };

  return (
    <div className="font-Outfit flex flex-col gap-20">
      <div>
        <Heading
        iconSrc={ICONS.withdrawals}
        title="Withdrawals"
        subtitle="Review and approve/reject withdrawal requests"
      />

      <div className="mt-8">
        <Table
          headers={[
            "User Wallet ",
            "Amount",
            "Requested  Date",
            "Time",
            "Action",
          ]}
          data={data}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
      </div>

      <div>
        <Heading
        iconSrc={ICONS.withdrawals}
        title="Withdrawals History Log "
        subtitle="Review your withdrawals history log"
      />

      <div className="mt-8">
        <Table
          headers={[
            "User Wallet ",
            "Amount",
            "Requested  Date",
            "Time",
            "Status",
          ]}
          data={withdrawHistory}
        />
      </div>
      </div>
    </div>
  );
};

export default Withdrawals;
