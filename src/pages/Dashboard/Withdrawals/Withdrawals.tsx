/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import { WithdrawDataTable } from "./WithdrawDataTable";
import { useGetAllWithdrawalsQuery } from "../../../redux/Features/Withdraw/withdrawApi";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const Withdrawals = () => {
  const { data, isLoading } = useGetAllWithdrawalsQuery({});

  const [selectedDonationDate, setSelectedDonationDate] = useState<Date | null>(
    null
  );

  const formattedWithdrawDate = selectedDonationDate
    ? format(selectedDonationDate, "yyyy-MM-dd")
    : "";

  const filteredWithdrawData = formattedWithdrawDate
    ? data?.data?.withdrawals?.filter((item: any) => {
        const itemDate = format(new Date(item.createdAt), "yyyy-MM-dd");
        return itemDate === formattedWithdrawDate;
      })
    : data?.data?.withdrawals;

  // Calculate total donations
  const totalWithdrawals = filteredWithdrawData?.reduce(
    (sum: number, item: any) => {
      return sum + (item.amount || 0);
    },
    0
  );
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
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between">
          <Heading
            iconSrc={ICONS.withdrawals}
            title="Withdrawals History Log "
            subtitle="Review your withdrawals history log"
          />

          {/* Date Filter */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-5 w-full lg:w-fit">
            <button
              onClick={() => setSelectedDonationDate(null)}
              className="px-8 py-3 bg-primary-70 text-white rounded-full w-full md:w-[210px] cursor-pointer"
            >
              Remove Filter
            </button>
            <DatePicker
              selected={selectedDonationDate}
              onChange={(date) => setSelectedDonationDate(date)}
              placeholderText="Select a date"
              className="px-5 py-3 rounded-full text-white bg-primary-70 focus:outline-none w-full md:w-fit"
              calendarClassName="!bg-white !text-black"
            />
          </div>
        </div>

        <div className="mt-8">
          <WithdrawDataTable data={filteredWithdrawData} isLoading={isLoading} totalWithdrawals={totalWithdrawals} />
        </div>
      </div>
    </div>
  );
};

export default Withdrawals;
