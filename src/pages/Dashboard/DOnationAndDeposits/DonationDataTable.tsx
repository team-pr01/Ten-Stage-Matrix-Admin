/* eslint-disable @typescript-eslint/no-explicit-any */

import Loader from "../../../components/Loader/Loader";
import { formatDate } from "../../../utile/formatDate";

const DonationDataTable = ({data, isLoading} : {data: any, isLoading: boolean}) => {
  console.log(data);
    const headers = [
    "#",
    "Name",
    "Email",
    "Stage",
    "Wallet Address",
    "Amount",
    "Deposit Date",
    "Status",
  ];
    return (
        <div className="text-white rounded-lg shadow-md font-Outfit">
      <div className="overflow-auto max-h-[700px] custom-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-neutral-30 text-sm">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              <tr>
                <td colSpan={headers.length} className="py-10">
                  <div className="flex justify-center items-center">
                    <Loader size="size-10" />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data?.length < 1 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center text-gray-400 py-4"
                  >
                    No data found.
                  </td>
                </tr>
              ) : (
                data?.map((item: any, index: number) => (
                  <tr className="border-t border-gray-700 hover:bg-[#1F1F3D] transition">
                    <td className="px-4 py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap capitalize">
                      {item?.user_name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.user_email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.stage_number}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.user_id?.user_wallet}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      ${item?.amount}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {formatDate(item.created_at as string)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize ${
                          item.status === "completed"
                            ? "bg-green-600 text-white"
                            :  "bg-red-600 text-white"
                        }`}
                      >
                        {item.status === "completed"
                          ? "✓" : "✕"
                        }
                        {
                          item?.status
                        }
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
    );
};

export default DonationDataTable;