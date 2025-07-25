/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "../../../components/Loader/Loader";
import {
  useGetAllUsersQuery,
  useSendEmailToOneMutation,
} from "../../../redux/Features/User/adminApi";
import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";

type TFormValues = {
  user_id: string;
  subject: string;
  content: string;
};
const SendEmailToOne = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");
  useEffect(() => {
    setContentError("");
    if (content?.length === 0) {
      setContentError("");
    } else if (content?.length < 1) {
      setContentError("Content is required");
    } else {
      setContentError("");
    }
  }, [content]);


  const handleSelect = (userId: string) => {
    setSelectedUserId(userId);
  };

  const [sendEmailToOne, { isLoading }] = useSendEmailToOneMutation();
  const handleSendEmailToOne = async (data: TFormValues) => {
    try {
      const payload = {
        user_id: selectedUserId,
        subject: data.subject,
        content: content,
      };
      const response = await sendEmailToOne(payload).unwrap();
      if (response?.data) {
        toast.success("Email sent successfully");
        reset();
        setContent("");
        setSelectedUserId(null);
      }
    } catch (error) {
      const errorMessage =
        (typeof error === "object" &&
          error !== null &&
          "data" in error &&
          (error as any).data?.message) ||
        "Failed to send email";
      toast.error(errorMessage);
    }
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
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 mt-[42px] font-Outfit">
      {/* Form */}
      <div className="w-full lg:w-[40%] flex flex-col gap-[18px] border-white/20 bg-neutral-30 p-6 rounded-xl">
        <h1 className="text-white font-medium text-[26px]">
          Send Email to One User
        </h1>
        <form
          onSubmit={handleSubmit(handleSendEmailToOne)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              User Id
            </label>
            <input
              type="text"
              placeholder="Enter user id"
              value={selectedUserId || ""}
              {...register("user_id")}
              className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.user_id ? "border-red-500" : "border-neutral-90"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              {...register("subject")}
              className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                errors?.subject ? "border-red-500" : "border-neutral-90"
              }`}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-neutral-85">
              Content
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />

            {contentError && (
              <span className="text-warning-10 text-start">{contentError}</span>
            )}
          </div>

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
        <div className="flex flex-col 2xl:flex-row gap-5 2xl:gap-0 items-start 2xl:items-center justify-between">
          <h1 className="text-white font-medium text-[26px] text-start">
            Select User
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-3 w-full xl:w-fit">
            <input
              type="text"
              placeholder="Search by user id"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-white border border-white rounded-full px-5 py-3 focus:outline-none w-full xl:w-fit"
            />
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="bg-primary-40 text-white border border-white focus:outline-none rounded-full px-5 py-3 w-full xl:w-fit"
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
              className="bg-primary-40 text-white border border-white focus:outline-none rounded-full px-5 py-3 w-full md:w-fit"
            >
              <option>All</option>
              <option value={"active"}>Active</option>
              <option value={"inactive"}>Inactive</option>
            </select>
          </div>
        </div>
        <div className="overflow-auto max-h-[500px] custom-scrollbar mt-5">
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
                  filteredUsers?.map((item: any, index: number) => (
                    <tr
                      key={item._id}
                      onClick={() => handleSelect(item._id)}
                      className="border-t border-gray-700 hover:bg-[#1F1F3D] transition cursor-pointer"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedUserId === item._id}
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
                        <p>{item?.email}</p>
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
                  ))
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SendEmailToOne;
