import { UserButton } from '@clerk/nextjs'
import React from 'react';
import StorageInfo from './StorageInfo';

function Storage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Storage</h1>
        <UserButton afterSignOutUrl="/"/>
      </div>

      <div>
        <StorageInfo/>
      </div>
    </div>
  )
}

export default Storage