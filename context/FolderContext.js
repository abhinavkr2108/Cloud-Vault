"use client"
import { useUser } from "@clerk/nextjs";
import React,{useState, useEffect, createContext} from "react";

export const FolderContext = createContext();
export const FolderContextProvider = ({children}) => {
    const [folderList, setFolderList] = useState([]);
    const [user, setUser] = useState();

    const [parentFolderId, setParentFolderId] = useState(0);

    useEffect(() => {
        let folders = localStorage.getItem("folders");
        if (folders!=undefined && folders!=="undefined") {
            setFolderList(JSON.parse(folders));
        }

    },[]);

    useEffect(() => {
        if (folderList.length>0){
            localStorage.setItem("folders", JSON.stringify(folderList));
        } 
       
    },[folderList]);

    useEffect(() => {
        if(user!=undefined && user!=="undefined" && user!=="") {
            localStorage.setItem("user",JSON.stringify(user));
        }
    },[user])

    useEffect(() => {
        let fetchedUser = localStorage.getItem("user");
        if (fetchedUser!=undefined && fetchedUser!=="undefined") {
            setUser(JSON.parse(fetchedUser));
        }
    },[])


    return (
        <FolderContext.Provider value={{folderList, setFolderList, parentFolderId, setParentFolderId,user,setUser}}>
            {children}
        </FolderContext.Provider>
    );
}
