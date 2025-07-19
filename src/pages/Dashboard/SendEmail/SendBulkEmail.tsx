import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "../../../components/Loader/Loader";
import { useSendBulkEmailMutation } from "../../../redux/Features/User/adminApi";
import { RxCross1 } from "react-icons/rx";

type TFormValues = {
  subject: string;
  content: string;
};

const SendBulkEmail = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();

  const [userIds, setUserIds] = useState<string[]>([]);
  const [tempUserId, setTempUserId] = useState<string>("");

  const [sendBulkEmail, { isLoading }] = useSendBulkEmailMutation();

  const handleSendBulkEmail = async (data: TFormValues) => {
    try {
      if (userIds.length === 0) {
        toast.error("Please add at least one user ID.");
        return;
      }

      const payload = {
        user_ids: userIds,
        subject: data.subject,
        content: data.content,
      };

      const response = await sendBulkEmail(payload).unwrap();
      if (response?.data) {
        toast.success("Email sent successfully");
        reset();
        setUserIds([]); // clear after success
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserIdKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tempUserId.trim()) {
      e.preventDefault();
      if (!userIds.includes(tempUserId.trim())) {
        setUserIds([...userIds, tempUserId.trim()]);
      }
      setTempUserId("");
    }
  };

  const removeUserId = (id: string) => {
    setUserIds(userIds.filter((uid) => uid !== id));
  };

  return (
    <div className="mt-[42px] flex flex-col gap-[18px] max-w-[600px] mx-auto border-white/20 bg-neutral-30 p-6 rounded-xl">
      <h1 className="text-white font-medium text-[26px]">
        Send Email to Multiple Users
      </h1>

      <form
        onSubmit={handleSubmit(handleSendBulkEmail)}
        className="flex flex-col gap-5"
      >
        {/* User ID Input */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="text-neutral-85">
            User ID (press Enter to add)
          </label>
          <input
            type="text"
            placeholder="Enter user id and press Enter"
            value={tempUserId}
            onChange={(e) => setTempUserId(e.target.value)}
            onKeyDown={handleUserIdKeyPress}
            className="w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85"
          />

          {/* Show added user IDs as badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {userIds.map((id, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 px-3 py-1 bg-primary-10/20 text-white rounded-full text-sm"
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
          <label htmlFor="" className="text-neutral-85">
            Subject
          </label>
          <input
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
          <label htmlFor="" className="text-neutral-85">
            Content
          </label>
          <textarea
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
  );
};

export default SendBulkEmail;
