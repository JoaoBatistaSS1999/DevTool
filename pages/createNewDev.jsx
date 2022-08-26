import React from "react";
import CreateForm from "../components/CreateForm";

const CreateNewDev = () => {
  const handleClick = () => {
    console.log("wasd");
  };
  return (
    <div className='flex flex-col w-full  items-center align-middle justify-center  min-h-[calc(100vh-136px)]'>
      <h3 className='text-lg sm:font-medium leading-tight sm:text-3xl mt-0 mb-2 text-black'>
        Create New Dev
      </h3>
      <CreateForm onClick={handleClick} />
    </div>
  );
};
export default CreateNewDev;
