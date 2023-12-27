import React, { useEffect, useState } from 'react';
import GitHubLogo from '../assets/github.svg';
import { getGoogleUrl } from '../utils/getGoogleUrl';
import { getGitHubUrl } from '../utils/getGithubUrl';
import GoogleLogo from '../assets/google.svg';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
interface IUser {
  user: string;
  password: string;
}

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const [userData, setUserData] = useState<IUser>({ user: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || '/';

  //getting the  location of user before they came to login
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      const response = await axios.post(
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
      setErrorMsg(e?.response?.data?.message);
      if (!e?.response) {
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
      <form onSubmit={submitHandler} className="flex flex-col mx-auto w-[50%]">
        <div className="py-10">
          <label>Username or Email:</label>
          <input
            type="text"
            className="border border-black"
            name="user"
            value={userData.user}
            onChange={changeHandler}
          />
        </div>
        <div className="">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={changeHandler}
            className="border border-black"
          />
        </div>
        <p className="text-center">{errorMsg}</p>

        <input
          type="submit"
          value="Login"
          className="text-white my-10 cursor-pointer bg-black py-3 px-10 rounded-md"
        />
      </form>

      <a
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ backgroundColor: '#3b5998' }}
        href={getGoogleUrl(fromLocation)}
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img className="pr-2" src={GoogleLogo} alt="" style={{ height: '2rem' }} />
        Continue with Google
      </a>
      <a
        className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        style={{ backgroundColor: '#55acee' }}
        href={getGitHubUrl(fromLocation)}
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img className="pr-2" src={GitHubLogo} alt="" style={{ height: '2.2rem' }} />
        Continue with GitHub
      </a>
      <div>
        <input type="checkbox" id="persist" onChange={togglePersist} checked={persist} />
        <label htmlFor="persist">Remember me</label>
      </div>
      <p className="text-center">
        Don't have an account ?{' '}
        <a href={`/register`} className="font-bold">
          Register Here
        </a>
      </p>
    </section>
  );
};

export default Login;
