import React, { useEffect, useState } from 'react';
import GitHubLogo from '../assets/github.svg';
import { getGoogleUrl } from '../utils/getGoogleUrl';
import { getGitHubUrl } from '../utils/getGithubUrl';
import GoogleLogo from '../assets/google.svg';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import { AxiosResponse, AxiosError } from 'axios';
interface IUser {
  user: string;
  password: string;
}
interface IFocus {
  user: boolean;
  password: boolean;
}

export interface ApiErrorResponse {
  message: string;
}

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const [userData, setUserData] = useState<IUser>({ user: '', password: '' });
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isFocused, setIsFocused] = useState<IFocus>({ user: false, password: false });

  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || '/';

  //getting the  location of user before they came to login
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setIsFocused((prev) => ({ ...prev, [e.target.name]: true }));
  }
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let userName: string | null;
    let email: string | null;
    if (userData.user.includes('@')) {
      email = userData.user;
      userName = null;
    } else {
      userName = userData.user;
      email = null;
    }
    try {
      //for setting up cookies we are using private method
      const response: AxiosResponse = await axios.post(
        'auth/login',
        JSON.stringify({ userName, email, password: userData.password }),
        { withCredentials: true },
      );
      console.log(response);
      const accessToken: string = response?.data?.accessToken;
      const name: string = response?.data?.userName;
      // const id: string = response?.data?.id;
      const email_r: string = response?.data?.email;
      setAuth({ accessToken: accessToken, userName: name, email: email_r });
      setUserData({ user: '', password: '' });

      navigate(fromLocation, { replace: true });
      //success send the user back to where they were
    } catch (e) {
      const error = e as AxiosError<ApiErrorResponse>;
      if (error.response) {
        // Now TypeScript knows error.response exists
        setErrorMsg(error.response.data.message);
      } else {
        // Handle the case where the error does not have a response (network error, etc.)
        setErrorMsg('Internal Server Error');
      }
    }
  }

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('persist', JSON.stringify(persist));
    console.log('persist', persist);
  }, [persist]);

  return (
    <section>
      <div className="w-[80%] xl:w-[40%] mx-auto">
        <h3 className="text-2xl xl:text-4xl xl:py-5">Login</h3>
        <p className="text-sm py-3">Connect with over 1000 New profiles</p>
        <form onSubmit={submitHandler}>
          <div className="relative py-3">
            <label
              className={`absolute  text-gray-500 font-normal transition-all ${
                isFocused?.user
                  ? 'transform scale-75 bottom-7 -left-4'
                  : !userData.user
                    ? 'transform scale-0 bottom-0 left-0'
                    : null
              }`}
              htmlFor="user"
            >
              Username or Email:
            </label>
            <input
              type="text"
              className="border-b-2  border-gray-700  font-normal focus:outline-none w-full"
              name="user"
              id="user"
              value={userData.user}
              onChange={changeHandler}
              minLength={6}
              onFocus={handleFocus}
              autoFocus={true}
              maxLength={25}
            />
          </div>
          <div className="relative py-3">
            <label
              className={`absolute  text-gray-500 font-normal transition-all ${
                isFocused.password ? 'transform scale-75 bottom-7 -left-2' : ''
              }`}
              htmlFor="pwd"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="pwd"
              value={userData.password}
              onChange={changeHandler}
              className="border-b-2  border-gray-700 focus:outline-none w-full"
              minLength={6}
              maxLength={32}
              onFocus={handleFocus}
            />
          </div>
          <div>
            <input type="checkbox" id="persist" onChange={togglePersist} checked={persist} />
            <label htmlFor="persist">Remember me</label>
          </div>
          <p className="text-center">{errorMsg}</p>
          <input
            type="submit"
            value="Login"
            className="text-white mt-5 border border-gray-600 cursor-pointer bg-accent py-3  rounded-full w-full"
          />
          <p className="text-center py-2">or</p>
        </form>

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
            style={{ height: '2rem' }}
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
          <img className="pr-2" src={GitHubLogo} alt="" style={{ height: '2.2rem' }} />
          Login with GitHub
        </a>
        <p className="text-center py-4">
          Don't have an account ?{' '}
          <a href={`/register`} className="font-normal  text-accent underline">
            Register Here
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
