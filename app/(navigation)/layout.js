import Sidebar from '../../components/dashboard/navigation/Sidebar'
import React from 'react'

function NavigationLayout({children}) {
  return (
    <div className="h-screen w-full flex gap-2 bg-gradient-to-r from-purple-100 to-blue-100">
        <Sidebar/>
        <div className="flex flex-grow">
            {children} 
        </div>
   
    </div>
  )
}

export default NavigationLayout