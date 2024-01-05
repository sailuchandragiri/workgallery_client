import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { ApiErrorResponse } from "./Login";
import { AxiosResponse, AxiosError } from "axios";
import GitHubLogo from "../assets/github.svg";
import GoogleLogo from "../assets/google.svg";
import OnBoardingFlow from "../components/OnBoardingFlow";
import { USER_REGEX } from "../constants/constants";
import { getGoogleUrl } from "../utils/getGoogleUrl";
import { getGitHubUrl } from "../utils/getGithubUrl";
import { useLocation } from "react-router-dom";
interface IStepData {
  userName: string;
}
interface IUserData {
  userName: string;
}
interface CollectEmailAndPasswordProps {
  userData: IUserData;
}

interface CollectUserNameProps {
  onNext: (stepData: IStepData) => void;
}

const CollectUserName: React.FC<CollectUserNameProps> = ({ onNext }) => {
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  //const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || "/";
  useEffect(() => {
    let isMounted = true;
    setErrorMsg("");
    const controller = new AbortController();
    axios.defaults.timeout = 5000;

    async function checkUserNameAvailability(userName: string) {
      try {
        const result: AxiosResponse = await axios.get(`/auth/check-username/${userName}`, {
          signal: controller.signal,
        });
        isMounted && setErrorMsg(result.data.message);
        setValidUserName(result.data.availability);
      } catch (err) {
        const error = err as AxiosError<ApiErrorResponse>;
        if (error.response) {
          // Now TypeScript knows error.response exists
          setErrorMsg(error.response.data.message);
        } else {
          // Handle the case where the error does not have a response (network error, etc.)
          setErrorMsg("Internal Server Error");
        }
      }
    }
    if (USER_REGEX.test(userName)) {
      checkUserNameAvailability(userName);
    } else {
      setErrorMsg("username must match criteria");
    }
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [userName]);
  return (
    <section className="">
      <div className="w-[80%] xl:w-[30%] mx-auto">
        <h1 className="text-2xl items-start xl:text-6xl py-3">Connect</h1>
        <p className="py-5 text-xl font-thin">
          Craft Your Profile with WorkGallery, Elevate Your Presence, and Connect with Like-minded
          Creatives
        </p>
        <form className="flex justify-center flex-col mx-auto">
          <div className="relative pb-7">
            <label htmlFor="username" className="block text-gray-500">
              Username
            </label>
            <input
              type="text"
              value={userName}
              className=" text-gray-700 text-lg  border-b-2 border-black focus:outline-none w-full"
              onChange={(e) => setUserName(e.target.value)}
              minLength={5}
            />
            <p className="text-center absolute right-0">{errorMsg}</p>
          </div>

          <button
            onClick={() => onNext({ userName })}
            disabled={!validUserName}
            className="py-3  mt-5 bg-accent px-16 text-lg rounded-full cursor-auto disabled:opacity-30 text-white border border-black"
          >
            submit
          </button>
        </form>
        <p className="text-center py-3">or</p>
        <a
          className="border border-gray-500 py-2 text-gray-500 font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-2"
          href={getGoogleUrl(fromLocation)}
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            className="pr-2 border-spacing-1"
            src={GoogleLogo}
            alt=""
            style={{ height: "2rem" }}
          />
          Login with Google
        </a>
        <a
          className="py-2 border text-gray-500 border-gray-500  font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
          href={getGitHubUrl(fromLocation)}
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img className="pr-2" src={GitHubLogo} alt="" style={{ height: "2.2rem" }} />
          Login with GitHub
        </a>
        <p className="text-center py-2">
          Already have an account ?{" "}
          <a href="/login" className="text-accent underline">
            login here
          </a>
        </p>
      </div>
    </section>
  );
};

export const CollectEmailAndPassword: React.FC<CollectEmailAndPasswordProps> = ({ userData }) => {
  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const User = {
      email: formData.get("email"),
      password: formData.get("password"),
      userName: userData.userName,
    };
    await axios.post(
      "/auth/register",
      JSON.stringify({ userName: User.userName, email: User.email, password: User.password }),
    );
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input name="email" placeholder="enter email" type="email" />
      <input name="password" placeholder="enter password" type="password" />
      <button>Submit</button>
    </form>
  );
};

const UserOnBoarding = () => {
  const [userData, setUserData] = useState<IUserData>({ userName: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  function onNext(stepData: IStepData) {
    setUserData({ ...userData, ...stepData });
    if (currentIndex < 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  return (
    <OnBoardingFlow currentIndex={currentIndex} onNext={onNext}>
      {/*// @ts-expect-error:already cloned*/}
      <CollectUserName />
      <CollectEmailAndPassword userData={userData} />
    </OnBoardingFlow>
  );
};

export default UserOnBoarding;
