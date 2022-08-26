import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Data from "../DATA/index.json";

const FindDev = () => {
  const [inputValue, setInputValue] = useState("");
  const isEmpty = inputValue === "";

  const handleNewValue = (e) => {
    setInputValue(e.target.value);
  };

  const scores = Data.sort((a, b) => a.score - b.score).reverse();
  const bestRated = scores.slice(0, 5);
  const filterSearch = scores
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    )
    .map((item) => <ListItem name={item.name} key={item.id} />);

  return (
    <div className='bg-[#f1f1f1] min-h-[calc(100vh-112px)] p-5 flex flex-col justify-start text-center'>
      <h3 className='font-medium leading-tight text-3xl mt-0 mb-2 text-black'>
        Find Dev By Name
      </h3>
      <div className=' p-5 flex-col items-center '>
        <div className='mb-3 flex justify-center'>
          <div className='input-group w-80 '>
            <input
              value={inputValue}
              onChange={handleNewValue}
              type='search'
              className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='button-addon2'
            />
          </div>
        </div>

        <div className=' px-5 w-full  flex justify-center items-center align-middle'>
          <div className=' w-fit text-start p-5'>
            <h4 className='text-md'>{isEmpty ? "Top 5 Ratings" : "Results"}</h4>
            <div className='flex justify-center'>
              <ul className='bg-white rounded-lg  border border-gray-200 w-96 text-gray-900 '>
                {isEmpty ? (
                  bestRated.map((item) => (
                    <ListItem name={item.name} key={item.id} />
                  ))
                ) : filterSearch.length > 0 ? (
                  filterSearch
                ) : (
                  <div className='h-10 flex justify-center items-center'>
                    <h3>No results found 😞</h3>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindDev;
