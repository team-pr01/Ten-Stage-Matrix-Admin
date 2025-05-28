import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import { SiTicktick } from "react-icons/si";
import { GoCopy } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";

const SignupSuccess = () => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = (text: string) => {
    setIsCopy(true);
    window.navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };

  return (
    <div className="font-Outfit relative h-screen">
      <div className="bg-primary-30 w-[300px] lg:w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 left-0"></div>
      <div className="bg-primary-15 w-[300px] lg:w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute -top-32 right-0"></div>
      <div className="max-w-full lg:max-w-[500px] mx-auto px-5 2xl:px-0 flex items-center justify-center h-full">
        <div className="z-10 text-center">
          <Link to={"/"}>
            <img src={IMAGES.logo} alt="logo" className="z-10 mx-auto" />
          </Link>
          <SiTicktick className="text-[100px] text-green-500 mx-auto mt-16" />
          <h1 className="text-neutral-80 text-4xl font-bold mt-5">Success</h1>
          <p className="text-neutral-85 mt-[10px] max-w-[434px]">
            Sign Up Successful! You can now sign in using your Private Key and
            Passcode. Please copy this Private key and keep it safe.
          </p>

          <div className="bg-neutral-50/50 text-white mx-auto font-medium cursor-pointer rounded-md py-1 px-4 tracking-wider font-mono flex items-center justify-between gap-4 my-6">
            4kf92mdjq8zxr0wvc31n5yga2sl9htup
            <GoCopy
              onClick={() => handleCopy("4kf92mdjq8zxr0wvc31n5yga2sl9htup")}
              className={`${
                isCopy ? " opacity-0 hidden" : " opacity-100 flex"
              } transition-all duration-300 cursor-pointer`}
            />
            <MdOutlineDone
              className={`${
                isCopy ? " opacity-100 flex" : " opacity-0 hidden"
              } transition-all duration-300 cursor-pointer`}
            />
          </div>

          <Link to={"/signin"}
            className="p-2 h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer"
          >
           Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
