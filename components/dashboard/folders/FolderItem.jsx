import Image from 'next/image'
import React from 'react'

function FolderItem({folder}) {
    const FolderItems = [
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
    <div>
        <Image 
            src="/foldericon.png"
            width={40}
            height={40}
            alt='Folder.png'
        />
        <h2 className='line-clamp-2'>
            {folder.name}
        </h2>

    </div>
  )
}

export default FolderItem