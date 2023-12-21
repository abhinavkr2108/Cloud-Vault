import React from 'react'
import FolderItem from './FolderItem'

function FolderList() {
    const folderLists = [
        {
            id:1,
            name: "Folder 1",
        },
        {
            id:2,
            name: "Folder 2",
        },
        {
            id:3,
            name: "Folder 3",
        },
        {
            id:4,
            name: "Folder 4",
        },
    ]
  return (
    <div className="bg-white px-5 py-2 mt-5 rounded-md">
        <div className="flex justify-between items-center mt-3">
            <p className="font-bold">Recent Folders</p>
            <span className="float-right text-blue-500 underline cursor-pointer">View All</span>
        </div>
    
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {
                folderLists.map((folder,item) => (
                    <div className="cursor-pointer"><FolderItem folder={folder}/></div>
                ))
            }
        </div>
    </div>
  )
}

export default FolderList