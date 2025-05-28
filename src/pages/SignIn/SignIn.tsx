/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { IMAGES } from "../../assets";
import Cookies from "js-cookie";
import { useLoginMutation } from "../../redux/Features/Auth/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Features/Auth/authSlice";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

type TFormValues = {
  identifier: string;
  password: string;
};
const SignIn = () => {
 const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const handleSignin = async (data: TFormValues) => {
    try {
      const payload = {
        identifier: data.identifier,
        password: data.password,
      };
      const response = await login(payload).unwrap();
      const user = response?.user;
      const accessToken = response.token;
      const userRole = response?.user?.role;
      if (accessToken) {
        Cookies.set("accessToken", accessToken, {
          expires: 7,
          secure:
            typeof window !== "undefined" &&
            window.location.protocol === "https:",
          sameSite: "strict",
        });
        Cookies.set("role", userRole, {
          expires: 7,
          secure: window.location.protocol === "https:",
          sameSite: "strict",
        });
      }

      if (response?.message) {
        dispatch(setUser({ user, token: accessToken }));
        toast.success(response?.message || "Login successful!");
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast.error(error?.data?.error || error?.message || "An error occurred");
      console.log(error);
    }
  };
  return (
    <div className="font-Outfit relative h-screen">
      <div className="bg-primary-30 w-[300px] lg:w-[432px] h-[351px] rounded-[431px] blur-[75px] z-0 absolute top-0 left-0"></div>
      <div className="bg-primary-15 w-[300px] lg:w-[443px] h-[351px] rounded-[443px] blur-[75px] z-10 absolute -top-32 right-0"></div>
      <div className="max-w-full lg:max-w-[500px] mx-auto px-5 2xl:px-0 flex items-center justify-center h-full">
        <div className="z-10">
          <Link to={"/"}>
            <img src={IMAGES.logo} alt="logo" className="z-10" />
          </Link>
          <h1 className="text-neutral-80 text-xl mt-[17px]">Sign in</h1>
          <p className="text-neutral-85 mt-[10px] max-w-[434px]">
            Access the TEN STAGE MATRIX using your private key and passcode
          </p>

          <form onSubmit={handleSubmit(handleSignin)} className="mt-[42px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-neutral-85">
                Private Key
              </label>
              <input
                type="text"
                placeholder="Enter your private key"
                {...register("identifier", {
                  required: "Private key is required",
                })}
                className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.identifier ? "border-red-500" : "border-neutral-90"
                }`}
              />
              {typeof errors === "object" && "message" in errors && (
                <span className="text-red-500 text-sm">
                  {String(errors.message)}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-[17px]">
              <label htmlFor="" className="text-neutral-85">
                Passcode
              </label>
              <input
                type="password"
                placeholder="Enter your passcode"
                {...register("password", {
                  required: "Passcode is required",
                })}
                className={`w-full p-4 rounded-[8px] border border-neutral-90 focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-85 ${
                  errors?.password ? "border-red-500" : "border-neutral-90"
                }`}
              />
              {typeof errors === "object" && "message" in errors && (
                <span className="text-red-500 text-sm">
                  {String(errors.message)}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="p-2 w-full  h-12 rounded-lg border border-primary-10 bg-primary-10 text-white font-medium text-center cursor-pointer mt-6"
            >
              {isLoading ? <Loader size="size-6" /> : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
