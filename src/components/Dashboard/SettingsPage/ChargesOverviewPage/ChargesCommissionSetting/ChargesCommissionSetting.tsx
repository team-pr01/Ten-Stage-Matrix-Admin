import { ICONS } from "../../../../../assets";

const ChargesCommissionSetting = () => {
  const recentTransactions = [
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      charge: "Charge #1026",
      status: "Active",
      amount: "$120",
      date: "01.01.2001",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      charge: "Charge #1026",
      status: "Active",
      amount: "$120",
      date: "01.01.2001",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      charge: "Charge #1026",
      status: "Active",
      amount: "$120",
      date: "01.01.2001",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      charge: "Charge #1026",
      status: "Active",
      amount: "$120",
      date: "01.01.2001",
    },
  ];
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] mt-11">
      <h1 className="text-2xl font-medium text-white">Commission Settings</h1>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-[600px] w-full text-white">
          <tbody>
            {recentTransactions.map((transaction, index) => (
              <tr key={index} className="border-b border-neutral-110">
                {/* Type + Icon */}
                <td className="flex items-center gap-2 py-3 whitespace-nowrap">
                  <img
                    src={transaction?.avatar}
                    alt=""
                    className="size-6 rounded-full"
                  />
                  <span>{transaction?.name}</span>
                </td>

                <td className="py-3 whitespace-nowrap">{transaction?.charge}</td>

                <td className="py-3 whitespace-nowrap">
                  {transaction?.status}
                </td>

                <td className="py-3 whitespace-nowrap">
                  {transaction?.amount}
                </td>

                <td className="py-3 whitespace-nowrap">{transaction?.date}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesCommissionSetting;
