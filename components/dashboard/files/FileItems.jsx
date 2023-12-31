import moment from 'moment';
import Image from 'next/image';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import Popover from "../../../components/dashboard/popover/Popover";

function FileItems({file}) {
  const image="/" + file.extension + ".png"
  return (
    <div
    className="grid grid-cols-1
  md:grid-cols-2 justify-between
  cursor-pointer hover:bg-gray-100
  p-3 rounded-md"

  >
    <div className="flex gap-2 items-center" >
      <Image
        src={image}
        alt="file-icon"
        width={26}
        height={20}
      />
      <h2 className="text-[15px] truncate"
      >{file.name}</h2>
    </div>
    <div className="grid grid-cols-3 place-content-start">
      <h2 className="text-[15px]">
        {/* {moment(file.modifiedAt).format("MMMM DD, YYYY")} */}
        
        {moment(file.modifiedAt).format("MMMM DD, YYYY")}
      </h2>
      
      <h2 className="text-[15px]">
        {/* {(file.size / 1024 ** 2).toFixed(2) + " MB"} */}
        {(file.size / 1024 ** 2).toFixed(2) + " MB"}  
      </h2>


    </div>
    
  </div>
);
}
  

export default FileItems