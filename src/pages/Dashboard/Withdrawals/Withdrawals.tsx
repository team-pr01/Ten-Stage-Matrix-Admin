import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import { WithdrawDataTable } from "./WithdrawDataTable";

const Withdrawals = () => {

  return (
    <div className="font-Outfit flex flex-col gap-20">
      {/* <div>
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
      </div> */}

      <div>
        <Heading
        iconSrc={ICONS.withdrawals}
        title="Withdrawals History Log "
        subtitle="Review your withdrawals history log"
      />

      <div className="mt-8">
        <WithdrawDataTable/>
      </div>
      </div>
    </div>
  );
};

export default Withdrawals;
