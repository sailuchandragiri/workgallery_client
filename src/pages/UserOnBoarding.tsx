import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import OnBoardingFlow from '../components/OnBoardingFlow';
import { USER_REGEX } from '../constants/constants';
const CollectUserName = ({ onNext }) => {
  const [userName, setUserName] = useState('');
  const [validUserName, setValidUserName] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    let isMounted = true;
    setErrorMsg('');
    const controller = new AbortController();
    axios.defaults.timeout = 5000;

    async function checkUserNameAvailability(userName: string) {
      try {
        const result = await axios.get(`/auth/check-username/${userName}`, {
          signal: controller.signal,
        });
        isMounted && setErrorMsg(result.data.message);
        setValidUserName(result.data.availability);
      } catch (err) {
        if (!err?.response) {
          setErrorMsg('No server response');
        }
        console.log(err, 'error');
        setErrorMsg('something went wrong');
      }
    }
    if (USER_REGEX.test(userName)) {
      checkUserNameAvailability(userName);
    } else {
      setErrorMsg('username must match criteria');
    }
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [userName]);
  return (
    <section className="">
      <h1 className="text-8xl text-center items-start pb-16">Connect</h1>
      <form className="flex justify-center flex-col w-[30%] mx-auto">
        <input
          type="text"
          value={userName}
          className="py-3  mt-5 text-black px-16 text-lg rounded-full border border-black"
          placeholder="enter username"
          onChange={(e) => setUserName(e.target.value)}
          minLength={5}
        />
        <p className="text-center">{errorMsg}</p>
        <button
          onClick={() => onNext({ userName })}
          disabled={!validUserName}
          className="py-3  mt-5 bg-black px-16 text-lg rounded-full cursor-auto disabled:opacity-50 text-white border border-black"
        >
          submit
        </button>
      </form>
      <p className="text-center">
        Already have an account ? <a href="/login">login here</a>
      </p>
    </section>
  );
};

export const CollectEmailAndPassword = ({ userData }) => {
  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const User = {
      email: formData.get('email'),
      password: formData.get('password'),
      userName: userData.userName,
    };
    await axios.post(
      '/auth/register',
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
  const [userData, setUserData] = useState({ userName: '' });
  const [currentIndex, setCurrentIndex] = useState(0);
  function onNext(stepData) {
    setUserData({ ...userData, ...stepData });
    if (currentIndex < 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  return (
    <OnBoardingFlow currentIndex={currentIndex} onNext={onNext}>
      <CollectUserName />
      <CollectEmailAndPassword userData={userData} />
    </OnBoardingFlow>
  );
};

export default UserOnBoarding;
