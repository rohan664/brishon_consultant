import { Handshake,ShieldCheck,GlobeLock  } from 'lucide-react';
import Image from 'next/image';
import teamMember from '@/app/assets/team_discussion.png'

function About(){
    return(
        <>
            <section className="flex items-end w-full h-screen">
                <Image
                    src={teamMember}
                    alt='team member'
                    className='relative'
                    layout="fill"
                    priority
                />
                <div className="w-full h-full absolute bg-slate-500 bg-opacity-40"></div>
                <div className="p-8 z-10">
                    <p className="lg:text-4xl text-large font-bold text-[#fefae0]">On the team.</p>
                    <p className="lg:text-4xl text-large font-bold text-[#fefae0]">For the team.</p>
                </div>
            </section>
            <section>
                <div className="lg:p-24 p-4 text-justify flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <p className="text-base">
                            <span className="text-xl text-primarydark font-bold p-0">Our</span> agency is trusted by hundreds of exporters , ensuring reliability
                            and credibility in the certification process. As an accredited certification 
                            provider, we adhere to international standards, offering legally recognized services. 
                            With a focus on comprehensive and fast processing, we streamline documentation, 
                            saving time and helping businesses achieve seamless global trade compliance.
                        </p>
                        <div className="flex md:flex-row flex-col gap-8">
                            <div className="flex-1 flex flex-col gap-4">
                                <div>
                                    <p className="text-2xl font-extrabold text-[#fb8500]">Our Vision</p>
                                    <p className="after:content-[''] after:flex after:w-20 after:h-[1px] md:after:h-[3px] after:bg-[#023047] after:mt-2"></p>
                                </div>
                                <p className="italic font-bold text-justify">To empower exporters worldwide with trusted, efficient certification services that enable seamless pan India</p>
                            </div>
                            <div className="flex-1 flex gap-4 flex-col">
                                <div>
                                    <p className="text-2xl font-extrabold text-[#fb8500]">Our Mission</p>
                                    <p className="after:content-[''] after:flex after:w-20 after:h-[1px] md:after:h-[3px] after:bg-[#023047] after:mt-2"></p>
                                </div>
                                <p className="italic font-bold text-justify">To deliver fast, comprehensive certification solutions while maintaining integrity and compliance with international standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-12 flex gap-8 flex-col bg-slate-200'>
                <div>
                    <p className="text-xl font-medium">why</p>
                    <p className="text-2xl font-bold text-primarydark">Trusted by exporters</p>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full'>
                        <div className='flex gap-4 items-center flex-col text-center'>
                            <Handshake color='#03045e' size={50}/>
                            <p className='font-medium'>Trusted by exporters worldwide.</p>
                        </div>
                        <div className='flex items-center gap-4 flex-col text-center'>
                            <ShieldCheck color='#03045e' size={50}/>
                            <p className='font-medium'>Accredited and compliant certifications.</p>
                        </div>
                        <div className='flex items-center gap-4 flex-col text-center'>
                            <GlobeLock color='#03045e' size={50}/>
                            <p className='font-medium'>Comprehensive and fast processing.</p>
                        </div>
                </div>
            </section>
        </>
    )
}

export default About