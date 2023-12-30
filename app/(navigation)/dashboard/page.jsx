"use client"
import FileList from '../../../components/dashboard/files/FileList';
import FolderList from '../../../components/dashboard/folders/FolderList';
import Searchbar from '../../../components/dashboard/search/Searchbar';
import Storage from '../../../components/storage/Storage';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import React, { use, useContext, useEffect, useState} from 'react'
import AddFolderModal from "../../../components/dashboard/folders/AddFolderModal.jsx"
import AddFile from "../../../components/dashboard/files/AddFile.jsx"
import { collection, getFirestore, query, where,getDocs, onSnapshot } from "firebase/firestore"; 
import { app } from '../../../config/FirebaseConfig';
import { FolderContext } from '../../../context/FolderContext';
import Popover from '../../../components/dashboard/popover/Popover';


 function Dashboard() {

  const db = getFirestore(app);
  const fetchedUser = useUser();
  const {folderList,setFolderList, parentFolderId, setParentFolderId, user,setUser} = useContext(FolderContext);
  const [foldersFetched, setFoldersFetched] = useState(false);
  const [filesFetched, setFilesFetched] = useState(false);
  const [fileList, setFileList] = useState([]);


  useEffect(() => {
    if (fetchedUser.isLoaded && !foldersFetched) {
      console.log("THIS IS USER DATA",fetchedUser);
      setUser(fetchedUser);
      console.log("USER DATA FROM LOCAL STORAGE");
      console.log(user);
      fetchFolders();
      fetchFiles();
      console.log("PARENT FOLDER ID: ",parentFolderId);
      setFilesFetched(true);
      setFoldersFetched(true);
    } 

  }, [fetchedUser]);

   const fetchFolders = async () => {
    const unsubscribe = await onSnapshot(collection(db, "Folders"), (snapshot) => {
      const folders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFolderList(folders);
      console.log("FOLDERS LIST");
      console.log(folderList);
    });
  
    return () => unsubscribe();
   }

   const fetchFiles = async () => {
    const unsubscribe = await onSnapshot(collection(db, "Files"), (snapshot) => {
      const files = snapshot.docs
        .filter((doc)=> doc.data().createdBy === fetchedUser.user.primaryEmailAddress.emailAddress)
        .filter((doc)=> doc.data().parentFolderId === 0)
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
    
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">

          <div className="col-span-2 p-5">
            <Searchbar/>
            <AddFolderModal/>
            <FolderList folderList={folderList} />
            <AddFile/>
            <FileList fileList={fileList} />
        </div>
        <div className="bg-white p-5 order-first md:order-last">
            <Storage/>
        </div>
        
    </div>
  )
}

export default Dashboard