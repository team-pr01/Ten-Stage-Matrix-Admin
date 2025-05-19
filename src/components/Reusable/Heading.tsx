import React from "react";

interface HeadingProps {
  iconSrc?: string;
  title: string;
  subtitle?: string;
  className?: string;
  Showbtn?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  iconSrc,
  title,
  subtitle,
  className = ""
}) => {
  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      <div className="flex flex-col justify-between gap-1">
        <div className="flex items-center gap-3">
          {iconSrc && (
            <img
              src={iconSrc}
              alt="heading icon"
              className="w-10 h-10 object-contain"
            />
          )}
            <h1 className="font-Outfit text-2xl leading-[1] text-white font-medium">
              {title}
            </h1>
        </div>
        {subtitle && (
          <p className="font-Outfit text-base leading-[1] text-white font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Heading;
