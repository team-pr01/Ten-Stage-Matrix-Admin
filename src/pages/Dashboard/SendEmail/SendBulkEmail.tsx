/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "../../../components/Loader/Loader";
import {
  useGetAllUsersQuery,
  useSendBulkEmailMutation,
} from "../../../redux/Features/User/adminApi";
import { RxCross1 } from "react-icons/rx";

type TFormValues = {
  subject: string;
  content: string;
};

const SendBulkEmail = () => {
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [tempUserId, setTempUserId] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();

  const [sendBulkEmail, { isLoading }] = useSendBulkEmailMutation();

  const handleSendBulkEmail = async (data: TFormValues) => {
    try {
      if (selectedUserIds.length === 0) {
        toast.error("Please add at least one user ID.");
        return;
      }

      const payload = {
        user_ids: selectedUserIds,
        subject: data.subject,
        content: data.content,
      };

      const response = await sendBulkEmail(payload).unwrap();
      if (response?.data) {
        toast.success("Email sent successfully");
        reset();
        setSelectedUserIds([]);
        setTempUserId("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email.");
    }
  };

  const handleUserIdKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = tempUserId.trim();
      if (trimmed && !selectedUserIds.includes(trimmed)) {
        setSelectedUserIds((prev) => [...prev, trimmed]);
      }
      setTempUserId("");
    }
  };

  const removeUserId = (id: string) => {
    setSelectedUserIds((prev) => prev.filter((uid) => uid !== id));
  };

  const handleSelect = (id: string) => {
    setSelectedUserIds((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const {
    data: allUsers,
    isLoading: isLoadingUsers,
    isFetching,
  } = useGetAllUsersQuery({ stage: selectedStage, status: selectedStatus });

  const headers = ["#", "User Id", "Name & Email", "Private Key"];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = allUsers?.data?.filter((user: any) =>
    user._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="mt-[42px] flex flex-col lg:flex-row gap-10 lg:gap-5 font-Outfit">
      {/* Form */}
      <div className="w-full lg:w-[40%] flex flex-col gap-[18px] max-w-[600px] mx-auto border-white/20 bg-neutral-30 p-6 rounded-xl">
        <h1 className="text-white font-medium text-[26px]">
          Send Email to Multiple Users
        </h1>

        <form
          onSubmit={handleSubmit(handleSendBulkEmail)}
          className="flex flex-col gap-5"
        >
          {/* User ID Input */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="userId" className="text-neutral-85">
              User ID (press Enter to add)
            </label>
            <input
              id="userId"
              type="text"
              placeholder="Enter user id and press Enter"
              value={tempUserId}
              onChange={(e) => setTempUserId(e.target.value)}
              onKeyDown={handleUserIdKeyDown}
              className="w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
            />

            {/* Show added user IDs as badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedUserIds.map((id, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-2 py-1 bg-primary-10/50 text-white rounded-full text-xs"
                >
                  {id}
                  <RxCross1
                    className="cursor-pointer text-white hover:text-red-400"
                    onClick={() => removeUserId(id)}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="subject" className="text-neutral-85">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              {...register("subject", { required: true })}
              className={`w-full p-4 rounded-[8px] border ${
                errors?.subject ? "border-red-500" : "border-neutral-90"
              } focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="content" className="text-neutral-85">
              Content
            </label>
            <textarea
              id="content"
              rows={10}
              placeholder="Enter content"
              {...register("content", { required: true })}
              className={`w-full p-4 rounded-[8px] border ${
                errors?.content ? "border-red-500" : "border-neutral-90"
              } focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85`}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-10 text-white px-10 py-2 rounded-full text-sm hover:bg-primary-10/60 transition duration-300 w-fit cursor-pointer"
            >
              {isLoading ? <Loader size="size-6" /> : "Send"}
            </button>
          </div>
        </form>
      </div>

      {/* User table */}
      <div className="text-white rounded-lg shadow-md w-full lg:w-[60%] border-white/20 bg-neutral-30 p-5">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-medium text-[26px]">Select Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 items-center w-full">
            <button
              onClick={() => setSelectedUserIds([])}
              className="px-4 py-4 bg-neutral-30 text-white rounded-full w-full cursor-pointer"
            >
              Deselect All
            </button>
            <input
              type="text"
              placeholder="Search by user id"
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
              {stages.map((stage) => (
                <option key={stage} className="">
                  {stage}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-primary-40 text-white border border-white rounded-full px-5 py-3"
            >
              <option>All</option>
              <option value={"active"}>Active</option>
              <option value={"inactive"}>Inactive</option>
            </select>
          </div>
        </div>
        <div className="overflow-auto max-h-[600px] custom-scrollbar mt-5">
          <table className="w-full text-left 0 rounded-tl-xl  rounded-tr-xl">
            <thead>
              <tr className="bg-neutral-30 text-sm">
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal rounded-tl-xl">
                  Select
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal">
                  #
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal">
                  User Id
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal">
                  Name & Email
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal">
                  Private Key
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal">
                  Stage
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-lg text-white font-normal rounded-tr-xl">
                  Status
                </th>
              </tr>
            </thead>
            {isLoadingUsers || isFetching ? (
              <tbody>
                <tr>
                  <td colSpan={headers.length + 1} className="py-10">
                    <div className="flex justify-center items-center">
                      <Loader size="size-10" />
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {filteredUsers?.length < 1 ? (
                  <tr>
                    <td
                      colSpan={headers.length + 1}
                      className="text-center text-gray-400 py-4"
                    >
                      No data found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers?.map((item: any, index: number) => {
                    const isSelected = selectedUserIds.includes(item._id);
                    return (
                      <tr
                        key={item._id}
                        onClick={() => handleSelect(item._id)}
                        className={`border-t border-gray-700 transition cursor-pointer ${
                          isSelected ? "bg-[#1F1F3D]" : "hover:bg-[#1F1F3D]"
                        }`}
                      >
                        <td
                          className="px-4 py-3 whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleSelect(item._id)}
                          />
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap capitalize">
                          {item?._id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap capitalize">
                          {item?.name}
                          <p className="text-sm text-gray-400">{item?.email}</p>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {item?.user_pk}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {item?.stage}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap capitalize">
                          {item?.status}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SendBulkEmail;
