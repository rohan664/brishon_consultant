import Image from "next/image"
import contact from "@/app/assets/contact.png"

function Contact() {
    return(
    <>
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
       <section className="flex items-center justify-center p-8">
            <div className="bg-blue-900 bg-opacity-50 lg:py-16 lg:px-32 p-4">
                <div className="flex gap-4 flex-col">
                    <div className=" flex flex-col items-start">
                        <p className="font-bold text-primarydark cursor-pointer text-xl">GENERAL INQUIRY</p>
                        <p className="after:content-[''] after:flex after:w-20 after:h-1 md:after:h-[5px] after:bg-orange-500 after:mt-2"></p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-2xl text-white ">If You Want to Get In Touch</p>
                        <div className="">
                            <input placeholder="Enter your name" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white"/>
                        </div>
                        <div className="flex gap-8 md:gap-2 md:flex-row flex-col">
                            <input placeholder="Enter your name" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white"/>
                            <input placeholder="Enter your name" className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white"/>
                        </div>
                        <div className="flex gap-2">
                            <input placeholder="Enter your query" type='text' className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full placeholder:placeholder-shown:text-white"/>
                        </div>
                        <div className="flex gap-2">
                            <button className="text-base outline-none border-2 rounded-md p-2 border-white bg-transparent w-full hover:bg-primarydark text-white">Send</button>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    </>
    )
}

export default Contact