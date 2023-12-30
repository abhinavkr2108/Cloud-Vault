"use client"
import React, { use, useContext, useEffect, useState } from 'react'
import { FolderContext, FolderContextProvider } from '../../../../../context/FolderContext';
import AddFile from '../../../../../components/dashboard/files/AddFile';
import { useUser } from '@clerk/nextjs';
import { collection, doc, getFirestore, onSnapshot, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from '../../../../../config/FirebaseConfig';
import FileList from '../../../../../components/dashboard/files/FileList';
import { Folder } from 'lucide-react';




function FolderPage({params}) {
  const folderId = params.folderId;
  const db = getFirestore(app);
  const storage = getStorage();
  const storageRef = ref(storage);
  const user = JSON.parse(localStorage.getItem("user"));
  const docId = Date.now();

 
  const [fileList, setFileList] = useState([]);


  const items = localStorage.getItem("folders");
  const folders = JSON.parse(items);
  const folder = folders.find(folder => folder.id === folderId);
  useEffect(() => {
    console.log("User object: ", user);
    fetchFiles();
   },[])
    

    const onFileUpload = async (file) => {
        try {
            console.log("FILE DATA");
            console.log(file);
            const fileRef = ref(storage, `files/${file.name}`);
            uploadBytes(fileRef, file).then((snapshot) => {
                console.log("FILE UPLOADED");
                console.log(file)
            })
            .then((response)=>{
                getDownloadURL(fileRef)
                .then(async(downloadUrl)=>{
                    console.log("DOWNLOAD URL");
                    console.log(downloadUrl);
                       await setDoc(doc(db,"Files",docId.toString()),{
                            id: docId.toString(),
                            createdBy: user.user.primaryEmailAddress.emailAddress,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            extension: file.name.split(".")[1],
                            lastModified: file.lastModified,
                            downloadUrl: downloadUrl,
                            parentFolderId: folderId,
                        })
                })
            })
         
            alert("File uploaded successfully");
        } catch (error) {
            console.error(error);
            alert("Error uploading file");
        }
        
    }
    const fetchFiles = async () => {
      const unsubscribe = await onSnapshot(collection(db, "Files"), (snapshot) => {
        const files = snapshot.docs
          .filter((doc)=> doc.data().createdBy === user.user.primaryEmailAddress.emailAddress)
          .filter((doc)=> doc.data().parentFolderId === folderId)
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("FILES DATA",files);
        setFileList(files);
        console.log("FILES LIST");
        console.log(fileList);
      });
    
      return () => unsubscribe();
     }
 
  return (
    <div className="w-[80%] sm:w-[90%] mx-auto my-10 bg-white rounded-lg">

      <div className="flex justify-between items-center m-2 lg:m-5">
        <div className="font-bold text-lg lg:text-2xl">
            {folder.name}
          </div>
          <div className="flex gap-2">
            {/* <AddFile/> */}
            <form>
            <label className="block">
                <span className="sr-only">Add New File</span>
                <input 
                    type="file" 
                    className="block w-full cursor-pointer text-sm text-gray-500
                    file:me-4 file:py-3 file:px-5
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-600 file:text-white
                    hover:file:bg-blue-700
                    file:disabled:opacity-50 file:disabled:pointer-events-none
                    dark:file:bg-blue-500
                    dark:hover:file:bg-blue-400"
                    onChange={(e) => onFileUpload(e.target.files[0])}
                />
            </label>
        </form>
            {/* <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded-md">Add Folder</button> */}
          </div>
      </div>

      <FileList fileList={fileList} />
        
    </div>      
  
  )
}

export default FolderPage