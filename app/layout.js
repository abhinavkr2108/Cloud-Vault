import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import PrelineScript from "./_components/PrelineScript";
import { FolderContextProvider } from "../context/FolderContext";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cloud Vault',
  description: 'An online file storage service',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignUpUrl='/dashboard'>
      <html lang="en">
        <body className={inter.className}>
          <FolderContextProvider>
            {children}
          </FolderContextProvider>
        </body>
        <PrelineScript />
      </html>
    </ClerkProvider>
  )
}
