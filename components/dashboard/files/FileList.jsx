import React from 'react';
import FileItems from "./FileItems"

function FileList() {
   const fileList=[
        {
            id:1,
            name:'UX Principal.docx',
            type:'docx',
            size:'6272 kB',
            modifiedAt:'Nov 23,2020'
        },
        {
            id:2,
            name:'Data Structure.pdf',
            type:'pdf',
            size:'672 kB',
            modifiedAt:'Nov 23,2022'
        },
        {
            id:3,
            name:'smaple Image.png',
            type:'image',
            size:'400 kB',
            modifiedAt:'Nov 23,2023'
        },
        {
            id:4,
            name:'React Principal.docx',
            type:'docx',
            size:'6272 kB',
            modifiedAt:'Nov 23,2020'
        },
        
    ]
  return (
    <div className="bg-white px-5 py-5 mt-5 rounded-md">
        <p className="font-bold">Recent Files</p>
        <div className="grid grid-cols-1 md:grid-cols-2 font-semibold text-gray-500 border-b border-gray-300 mt-3 pb-2">
            Name
            <div className="grid grid-cols-3">
                <h2>Modified</h2>
                <h2>Size</h2>
                <h2></h2>
            </div>
        </div>
        {
          fileList.map((file,index)=>(
            <div>
              <FileItems file={file}/>
            </div>
          ))
        }
    </div>
  )
}

export default FileList