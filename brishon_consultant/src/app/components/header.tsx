'use client'
import { useRouter } from "next/navigation"
import { AlignRight  } from 'lucide-react';
import { useState } from "react";

function Header(){
    const router = useRouter()
    const[isSidebar,setIsSidebar] = useState<boolean>(false)

    function handleNavigation(url:string){
        router.push(url)
    }

    function handleMobileNavigation(url:string){
      router.push(url)
      setIsSidebar(!isSidebar)
    }

    return(
        <div className="w-full flex item-center justify-between p-4 rounded-b-[3rem] bg-white z-20 fixed bg shadow-lg shadow-grey-500/50">
            <p className="text-primary font-bold text-large px-4 cursor-pointer">Brishon Consultant.</p>
            <div className="px-4 cursor-pointer flex flex-row gap-10">
              <div className="hidden flex-row gap-10 text-black font-semibold items-center cursor-pointer md:flex">
                <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleNavigation("/")}}>Home</p>
                <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleNavigation("/document")}}>Document</p>
                <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleNavigation("/about-us")}}>About Us</p>
                <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleNavigation("/contact")}}>Contact Us</p>
              </div>
              <div className="flex items-center md:hidden relative">
                <AlignRight  className="text-primarydark" size={30} onClick={()=>{setIsSidebar(!isSidebar)}}/>
              </div>
              {
                isSidebar &&
                <>
                  <div className="w-full h-screen bg-slate-500 absolute top-0 left-0 bg-opacity-25" onClick={()=>{setIsSidebar(!isSidebar)}}></div>
                  <div className="bg-white rounded-lg absolute top-12 right-10">
                    <div className="flex flex-col gap-4 text-black font-semibold items-start cursor-pointer p-4">
                        <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleMobileNavigation("/")}}>Home</p>
                        <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleMobileNavigation("/document")}}>Document</p>
                        <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleMobileNavigation("/about-us")}}>About Us</p>
                        <p className="text-base hover:text-primarylight ease-in-out duration-600" onClick={()=>{handleMobileNavigation("/contact")}}>Contact Us</p>
                      </div>
                  </div>
                </>
              }
            </div>
        </div>
    )
}

export default Header
