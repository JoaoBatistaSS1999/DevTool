import Link from "next/link";
import React, { useState } from "react";
import Button from "../Buttons/Button";
import { ethers } from "ethers";

const Header = () => {
  const [address, setAddress] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const shortAddress = address?.slice(0, 5) + "..." + address?.slice(-5);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      setIsConnected(true);
      console.log(address);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <header id='header'>
      <nav className='navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between'>
        <div className='px-6 w-full flex flex-wrap items-center justify-between'>
          <div className='flex items-center'>
            <button
              className='navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContentY'
              aria-controls='navbarSupportedContentY'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                className='w-5'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'>
                <path
                  fill='currentColor'
                  d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
              </svg>
            </button>
          </div>
          <div
            className='navbar-collapse collapse grow items-center'
            id='navbarSupportedContentY'>
            <ul className='navbar-nav mr-auto lg:flex lg:flex-row'>
              <li className='nav-item'>
                <Link href='/'>
                  <a
                    className='cursor-pointer nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                    href=''
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'>
                    Home
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/rankings'>
                  <a
                    className='nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                    href=''
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'>
                    Rankings 🏅
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/finddev'>
                  <a
                    className='nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                    href=''
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'>
                    Find dev 🧐
                  </a>
                </Link>
              </li>
              <li className='nav-item mb-2 lg:mb-0'>
                <Link href='/createNewDev'>
                  <a
                    className='nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                    href=''
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'>
                    Create ➕
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <Button
            text={isConnected ? shortAddress : "connect"}
            onClick={connectWallet}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
