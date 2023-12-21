"use client"
import React, { useState } from 'react'
import logo from "../../../public/logo.png"
import Image from 'next/image'
import { IoMdAddCircleOutline, IoMdHome, IoMdTrash, IoMdBookmark } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { UserButton } from '@clerk/nextjs';
import AddFolderModal from "../../../components/dashboard/folders/AddFolderModal"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'

function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const showModal = () => {

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const menuList = [
        {
            id:1,
            name:"Dashboard",
            logo:<IoMdHome/>,
        },
        {
            id:2,
            name:"My Files",
            logo:<FaFileAlt/>,
        },
        {
            id:3,
            name:"Saved",
            logo:<IoMdBookmark/>,
        },
        {
            id:4,
            name:"Trash",
            logo:<IoMdTrash/>,
        },
    ]

  return (
    <div className="bg-white z-10 h-full w-56 inset-y-0 shadow-blue-50 shadow-md sticky">
        <Image src={logo} 
            alt="logo" 
            className="w-72 h-[90px] object-cover px-3"
        />
        <div className="flex flex-col gap-3 mx-3 mt-4">
            <button className="flex justify-center items-center gap-2 px-3 py-2 w-full bg-blue-500 text-white font-semibold mx-auto rounded-md">
                Add New File 
                <IoMdAddCircleOutline/>
            </button>
            <button 
                className="flex justify-center items-center gap-2 px-3 py-2 w-full bg-yellow-500 text-black font-semibold mx-auto rounded-md"
                onClick={showModal}
            >
                Add New Folder
                <IoMdAddCircleOutline/>
            </button>
        </div>

        <div className="mt-5 w-full px-3">
            {
                menuList.map((item,index)=>(    
                    <div 
                        className={`flex items-center gap-2 py-2 text-lg text-gray-500 hover:bg-blue-100 rounded-md cursor-pointer
                        ${activeIndex===index?"bg-blue-100 text-white":null}`}
                        onClick={()=> setActiveIndex(index)}
                        key={item.id}
                    >
                        {item.logo}
                        {item.name}
                    </div>
                ))
            }
        </div>

        <div className="mt-64 ml-5">
            <UserButton afterSignOutUrl="/"/>
        </div>
     
    </div>
  )
}

export default Sidebar