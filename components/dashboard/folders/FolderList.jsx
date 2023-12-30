
import React from 'react'
import FolderItem from './FolderItem'
import { useRouter } from 'next/navigation'

function FolderList({folderList}) {

    const navigateToDetails = (folder) => {
        window.location.href = `/dashboard/folders/${folder.id}`;
    }
  return (
    <div className="bg-white px-5 py-2 mt-5 rounded-md">
        <div className="flex justify-between items-center mt-3">
            <p className="font-bold">Recent Folders</p>
            <span className="float-right text-blue-500 underline cursor-pointer">View All</span>
        </div>
    
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {
                folderList.map((folder,index) => (
                    <div 
                        key={index} 
                        className="cursor-pointer"
                        onClick={()=>navigateToDetails(folder,index)}
                    >
                        <FolderItem folder={folder}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FolderList