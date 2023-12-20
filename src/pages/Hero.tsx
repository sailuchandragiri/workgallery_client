import React, { useState } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
const Hero = () => {
  const [showInput, setShowInput] = useState(false);
  const refresh = useRefreshToken();
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <section className="text-center">
      <h1 className="text-gray-800  text-7xl  pt-20 pb-9">
        Craft your{' '}
        <span className="font-bold italic">
          Digital <br /> Portfolio
        </span>{' '}
        with ease!
      </h1>
      <p className="text-lg font-medium pb-20">
        A Single Platform for Showcasing Your Work Hassle-Free! Just Plug in and Let Us Handle the
        Rest.
      </p>
      <button
        className="mt-5 bg-black text-white py-4 px-28 text-lg rounded-full"
        onClick={() => setShowInput(!showInput)}
      >
        Join wait list
      </button>
      <button
        className="mt-5 bg-black text-white py-4 px-28 text-lg rounded-full"
        onClick={() => refresh()}
      >
        Refresh
      </button>

      {showInput && (
        <form onSubmit={submitHandler}>
          <input type="email" name="email" />
          <button></button>
        </form>
      )}
    </section>
  );
};

export default Hero;
