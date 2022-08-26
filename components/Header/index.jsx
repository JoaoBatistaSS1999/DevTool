import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Button from "../Buttons/Button";
import { ethers } from "ethers";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#18191b");
  const [linkColor, setLinkColor] = useState("#ffffff");

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

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: shadow ? "#1f2122" : `${navBg}` }}
      id='header'
      className={
        shadow
          ? " w-full h-20 shadow-xl z-[100] ease-in duration-700"
          : " w-full h-20 z-[100]"
      }>
      <div className='flex justify-between items-center w-full h-full px-5 2xl:px-16'>
        <div className='flex-row-reverse md:flex-row w-full flex justify-between'>
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden md:flex md-justify-center items-center'>
            <li className='ml-10 text-sm uppercase  '>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase '>
              <Link href='/rankings'>Rankings</Link>
            </li>
            <li className='ml-10 text-sm uppercase '>
              <Link href='/findDev'>Search </Link>
            </li>
            <li className='ml-10 text-sm uppercase '>
              <Link href='/createNewDev'>Create dev</Link>
            </li>
          </ul>
          <Button
            text={isConnected ? shortAddress : "connect"}
            onClick={connectWallet}
          />

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden flex justify-center items-center'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen " : ""}>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0000009d] text-white p-10 ease-in duration-500"
              : "fixed left-[-130%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className='flex w-full items-center justify-end'>
              <div
                onClick={handleNav}
                className='rounded shadow-lg bg-white text-black p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/rankings'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Rankings
                </li>
              </Link>
              <Link href='/findDev'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Search Dev
                </li>
              </Link>
              <Link href='/createNewDev'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Create dev
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#ffffff]'>
                Contribute
                <span className='ml-3 font-bold'>
                  <a
                    href='https://github.com/JoaoBatistaSS1999/DevTool'
                    target='_blank'
                    rel='noReferrer'>
                    here
                  </a>
                </span>
              </p>
              {/* <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
