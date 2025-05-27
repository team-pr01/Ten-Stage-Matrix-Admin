/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../../../components/Loader/Loader";
import {
  useApproveWithdrawMutation,
  useGetAllWithdrawalsQuery,
  useRejectWithdrawMutation,
} from "../../../redux/Features/Withdraw/withdrawApi";
import { formatDate } from "../../../utile/formatDate";

export const WithdrawDataTable = () => {
  const { data, isLoading } = useGetAllWithdrawalsQuery({});
  const [approveWithdraw] = useApproveWithdrawMutation();
  const [rejectWithdraw] = useRejectWithdrawMutation();

  const handleApproveWithdraw = async (id: string) => {
    try {
      const data = {
        admin_note: "Withdrawal approved after verification",
      };
      await approveWithdraw({ data, id });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectWithdraw = async (id: string) => {
    try {
      const data = {
        admin_note: "Withdrawal rejected due to invalid wallet address",
      };
      await rejectWithdraw({ data, id });
    } catch (error) {
      console.log(error);
    }
  };

  const headers = [
    "#",
    "Name",
    "Email",
    "Stage",
    "Wallet Address",
    "Withdrawal Address",
    "Amount",
    "Requested Date",
    "Status",
    "Actions",
  ];
  return (
    <div className="text-white rounded-lg shadow-md font-Outfit">
      <div className="overflow-x-auto">
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
              {data?.data?.withdrawals?.length < 1 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="text-center text-gray-400 py-4"
                  >
                    No data found.
                  </td>
                </tr>
              ) : (
                data?.data?.withdrawals?.map((item: any, index: number) => (
                  <tr className="border-t border-gray-700 hover:bg-[#1F1F3D] transition">
                    <td className="px-4 py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap capitalize">
                      {item?.user_id?.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.user_id?.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.stage_number}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.wallet_address}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.withdrawal_address}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      ${item?.amount}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {formatDate(item.createdAt as string)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize ${
                          item.status === 1
                            ? "bg-green-600 text-white"
                            : item.status === 2
                            ? "bg-yellow-600 text-white"
                            : item.status === 3
                            ? "bg-red-600 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {item.status === 1
                          ? "✓"
                          : item?.status === 3
                          ? "✕"
                          : ""}
                        {
                          {
                            1: "Approved",
                            2: "Pending",
                            3: "Rejected",
                            4: "processing",
                          }[item.status as 1 | 2 | 3 | 4]
                        }
                      </div>
                    </td>

                    <td className="space-x-3">
                      <button onClick={() => handleRejectWithdraw(item?._id)} className="px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-red-500 text-white cursor-pointer">
                        Reject
                      </button>
                      <button onClick={() => handleApproveWithdraw(item?._id)} className="px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-green-500 text-white cursor-pointer">
                        Approve
                      </button>
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
