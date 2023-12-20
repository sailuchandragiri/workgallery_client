import React, { useState } from 'react';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

interface IUser {
  user: string;
  password: string;
}

const Login = () => {
  const { setAuth } = useAuth();
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
      const response = await axios.post(
        'auth/login',
        JSON.stringify({ userName, email, password: userData.password }),
      );
      console.log(response);
      const accessToken: string = response?.data?.accessToken;
      const name: string = response?.data?.userName;
      const sub: string = response?.data?.subscription;
      // const id: string = response?.data?.id;
      const email_r: string = response?.data?.email;
      setAuth({ accessToken, userName: name, email: email_r, sub });
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
