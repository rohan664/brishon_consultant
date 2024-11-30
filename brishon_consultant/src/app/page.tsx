'use client'
import {motion} from "motion/react"
import Image from "next/image";
import ThreeCards from "@/src/app/components/cards"
import Container from "@/public/assets/containers.png"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  if (inView && !isPlaying) {
    setIsPlaying(true);
  }
  return (
    <>
      <section className="w-full h-screen relative " ref={ref}>
        <div className="bg-blue-100 w-full h-screen absolute bg-opacity-20 flex flex-col justify-center items-center z-10">
          <p className="text-white lg:text-3xl text-2xl font-bold text-center">Empowering Global Trade with</p>
          <p className="text-primarydark lg:text-5xl text-2xl font-bold italic text-center">Trusted Certifications.</p>
        </div>
        {isPlaying && <video className="absolute top-0 left-0 w-full h-screen object-cover" preload='metadata' playsInline autoPlay muted loop>
          <source src="/assets/background_new.mp4" type="video/mp4" />
        </video>}
      </section>
      <section className="h-screen w-full">
        <div className="flex items-center justify-center h-screen w-full">
          <ThreeCards/>
        </div>
      </section>
      <section className="h-screen w-full bg-slate-300">
        <motion.div 
          initial={{opacity:0}}
          whileInView={{ opacity:1, transition:{ duration:0.5, delay:1, ease:"easeIn" } }}
          className="text-primary p-[1rem] lg:p-[5rem]">
          <p className="lg:text-large text-primarylight after:content-[''] after:flex after:w-10 after:h-[2px] after:bg-orange-500 after:mt-2">Services</p>  
          <h1 className="font-bold lg:text-3xl text-large">We provide.</h1>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row px-[2rem] lg:px-[5rem] lg:items-start md:items-center justify-center gap-2 lg:gap-8"
          initial={{opacity:0}}
          whileInView={{ opacity:1, transition:{ duration:1, delay:1, ease:"easeIn" } }}
        >
          <Image
            src={Container}
            alt="containers"
            width={500}
            height={500}
            className="rounded-md"
          />
          <div className="flex flex-col lg:gap-8 gap-2">
            <p className="font-bold text-large lg:text-start text-center lg:text-2xl">MTO Certificate</p>
            <p className="text-sm text-center lg:text-justify lg:text-base">
              We offer comprehensive support for obtaining <span className="text-primary font-semibold">Marine Transport Operator certificates</span>, 
              ensuring your export business meets international standards. 
              Our streamlined process, expert guidance, and quick turnaround times make 
              certification hassle-free, empowering you to focus on growing your global 
              trade while staying compliant with regulations.
            </p>
          </div> 
        </motion.div>
      </section>
      <section className="w-full h-screen flex md:flex-row flex-col items-center justify-center lg:px-[5rem] px-[2rem]">
        <div className="bg-[#274c77] flex p-2 md:p-8 flex-col md:gap-8 gap-4">
            <div className="flex flex-col md:gap-8"> 
              <div>
                <p className="lg:text-3xl md:text-xl text-[#e7ecef] font-bold ">Who we are</p>
                <p className="after:content-[''] after:flex after:w-20 after:h-[2px] md:after:h-[5px] after:bg-orange-500 after:mt-2"></p>
              </div>
              <p className="text-justify text-[#e7ecef] text-sm lg:text-base">Our agency is trusted by hundreds of exporters worldwide, ensuring reliability and credibility in the certification process. As an accredited certification provider, we adhere to international standards, offering legally recognized services. With a focus on comprehensive and fast processing, we streamline documentation, saving time and helping businesses achieve seamless global trade compliance.</p>
            </div>
            <button className="border-2 border-white text-[#e7ecef] w-[10rem] hover:scale-95 hover:bg-white hover:text-primarydark text-sm md:p-2" onClick={()=>{router.push("/contact")}}>Contact Us</button> 
        </div>

          <div className="bg-[#e7ecef] flex flex-col md:p-8 p-2 md:gap-8 gap-4">
            <div className="flex flex-col md:gap-8"> 
              <div>
                <p className="lg:text-3xl md:text-xl text-[#274c77] font-bold ">Our Team</p>
                <p className="after:content-[''] after:flex after:w-20 after:h-[2px] md:after:h-[5px] after:bg-orange-500 after:mt-2"></p>
              </div>
              <p className="text-justify text-[#274c77] text-sm lg:text-base">Our team comprises experienced professionals dedicated to delivering exceptional service. With expertise in export certification, we ensure accuracy, compliance, and efficiency. Committed to excellence, we collaborate closely to address client needs, streamline processes, and provide tailored solutions, empowering businesses to succeed in the global marketplace with confidence and trust.</p>
            </div>
            <button className="border-2 border-primarydark text-[#274c77] w-[10rem] hover:scale-95 text-sm md:p-2 hover:bg-primarydark hover:text-white" onClick={()=>{router.push("/contact")}}>Contact Us</button> 
          </div>
      </section>
    </>
  );
}
