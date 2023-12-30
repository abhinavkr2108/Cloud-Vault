
import React from 'react';
import { BsTrash, BsLink } from 'react-icons/bs';
import { FiExternalLink } from "react-icons/fi";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { getStorage, deleteObject, ref } from "firebase/storage";
import { app } from '../../../config/FirebaseConfig';

function Popover({file}) {

    const db = getFirestore(app);
    const storage = getStorage();



    const openFile = (url) => {
        window.open(url, '_blank');
    }

    const deleteFile = async (id) => {
       await deleteDoc(doc(db,"Files",id.toString()));
       const fileRef = ref(storage, `files/${file.name}`);
       // Delete the file
        deleteObject(fileRef).then(() => {
            alert("File Deleted");
        }).catch((error) => {
            console.error(error);
            alert("Error Deleting File");
        });
        
    }

  return (
    <div>
         <div className="absolute right-5 top-2 w-[20%] z-30 p-4 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
            
            <div className="flex flex-col gap-3 cursor-pointer">
                <div className="flex justify-between items-center hover:bg-gray-100" onClick={()=> openFile(file.downloadUrl)}>
                    <h1 className="text-lg font-semibold">Open File</h1>
                    <FiExternalLink color='blue'/>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-100" onClick={()=> deleteFile(file.id)}>
                    <h1 className="text-lg font-semibold">Delete File</h1>
                    <BsTrash color='red'/>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Popover