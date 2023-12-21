import FileList from '../../../components/dashboard/files/FileList';
import FolderList from '../../../components/dashboard/folders/FolderList';
import Searchbar from '../../../components/dashboard/search/Searchbar';
import Storage from '../../../components/storage/Storage';
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="col-span-2 p-5">
            <Searchbar/>
            <FolderList/>
            <FileList/>
        </div>
        <div className="bg-white p-5">
            <Storage/>
        </div>
    </div>
  )
}

export default Dashboard