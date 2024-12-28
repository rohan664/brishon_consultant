'use client'
import { CircleChevronDown,CircleCheck,X  } from 'lucide-react'
import React, { FormEvent, useState ,useRef} from "react"
import { useForm } from '@formspree/react';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Documnet(){
    const[isPopup,setIsPopup] = useState<boolean>(false)
    const [state, handleSubmit] = useForm("xkgnljoe");
    const formRef = useRef<HTMLFormElement>(null);

    function handleClick() {
        const Section = document.getElementById("#checklist");
        if (Section) {
          Section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function downloadPdf() {
        setIsPopup(!isPopup)
        fetch("CHECKLIST.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);
                const alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Checklist.pdf";
                alink.click();
            });
        });
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            formRef.current.reset();
        }
        toast.success("Email is sent successfully!")
    }

    return(
        <> 
            <ToastContainer/>
            <section className="w-full h-screen lg:p-24 flex justify-center flex-col items-center gap-20">
                <div className='flex flex-col'>
                    <p className="lg:text-3xl text-large text-primarydark font-bold text-center">Your MTO Certification Checklist</p>
                    <p className="lg:text-2xl text-large text-center">Streamlined, Simple, and Ready for Success!</p>
                </div>
                <div onClick={()=>{handleClick()}}>
                    <CircleChevronDown className='animate-bounce cursor-pointer' size={50} color='#fb8500'/>
                </div>
            </section>
            <section className='w-full h-screen bg-slate-200 relative' id='#checklist'>
                <div className='lg:pt-24 lg:pl-24 text-center p-4'>
                    <p className='text-large font-bold'>Your Go-To Document Checklist!</p>
                </div>
                <div className='flex w-full h-screen gap-4 flex-col items-center'>
                    <div className='flex flex-col gap-4 p-10'>   
                        <div className='flex gap-4 items-center'>
                            <div>
                                <CircleCheck size={30} color='#38b000'/>
                            </div>
                            <p>Form I (Draft will be provided)</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <CircleCheck size={30} color='#38b000'/>
                            </div>
                            <p>Two different country agency agreements with agent sign and stamp</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <CircleCheck size={30} color='#38b000'/>
                            </div>
                            <p>CA certificate on CAs letterhead (with a turnover for last three financial year)</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <CircleCheck size={30} color='#38b000'/>
                            </div>
                            <p>ITR acknowledgement for last three financial years.</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <CircleCheck size={30} color='#38b000'/>
                            </div>
                            <p>Agency confirmation letter's <span className='font-bold text-base cursor-pointer' onClick={()=>{setIsPopup(!isPopup)}}>... Read more</span></p>
                        </div>
                    </div>
                </div> 
                {
                    isPopup && 
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20">
                        <div className="bg-white p-8 rounded-lg flex flex-col gap-8">
                            <div className='flex justify-end w-full cursor-pointer' onClick={()=>{setIsPopup(!isPopup)}}>
                                <X/>
                            </div>
                            <h1 className='font-bold text-large text-primarydark'>GET IN TOUCH WITH US!</h1>
                            <form ref={formRef} onSubmit={(e)=>{handleSubmit(e),downloadPdf()}} className="flex gap-4 flex-col">
                                <input  placeholder="Enter your email" id="email" type="email" name="email" className="text-base outline-none border-2 rounded-md p-2 border-primarydark bg-transparent w-full placeholder:placeholder-shown:text-gray-400" required/>
                                <div className="flex gap-8 md:gap-2 md:flex-row flex-col">
                                    <input placeholder="Enter your name" id="name" name="name" className="text-base outline-none border-2 rounded-md p-2 border-primarydark bg-transparent w-full placeholder:placeholder-shown:text-gray-400" required/>
                                    <input placeholder="Enter your phone" id="phone" name="phone" className="text-base outline-none border-2 rounded-md p-2 border-primarydark bg-transparent w-full placeholder:placeholder-shown:text-gray-400" required/>
                                </div>
                                <button type="submit" disabled={state.submitting} className="text-base outline-none border-2 rounded-md p-2 border-white bg-primarydark w-full text-white"> Submit </button>
                            </form>
                        </div>
                    </div> 
                }
            </section>
        </>
    )
}

export default Documnet