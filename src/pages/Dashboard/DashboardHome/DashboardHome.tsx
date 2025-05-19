import { useState } from "react";
import { ICONS } from "../../../assets";
import Heading from "../../../components/Reusable/Heading";
import { Table } from "../../../components/Reusable/Table";

const DashboardHome = () => {
  const data = [
    {
      id: 1,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+8801607-30419",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      stage: "Stage 3",
      status: "Active",
    },
    {
      id: 2,
      wallet: "0xA1B2C3...90BE",
      email: "example@gmail.com",
      phone: "+88019000000",
      privateKey: "08qw45243...",
      referral: "REF123hjd1234",
      stage: "Stage 3",
      status: "Active",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredData = data.filter((row) => {
    const stageMatch =
      selectedStage === "All Stages" || row.stage === selectedStage;
    const statusMatch =
      selectedStatus === "All" || row.status === selectedStatus;
    const searchMatch = Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    );
    return stageMatch && statusMatch && searchMatch;
  });

  const uniqueStages = Array.from(new Set(data.map((row) => row.stage)));

  return (
    <div className="font-Outfit">
      <div className="flex items-center justify-between">
        <Heading
        iconSrc={ICONS.userManagement}
        title="User management "
        subtitle="Mange all platform users and referrals"
      />

      <div className="flex justify-end items-center gap-4">
        <input
          type="text"
          placeholder="Search wallet or referral ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-white border border-white rounded-full px-5 py-3 focus:outline-none"
        />

        <select
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
          className="bg-primary-40 text-white border border-white rounded-full px-5 py-3"
        >
          <option>All Stages</option>
          {uniqueStages.map((stage) => (
            <option key={stage} className="">{stage}</option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="bg-primary-40 text-white border border-white rounded-full px-5 py-3"
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      </div>

      <div className="mt-8">
        <Table
          headers={[
            "#",
            "Wallet Address",
            "Email",
            "Phone",
            "Private Key",
            "Referral ID",
            "Stage",
            "Status",
            "Action",
          ]}
          data={filteredData}
          onActionClick={(row) => console.log(row)}
        />
      </div>
    </div>
  );
};

export default DashboardHome;
