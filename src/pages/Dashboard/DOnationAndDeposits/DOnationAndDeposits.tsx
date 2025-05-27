/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Heading from "../../../components/Reusable/Heading";
import { ICONS } from "../../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import DepositDataTable from "./DepositDataTable";
import {
  useGetAllDepositsQuery,
  useGetAllDonationsQuery,
} from "../../../redux/Features/User/adminApi";
import DonationDataTable from "./DonationdataTable";

const DOnationAndDeposits = () => {
  const {
    data: deposits,
    isLoading,
    isFetching: isDepositsFetching,
  } = useGetAllDepositsQuery({});
  const {
    data: donations,
    isLoading: isDonationLoading,
    isFetching: isDonationFetching,
  } = useGetAllDonationsQuery({});
  console.log(donations);
  const [selectedDonationDate, setSelectedDonationDate] = useState<Date | null>(
    null
  );
  const [selectedDepositDate, setSelectedDepositDate] = useState<Date | null>(
    null
  );

  const formattedDonationDate = selectedDonationDate
    ? format(selectedDonationDate, "yyyy-MM-dd")
    : "";

  const filteredDonationData = formattedDonationDate
    ? donations?.data?.donations?.filter((item: any) => {
        const itemDate = format(new Date(item.createdAt), "yyyy-MM-dd");
        return itemDate === formattedDonationDate;
      })
    : donations?.data?.donations;

  // Calculate total donations
  const totalDonations = filteredDonationData?.reduce(
    (sum: number, item: any) => {
      return sum + (item.amount || 0);
    },
    0
  );

  const formattedDepositDate = selectedDepositDate
    ? format(selectedDepositDate, "yyyy-MM-dd")
    : "";

  const filteredDepositData = formattedDepositDate
    ? deposits?.data?.deposits?.filter((item: any) => {
        const itemDate = format(new Date(item.createdAt), "yyyy-MM-dd");
        return itemDate === formattedDepositDate;
      })
    : deposits?.data?.deposits;

  // Calculate total deposits
  const totalDeposits = filteredDepositData?.reduce(
    (sum: number, item: any) => {
      return sum + (item.amount || 0);
    },
    0
  );

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
          <DonationDataTable
            data={donations?.data?.donations}
            isLoading={isDonationLoading || isDonationFetching}
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
            data={filteredDepositData}
            isLoading={isLoading || isDepositsFetching}
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
