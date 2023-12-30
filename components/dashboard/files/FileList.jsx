"use client";
import React, { useState, useEffect } from 'react';
import FileItems from "./FileItems"
import Popover from "../popover/Popover";

function FileList({fileList}) {

  const [openIndex, setOpenIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const openPopover = (index) => {
    setIsOpen(!isOpen);
    setOpenIndex(index);
  }

  return (
    <div className="bg-white px-5 py-5 mt-5 rounded-md">
        <p className="font-bold">Recent Files</p>
        <div className="grid grid-cols-1 md:grid-cols-2 font-semibold text-gray-500 border-b border-gray-300 mt-3 pb-2">
            Name
            <div className="grid grid-cols-3">
                <h2>Modified</h2>
                <h2>Size</h2>
                <h2></h2>
            </div>
        </div>
        {
          fileList.map((file,index)=>(
            <div key={index} onClick={() => openPopover(index)} className="relative">
              {
                openIndex === index && isOpen && (
                  // <div className="absolute right-0 top-2 w-[20%] p-4 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
                  //    This is a very beautiful popover, show some love.
                  // </div>
                  <Popover file={file}/>
                )
              }
              <FileItems file={file}/>
            </div>
          ))
        }
    </div>
  )
}

export default FileList