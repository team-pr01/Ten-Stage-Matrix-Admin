import { useState } from "react";
import { ICONS } from "../../../assets";
import Heading from "../../../components/Reusable/Heading";
import { Table } from "../../../components/Reusable/Table";
import { useGetAllUsersQuery } from "../../../redux/Features/User/userApi";

const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const {
    data: allUsers,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery({
    stage: selectedStage,
    status: selectedStatus,
    search: searchTerm,
  });

  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="font-Outfit">
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-0 items-start lg:items-center justify-between">
        <Heading
          iconSrc={ICONS.userManagement}
          title="User management "
          subtitle="Mange all platform users and referrals"
        />

        <div className="flex flex-col md:flex-row justify-end items-center gap-4 w-full md:w-fit">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-white border border-white rounded-full px-5 py-3 focus:outline-none w-full md:w-fit"
          />

          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="bg-primary-40 text-white border border-white rounded-full px-5 py-3 w-full md:w-fit"
          >
            <option>All Stages</option>
            {stages.map((stage) => (
              <option key={stage} className="">
                {stage}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-primary-40 text-white border border-white rounded-full px-5 py-3 w-full md:w-fit"
          >
            <option>All</option>
            <option value={"active"}>Active</option>
            <option value={"inactive"}>Inactive</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <Table
          headers={[
            "#",
            "Name",
            "Email",
            "Joined date",
            "Total Earning",
            "Total Referrals",
            "Referral Code",
            "Stage",
            "Status",
          ]}
          data={allUsers?.data?.users}
          isLoading={isLoading || isFetching}
        />
      </div>
    </div>
  );
};

export default DashboardHome;
