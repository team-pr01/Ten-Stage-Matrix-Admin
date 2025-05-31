import { useChangeUserStatusMutation } from "../../redux/Features/User/adminApi";
import { formatDate } from "../../utile/formatDate";
import Loader from "../Loader/Loader";

type TableRow = { [key: string]: string | number };

interface TableProps {
  headers: string[];
  data: TableRow[];
  isLoading?: boolean;
  onApprove?: (row: TableRow) => void;
  onReject?: (row: TableRow) => void;
}

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  isLoading,
}) => {
  const [changeUserStatus] = useChangeUserStatusMutation();
  const handleChangeUserStatus = async (status:string, id:string) => {
    try{
      const payload = {
        user_id : id,
        status,
      }
      const response = await changeUserStatus(payload).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
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
                data?.map((item, index) => (
                  <tr className="border-t border-gray-700 hover:bg-[#1F1F3D] transition">
                    <td className="px-4 py-3 whitespace-nowrap">{index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap capitalize">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {formatDate(item.createdAt as string)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      ${item.total_earn}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.total_referrals}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap capitalize">
                      {item.status}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.referral_code}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.stage}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize ${
                          item.user_account_status === "active"
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                        }`}
                      >
                        {item.user_account_status === "active" ? "✓" : "✕"} {item.user_account_status}
                      </div>
                    </td>
                    {
                      item?.user_account_status === "suspended" ?
                      <td onClick={() => handleChangeUserStatus("active", item?._id as string)} className="px-4 py-3 whitespace-nowrap cursor-pointer">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-yellow-600 text-white`}
                      >
                         Withdraw Suspension
                      </div>
                    </td>
                    :
                    item?.user_account_status === "active"
                    ?
                    <td onClick={() => handleChangeUserStatus("suspended", item?._id as string)} className="px-4 py-3 whitespace-nowrap cursor-pointer">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-yellow-600 text-white`}
                      >
                         Suspend User
                      </div>
                    </td>
                    :
                    item?.user_account_status === "inactive" &&
                    <td onClick={() => handleChangeUserStatus("active", item?._id as string)} className="px-4 py-3 whitespace-nowrap cursor-pointer">
                      <div
                        className={`px-3 py-1 text-sm rounded-full font-medium text-center w-fit text-nowrap capitalize bg-green-600 text-white`}
                      >
                         Active User
                      </div>
                    </td>

                    }
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
