import { useState } from "react";
import { Table } from "../../../components/Reusable/Table";
import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import DepositDataTable from "./DepositDataTable";
import { useGetAllDepositsQuery } from "../../../redux/Features/User/adminApi";

const DOnationAndDeposits = () => {
  const { data: deposits, isLoading } = useGetAllDepositsQuery({});
  console.log(deposits);
  const [selectedDonationDate, setSelectedDonationDate] = useState<Date | null>(
    null
  );
  const [selectedDepositDate, setSelectedDepositDate] = useState<Date | null>(
    null
  );

  const data = [
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-17",
      amount: "$100",
      totalAmount: "$100",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-18",
      amount: "$150",
      totalAmount: "$150",
    },
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-19",
      amount: "$120",
      totalAmount: "$120",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-20",
      amount: "$190",
      totalAmount: "$190",
    },
  ];

  const data2 = [
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-14",
      amount: "$150",
      totalAmount: "$150",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-21",
      amount: "$150",
      totalAmount: "$150",
    },
  ];

  const formattedDonationDate = selectedDonationDate
    ? format(selectedDonationDate, "yyyy-MM-dd")
    : "";

  const filteredDonationData = formattedDonationDate
    ? data.filter((item) => item.date === formattedDonationDate)
    : data;

  const formattedDepositDate = selectedDepositDate
    ? format(selectedDepositDate, "yyyy-MM-dd")
    : "";

  const filteredDepositData = formattedDepositDate
    ? data2.filter((item) => item.date === formattedDepositDate)
    : data2;

  const totalDonations = filteredDonationData.reduce((acc, item) => {
    const amount = parseFloat(item.amount.replace(/[^0-9.-]+/g, ""));
    return acc + amount;
  }, 0);

  const totalDeposits = deposits?.data?.deposits?.reduce((sum, item) => {
    return sum + (item.amount || 0);
  }, 0);

  return (
    <div className="flex flex-col gap-16 font-Outfit">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between">
          <Heading
            iconSrc={ICONS.userManagement}
            title="Donation Reports"
            subtitle="Manage all donation reports"
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

        <div className="">
          <Table
            headers={[
              "#",
              "Wallet Address",
              "Email",
              "Phone",
              "Private Key",
              "Referral ID",
              "Date",
              "Amount",
              "Total Amount",
            ]}
            data={filteredDonationData}
          />
          <div className="bg-primary-70 py-3 px-5 text-green-500 text-end w-fit justify-self-end rounded-lg mt-3">
            Total Amount : ${totalDonations}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between">
          <Heading
            iconSrc={ICONS.userManagement}
            title="Deposit Reports"
            subtitle="Manage all deposit reports"
          />

          <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-5 w-full lg:w-fit">
            <button
              onClick={() => setSelectedDepositDate(null)}
              className="px-8 py-3 bg-primary-70 text-white rounded-full w-full md:w-[210px] cursor-pointer"
            >
              Remove Filter
            </button>
            {/* Date Filter */}
            <DatePicker
              selected={selectedDepositDate}
              onChange={(date) => setSelectedDepositDate(date)}
              placeholderText="Select a date"
              className="px-5 py-3 rounded-full text-white bg-primary-70 focus:outline-none w-full md:w-fit"
              calendarClassName="!bg-white !text-black"
            />
          </div>
        </div>

        <div className="">
          <DepositDataTable
            data={deposits?.data?.deposits}
            isLoading={isLoading}
          />
          <div className="bg-primary-70 py-3 px-5 text-green-500 text-end w-fit justify-self-end rounded-lg mt-3">
            Total Amount : ${totalDeposits}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DOnationAndDeposits;
