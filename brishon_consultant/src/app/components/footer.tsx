import Image from "next/image";
import phone from "@/app/assets/call.png"
import email from "@/app/assets/send-mail.png"
import address from "@/app/assets/email.png"

function Footer(){
    return (
        <div className="flex items-center justify-center gap-4 flex-col bg-[url('@/app/assets/send-mail.png')] bg-cover relative p-8">
            <div className="absolute bg-black bg-opacity-40 w-full h-full"></div>
            <div className="flex flex-col z-10">
            <p className="font-extrabold text-white text-2xl">Brishon Consultant.</p>
            </div> 
            <div className="flex items-center flex-col gap-8 z-10">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex items-center gap-4">
                        <Image src={phone} alt="phone" height={40}/>
                        <p className="text-sm md:text-base text-white">+91 81691 98184</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={email} alt="phone" height={40}/>
                        <p className="text-sm md:text-base text-white">brishonshipcons09@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image src={address} alt="phone" height={40}/>
                    <p className="text-sm md:text-base text-[#f7ede2]">Room No. 403, Shiv Samarth, Road No. 27, Wagale Estate, Thane(West),Maharashtra-400604</p>
                </div>
            </div>
      </div>
    )
}

export default Footer