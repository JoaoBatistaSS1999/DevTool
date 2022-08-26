import React, { useEffect, useState } from "react";
import TableItem from "../../components/TableItem";
import Abi from "../../contract/Devtool.json";
import { ethers } from "ethers";
import Data from "../../DATA/index.json";
import IconUP from "../../public/assets/icons/arrow-up.png";
import Image from "next/image";
import Link from "next/link";

const contractAddress = "0xf2e06630761c6ed883d3b5447bAd774fF740aaa6";

const Rankings = () => {
  const [backTop, setBackTop] = useState();

  // const getAllDevs = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const contract = new ethers.Contract(contractAddress, Abi, provider);

  //   const devs = await contract.getAllDevs();
  //   console.log(devs);
  // };
  // getAllDevs();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 500) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  // let mybutton = document.getElementById("btn-back-to-top");

  // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }
  // // When the user clicks on the button, scroll to the top of the document
  // mybutton.addEventListener("click", backToTop);

  // function backToTop() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  const scores = Data.sort((a, b) => a.score - b.score).reverse();

  console.log(scores);

  return (
    <div>
      <div className='min-h-[calc(100vh-136px)] flex flex-col  sm:p-10'>
        <div className='py-2  sm:px-6 text-center sm:text-start'>
          <h3 className='font-medium leading-tight text-xl sm:text-3xl mt-0 mb-2 text-Black'>
            General Rankings
          </h3>
          <div className='rounded-md bg-[#444444] sm:p-5 '>
            <table className='min-w-full'>
              <thead className='bg-white border-b '>
                <tr>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Rank
                  </th>
                  <th
                    scope='col'
                    className=' text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Id
                  </th>
                  <th
                    scope='col'
                    className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.map((item, index) => (
                  <TableItem
                    rank={index + 1}
                    name={item.name}
                    id={item.id}
                    rating={item.score}
                    key={item.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {backTop && (
        <Link href='#header'>
          <button className=' border-2 border-[#474646] flex justify-center items-center align-middle fixed right-3 bottom-3 sm:right-10 sm:bottom-10 rounded-full bg-[#fcfcfc] sm:p-4 p-2'>
            <div className='h-5 w-5 sm:h-7 sm:w-7 '>
              <Image src={IconUP} layout='intrinsic' alt='arrow-up' />
            </div>
          </button>
        </Link>
      )}
    </div>
  );
};
export default Rankings;
