"use client"
import React,{useEffect,useState} from 'react';
import { getFirestore} from "firebase/firestore";
import {app} from "../../../config/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
// import {user} from "../../../config/User"


export default function AddFolderModal() {

  const [folderName, setFolderName] = useState("");
  const db = getFirestore(app);
  const docId = Date.now().toString();
  const user = useUser();
 

  const createFolder = async () => {
    if(folderName === "") return;
    console.log(folderName);
    console.log(user);
    await setDoc(doc(db, "Folders",docId),{
      name:folderName,
      id:docId,
      createdBy: user.user.primaryEmailAddress.emailAddress,
    },
    setFolderName("")
    ).then(alert("Folder Created"))
      .catch((err)=> console.log(err))

  }
  

  return (
    <div className="mt-5">
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-black hover:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-slide-down-animation-modal">
      Add New Folder
    </button>

<div id="hs-slide-down-animation-modal" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
  <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-300 dark:border-gray-300 dark:shadow-slate-700/[.7]">
    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-300">
      <h3 className="font-bold text-gray-800 dark:text-white">
        Add New Folder
      </h3>
      <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-slide-down-animation-modal">
        <span className="sr-only">Close</span>
        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
    <div className="p-4 overflow-y-auto">
      <p className="mt-1 text-gray-800 dark:text-gray-400">
        Add a new folder to Cloud Vault
      </p>
      <input type="text" 
        className="py-3 mt-3 px-3 block w-full bg-gray-200 border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder='Enter Folder Name'
        onChange={(e)=> setFolderName(e.target.value)}
      >
        
        </input>
    </div>
    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-slide-down-animation-modal">
        Close
      </button>
      <button type="button" 
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-slide-down-animation-modal"
        onClick={()=> createFolder()}
      >
        Add Folder
      </button>
    </div>
  </div>
</div>
</div>
  </div>
  );
 }
 