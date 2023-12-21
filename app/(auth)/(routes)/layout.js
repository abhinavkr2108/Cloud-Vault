import React from 'react'

function AuthLayout({children}) {
  return (
    <div className="flex h-screen w-full justify-center items-center">
        {children}
    </div>
  )
}

export default AuthLayout