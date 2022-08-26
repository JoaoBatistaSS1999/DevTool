import React from "react";
import Ratings from "../Ratings";

const ListItem = ({ name }) => {
  return (
    <li className='flex items-center justify-between px-6 py-2 border-b border-gray-200 w-full'>
      {name}
      <Ratings />
    </li>
  );
};
export default ListItem;
