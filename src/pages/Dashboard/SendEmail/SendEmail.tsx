import { useState } from "react";
import { ICONS } from "../../../assets";
import Heading from "../../../components/Reusable/Heading";
import SendEmailToOne from "./SendEmailToOne";
import SendBulkEmail from "./SendBulkEmail";
import SendEmailToAll from "./SendEmailToAll";

const SendEmail = () => {
  const methods = [
    "Send to One User",
    "Send to Multiple Users",
    "Send to All Users",
  ];
  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <div>
      <Heading
        iconSrc={ICONS.email}
        title="Send Email"
        subtitle="First select the method to send email"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 font-Outfit mt-10">
        {methods?.map((method, index) => (
          <button
            key={index}
            onClick={() => setSelectedMethod(method)}
            className="rounded-[15px] border-[3px] border-white/20 bg-neutral-30 text-white px-6 py-5 w-full max-w-sm cursor-pointer"
          >
            <h2 className="text-xl">{method}</h2>
          </button>
        ))}
      </div>

      {selectedMethod === "Send to One User" && <SendEmailToOne />}
      {selectedMethod === "Send to Multiple Users" && <SendBulkEmail />}
      {selectedMethod === "Send to All Users" && <SendEmailToAll />}
    </div>
  );
};

export default SendEmail;
