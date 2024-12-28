'use client'
import Image from "next/image"
import contact from "@/app/assets/contact.png"
import React, { FormEvent,useRef} from "react"
import { useForm, ValidationError } from '@formspree/react';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Contact() {

    const [state, handleSubmit] = useForm("xzzbldnk");
    const formRef = useRef<HTMLFormElement>(null);
    if (state.succeeded) {

    }

    const showSuccessMessage = (e:FormEvent) => {
        e.preventDefault()
        toast.success("Email is sent successfully!")
        handleSubmit
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            formRef.current.reset();
        }
    }

    return(
    <>
        <ToastContainer className="rounded-md"/>
       <section className="w-full h-screen flex gap-2 md:gap-0 md:flex-row flex-col justify-center items-center">
            <div className="bg-gray-200 w-full md:flex-1 text-center">
                <p className="2xl:text-5xl lg:text-3xl text-xl font-bold md:p-10">We are always <br></br>available.Just reach<br></br> out.</p>
            </div>
            <div>
                <Image
                    src={contact}
                    alt="contact"
                    width={800}
                />
            </div>
       </section>
       <section className="flex items-center justify-center p-8 bg-slate-200">
            <div className="bg-blue-900 bg-opacity-50 lg:py-16 lg:px-32 p-4">
                <div className="flex gap-4 flex-col">
                    <div className=" flex flex-col items-start">
                        <p className="font-bold text-primarydark cursor-pointer text-xl">GENERAL INQUIRY</p>
                        <p className="after:content-[''] after:flex after:w-20 after:h-1 md:after:h-[5px] after:bg-orange-500 after:mt-2"></p>
                    </div>
                    <form ref={formRef} onSubmit={(e)=>{showSuccessMessage(e)}} className="flex gap-4 flex-col">
                        <input  placeholder="Enter your email" id="email" type="email" name="email" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white" required/>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        <div className="flex gap-8 md:gap-2 md:flex-row flex-col">
                            <input placeholder="Enter your name" id="name" name="name" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white" required/>
                            <input placeholder="Enter your phone" id="phone" name="phone" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white" required/>
                        </div>
                        <textarea id="message" name="message" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white" required/>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                        <button type="submit" disabled={state.submitting} className="text-base outline-none border-2 rounded-md p-2 border-white bg-primarydark w-full text-white"> Submit </button>
                    </form> 
                </div>
            </div>
       </section>
    </>
    )
}

export default Contact