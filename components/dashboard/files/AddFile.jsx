"use client"
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React,{useContext, useEffect} from 'react'
import { app } from '../../../config/FirebaseConfig'
import { useUser } from '@clerk/nextjs';
import { FolderContext } from '../../../context/FolderContext';

function AddFile() {
    const db = getFirestore(app);
    const storage = getStorage();
    const storageRef = ref(storage);

    const {fileList, setFileList,parentFolderId, setParentFolderId} = useContext(FolderContext);

    const docId = Date.now();

    const user = useUser();
    

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
                            parentFolderId: parentFolderId,
                        })
                })
            })
         
            alert("File uploaded successfully");
        } catch (error) {
            console.error(error);
            alert("Error uploading file");
        }
        
    }
    
  return (
    <div className="mt-5">
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
    </div>
  )
}

export default AddFile