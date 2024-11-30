'use client'
import { CircleChevronDown,CircleCheck  } from 'lucide-react';
import { useState } from 'react';

function Documnet(){
    const[isPopup,setIsPopup] = useState<boolean>(false)
    return(
        <>
            <section className="w-full h-screen lg:p-24 flex justify-center flex-col items-center gap-20">
                <div className='flex flex-col'>
                    <p className="lg:text-3xl text-large text-primarydark font-bold text-center">Your MTO Certification Checklist</p>
                    <p className="lg:text-2xl text-large text-center">Streamlined, Simple, and Ready for Success!</p>
                </div>
                <CircleChevronDown className='animate-bounce cursor-pointer' size={50} color='#fb8500'/>
            </section>
            <section className='w-full h-screen bg-slate-200 relative'>
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
                            <p>Undertaking letter (Draft will be provided)</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <CircleCheck size={30} color='#38b000'/>
                            </div>
                            <p>Agency confirmation letter's <span className='font-bold text-base cursor-pointer' onClick={()=>{setIsPopup(!isPopup)}}>... Read more</span></p>
                        </div>
                    </div>
                </div> 
                {isPopup && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <div className="bg-white lg:p-20 p-8 rounded-lg flex flex-col gap-8">
                        <h1 className='font-bold text-large text-primarydark'>GET IN TOUCH WITH US!</h1>
                        <div className='flex flex-col gap-4 items-center'>
                            <div className='w-full'>
                                <input placeholder='Please enter your name' className='outline-none border-2 border-blue-900 p-2 rounded-md w-full text-primarylight placeholder:text-primarylight'/>
                            </div>
                            <div className='flex gap-2 flex-wrap'>
                                <input placeholder='Please enter phone number' className='outline-none border-2 border-blue-900 p-2 rounded-md w-full text-primarylight md:flex-1 placeholder:text-primarylight'/>
                                <input placeholder='Please enter email' type='email' className='outline-none border-2 border-blue-900 p-2 rounded-md w-full text-primarylight md:flex-1 placeholder:text-primarylight'/>
                            </div>
                            <div className='pt-3'>
                                <button className='bg-primarydark py-2 px-10 rounded-md text-white' onClick={()=>{setIsPopup(!isPopup)}}>Send</button>
                            </div>
                        </div>
                    </div>
                </div> }
            </section>
        </>
    )
}

export default Documnet