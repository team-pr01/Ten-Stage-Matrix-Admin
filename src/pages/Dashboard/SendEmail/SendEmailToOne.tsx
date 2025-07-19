import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "../../../components/Loader/Loader";
import { useSendEmailToOneMutation } from "../../../redux/Features/User/adminApi";

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

  const [sendEmailToOne, { isLoading }] = useSendEmailToOneMutation();
  const handleSendEmailToOne = async (data: TFormValues) => {
    try {
      const payload = {
        user_id: data.user_id,
        subject: data.subject,
        content: data.content,
      };
      const response = await sendEmailToOne(payload).unwrap();
      if (response?.data) {
        toast.success("Email sent successfully");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[42px] flex flex-col gap-[18px] max-w-[600px] mx-auto border-white/20 bg-neutral-30 p-6 rounded-xl">
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

export default SendEmailToOne;
