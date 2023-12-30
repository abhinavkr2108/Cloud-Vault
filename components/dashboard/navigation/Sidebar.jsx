"use client"
import React, { useState, useEffect } from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import { IoMdAddCircleOutline, IoMdHome, IoMdTrash, IoMdBookmark } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { UserButton } from '@clerk/nextjs';
import Modal from "../../../components/dashboard/folders/Modal"



function Sidebar() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    // const [mounted, setMounted] = useState(false);
    // // useEffect(() => {
    // //   setMounted(true);
    // // }, []);
  
    // // if (!mounted) return <></>;
    // // write rest of your code

    const openModal = () => {
      setIsModalOpen(true);
    }
    const closeModal = () => {
      setIsModalOpen(false);
    }

    const menuList = [
        {
            id:1,
            name:"Dashboard",
            logo:<IoMdHome/>,
        },
        {
            id:2,
            name:"My Files",
            logo:<FaFileAlt/>,
        },
        {
            id:3,
            name:"Saved",
            logo:<IoMdBookmark/>,
        },
        {
            id:4,
            name:"Trash",
            logo:<IoMdTrash/>,
        },
    ]

  return (
    <div className="bg-white z-10 h-full w-56 inset-y-0 shadow-blue-50 shadow-md sticky">
        <Image src={logo} 
            alt="logo" 
            className="w-72 h-[90px] object-cover px-3"
        />
        <div className="flex flex-col gap-3 mx-3 mt-4">
            <div className="flex justify-center items-center gap-2 px-3 py-2 w-full bg-blue-500 text-white font-semibold mx-auto rounded-md cursor-pointer">
                Add New File 
                <IoMdAddCircleOutline/>
            </div>
            <button 
                className="flex justify-center items-center gap-2 px-3 py-2 w-full bg-yellow-500 text-black font-semibold mx-auto rounded-md cursor-pointer"
                // onClick={()=> setShowModal(true)}
            >
                Add New Folder
                <IoMdAddCircleOutline/>
                {/* {
                    showModal && <Modal onClose={()=> setShowModal(false)}/>
                } */}

            </button>
            {/**Modal Start */}
            <div>
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
 Open modal
</button>

<div id="hs-basic-modal" className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
 <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
   <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
     <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
       <h3 className="font-bold text-gray-800 dark:text-white">
         Modal title
       </h3>
       <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
         <span class="sr-only">Close</span>
         <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
       </button>
     </div>
     <div class="p-4 overflow-y-auto">
       <p class="mt-1 text-gray-800 dark:text-gray-400">
         This is a wider card with supporting text below as a natural lead-in to additional content.
       </p>
     </div>
     <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
       <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-basic-modal">
         Close
       </button>
       <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
         Save changes
       </button>
     </div>
   </div>
 </div>
</div>
   </div>
           
            {/**Modal End */}
        </div>

        <div className="mt-5 w-full px-3">
            {
                menuList.map((item,index)=>(    
                    <div 
                        className={`flex items-center gap-2 py-2 text-lg text-gray-500 hover:bg-blue-100 rounded-md cursor-pointer
                        ${activeIndex===index?"bg-blue-100 text-white":null}`}
                        onClick={()=> setActiveIndex(index)}
                        key={item.id}
                    >
                        {item.logo}
                        {item.name}
                    </div>
                ))
            }
        </div>

    
       


        <div className="mt-64 ml-5">
            <UserButton afterSignOutUrl="/"/>
        </div>
     
    </div>
  )
}

export default Sidebar