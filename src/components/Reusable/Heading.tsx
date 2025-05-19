import React from "react";
import Button from "./Button";

const Heading = ({ iconSrc, title, subtitle, className = "" ,Showbtn}) => {
  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      <div className="flex flex-col justify-between gap-1">
        <div className="flex items-start gap-3">
          {iconSrc && (
            <img
              src={iconSrc}
              alt="heading icon"
              className="w-10 h-10 object-contain"
            />
          )}
          <div>
            <p className="font-Outfit text-2xl leading-[1] text-white font-medium">
              {title}
            </p>
          </div>
        </div>
        {subtitle && (
          <p className="font-Outfit text-base leading-[1] text-white font-normal ">
            {subtitle}
          </p>
        )}
      </div>

{Showbtn &&
    (<div className="flex flex-row justify-between gap-4 ">
        <Button
          label="All Stages"
          type="submit"
          onClick={() => console.log("Submit clicked")}
          //   icon={<FaPlus />}
          iconPosition="right"
        />

        <Button
          label="Stats:All"
          type="submit"
          onClick={() => console.log("Submit clicked")}
          //   icon={<FaPlus />}
          iconPosition="right"
          className="bg-green-600 hover:bg-green-700"
        />
      </div>)
}
      
    </div>
  );
};

export default Heading;
