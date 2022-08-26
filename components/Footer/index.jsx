import Image from "next/image";
import Link from "next/link";
import React from "react";
import SolidityIcon from "../../public/assets/icons/solidity.svg";

const Footer = () => {
  return (
    <footer className='bg-gray-200   text-center lg:text-left'>
      <div className='text-gray-700 text-center justify-center flex p-4 bg-[#00000036]'>
        <a
          className='text-gray-800'
          href='https://t.me/dev_solidity'
          target='_blank'
          rel='noreferrer'>
          <div className='flex justify-around w-48 '>
            <div className='h-3 w-3'>
              <Image src={SolidityIcon} layout='intrinsic' alt='Solidity' />
            </div>
            Solidity Development
          </div>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
