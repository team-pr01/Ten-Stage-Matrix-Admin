import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "../../../components/Loader/Loader";
import { useSendEmailToAllMutation } from "../../../redux/Features/User/adminApi";

type TFormValues = {
  subject: string;
  content: string;
};
const SendEmailToAll = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>();

  const [sendEmailToAll, { isLoading }] = useSendEmailToAllMutation();
  const handleSendEmailToAll = async (data: TFormValues) => {
    try {
      const payload = {
        subject: data.subject,
        content: data.content,
      };
      const response = await sendEmailToAll(payload).unwrap();
      if (response?.data) {
        toast.success("Email sent successfully");
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email.");
    }
  };
  return (
    <div className="mt-[42px] flex flex-col gap-[18px] max-w-[600px] mx-auto border-white/20 bg-neutral-30 p-6 rounded-xl">
      <h1 className="text-white font-medium text-[26px]">
        Send Email to One User
      </h1>
      <form
        onSubmit={handleSubmit(handleSendEmailToAll)}
        className="flex flex-col gap-5"
      >
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
          <textarea
            rows={10}
            placeholder="Enter content"
            {...register("content")}
            className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
              errors?.content ? "border-red-500" : "border-neutral-90"
            }`}
          />
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
  );
};

export default SendEmailToAll;
