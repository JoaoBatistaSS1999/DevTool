import React from "react";

const Danger = () => {
  return (
    <div className='flex items-center text-white max-w-sm w-full bg-red-400 shadow-md rounded-lg overflow-hidden mx-auto'>
      <div className='w-10 border-r px-2'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'></path>
        </svg>
      </div>

      <div className='flex items-center px-2 py-3'>
        <div className='mx-3'>
          <p>Your message</p>
        </div>
      </div>
    </div>
  );
};
export default Danger;
