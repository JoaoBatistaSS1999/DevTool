import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../contract/Devtool.json";
import Button from "../components/Buttons/Button";

const contractAddress = "0x298fC74E82bb92241DdE1d81a5ee4c7A36948859";

const Home = () => {
  const [contract, setContract] = useState();
  const [address, setAddress] = useState();

  const loadContract = (signer) => {
    const contract = new ethers.Contract(contractAddress, abi, signer);
    console.log(contract);
    setContract(contract);
  };

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const accounts = await provider.send("eth_requestAccounts", []);
    setAddress(accounts[0]);
    loadContract(signer);
  };

  const getRatings = async () => {
    const ratings = await contract.viewRatings("Dave");
    const formatedData = ratings.map((item) =>
      ethers.utils.formatUnits(item, 0)
    );
    console.log(formatedData);
    return formatedData;

    // const arrayNumber = formatedData.map((item) => +item);
    // const total = arrayNumber.reduce((r, c) => r + parseFloat(c), 0);
    // const average = total / formatedData.length;
    // console.table({ formatedData, average });
  };

  const getAverage = async () => {
    const scoreData = await contract.viewDev("Dave");
    const formatedData = ethers.utils.formatUnits(scoreData.score, 0);
    console.log(formatedData / 100);

    return formatedData / 100;
  };

  return (
    <div className='bg-[#eeeeee]  min-h-[calc(100vh-112px)] flex justify-center items-center'>
      Home
    </div>
  );
};
export default Home;
