"use client"
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar() {
  return (
    <div className="bg-white items-center px-5 py-2 rounded-md flex gap-2 text-gray-500">
        <FaSearch/>
        <input
            type='text' 
            placeholder="Search" 
            className="w-full outline-none"
            onKeyDown={(e)=>e.key=='Enter' && console.log(e.target.value)}
        />
    </div>
  )
}

export default Searchbar