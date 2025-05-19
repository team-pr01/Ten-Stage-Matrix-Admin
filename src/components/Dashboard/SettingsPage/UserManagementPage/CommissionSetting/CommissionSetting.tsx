import { useState } from "react";
import { ICONS } from "../../../../../assets";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const CommissionSetting = () => {
  const recentTransactions = [
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      email: "jonyahahoo@gmail.com",
      status: "Active",
      privateKey: "123@#78953",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      email: "jonyahahoo@gmail.com",
      status: "Active",
      privateKey: "123@#78953",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      email: "jonyahahoo@gmail.com",
      status: "Active",
      privateKey: "123@#78953",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      email: "jonyahahoo@gmail.com",
      status: "Active",
      privateKey: "123@#78953",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      email: "jonyahahoo@gmail.com",
      status: "Active",
      privateKey: "123@#78953",
    },
    {
      avatar: ICONS.avatar,
      name: "Tohidul Islam Rony",
      email: "jonyahahoo@gmail.com",
      status: "Active",
      privateKey: "123@#78953",
    },
  ];

  const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);
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

                {/* Type */}
                <td className="py-3 whitespace-nowrap">{transaction?.email}</td>

                {/* Amount */}
                <td className="py-3 whitespace-nowrap">
                  {transaction?.status}
                </td>
                <td className="py-3 whitespace-nowrap">
                  {isPrivateKeyVisible
                    ? transaction?.privateKey
                    : "Private Key"}
                </td>

                {/* Info Icon */}
                <td className="py-3 flex items-center gap-3 whitespace-nowrap">
                  {isPrivateKeyVisible ? (
                    <HiOutlineEyeOff
                      onClick={() =>
                        setIsPrivateKeyVisible(!isPrivateKeyVisible)
                      }
                      className="text-neutral-90 size-5 cursor-pointer"
                    />
                  ) : (
                    <HiOutlineEye
                      onClick={() =>
                        setIsPrivateKeyVisible(!isPrivateKeyVisible)
                      }
                      className="text-neutral-90 size-5 cursor-pointer"
                    />
                  )}
                  <div
                    onClick={() => setIsOn(!isOn)}
                    className={`w-10 h-5 rounded-full cursor-pointer transition-colors duration-300 px-1 flex items-center ${
                      isOn
                        ? "bg-primary-10 justify-end"
                        : "bg-gray-300 justify-start"
                    }`}
                  >
                    <div className="size-4 rounded-full bg-[#2E2552] transition-transform duration-300"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionSetting;
