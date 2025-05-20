import { useState } from "react";
import { Table } from "../../../components/Reusable/Table";
import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";

const DOnationAndDeposits = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const data = [
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      date: "2025-05-20",
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

  const filteredData = selectedDate
    ? data.filter((item) => item.date === selectedDate)
    : data;

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
        <Heading
          iconSrc={ICONS.userManagement}
          title="Donation Reports"
          subtitle="Manage all donation reports"
        />

        {/* Date Filter */}
        <div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-white rounded-full px-5 py-3 focus:outline-none w-full md:w-fit bg-primary-10"
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
          data={filteredData}
        />
      </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
        <Heading
          iconSrc={ICONS.userManagement}
          title="Deposit Reports"
          subtitle="Manage all deposit reports"
        />

        {/* Date Filter */}
        <div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-white rounded-full px-5 py-3 focus:outline-none w-full md:w-fit bg-primary-10"
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
          data={filteredData}
        />
      </div>
      </div>
    </div>
  );
};

export default DOnationAndDeposits;
