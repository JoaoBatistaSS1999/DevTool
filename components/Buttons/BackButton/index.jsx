import React from "react";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClick}
      type='button'
      className='h-10 px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#000000] hover:text-[#fff] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out'>
      Back
    </button>
  );
};
export default BackButton;
