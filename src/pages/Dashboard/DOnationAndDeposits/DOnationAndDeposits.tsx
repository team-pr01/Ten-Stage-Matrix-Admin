import { useState } from "react";
import { Table } from "../../../components/Reusable/Table";
import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";


const DOnationAndDeposits = () => {
  const [selectedDonationDate, setSelectedDonationDate] = useState<Date | null>(null);
  const [selectedDepositDate, setSelectedDepositDate] = useState<Date | null>(null);;

  const data = [
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-17",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-18",
    },
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-19",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-20",
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
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-21",
    },
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-30",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-01",
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
          <div className="flex flex-col-reverse md:flex-row items-center gap-5 w-full lg:w-fit">
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
              className="w-full px-5 py-3 rounded-full text-white bg-primary-10 focus:outline-none"
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
            ]}
            data={filteredDonationData}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-between">
          <Heading
            iconSrc={ICONS.userManagement}
            title="Deposit Reports"
            subtitle="Manage all deposit reports"
          />

          <div className="flex flex-col-reverse md:flex-row items-center gap-5 w-full lg:w-fit">
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
              className="w-full px-5 py-3 rounded-full text-white bg-primary-10 focus:outline-none"
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
            ]}
            data={filteredDepositData}
          />
        </div>
      </div>
    </div>
  );
};

export default DOnationAndDeposits;
