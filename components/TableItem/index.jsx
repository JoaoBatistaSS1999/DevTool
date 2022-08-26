import React from "react";
import Link from "next/link";

const TableItem = ({ rank, name, id, rating }) => {
  return (
    <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
        {rank}
      </td>

      <td className='hover:text-[#0099ff] text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        <Link href='/id'>
          <h3 className='cursor-pointer'>{name}</h3>
        </Link>
      </td>

      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {id}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {rating}
      </td>
    </tr>
  );
};
export default TableItem;
