'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Body from './Body'
import lastImage from "../../../public/assets/Image1.png"
import Image from 'next/image'
import LangModal from './LangModal'

const HomePage = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleLinkClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const sections = ['home', 'our-vision', 'core-values'];
        const scrollPosition = window.scrollY;

        let currentSection = 'home';
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section && scrollPosition >= section.offsetTop - 100) {
                currentSection = id;
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <LangModal />
            <div className=''>
                <Navbar activeSection={activeSection} onLinkClick={handleLinkClick} />
                <Header Id={"home"} />
                <Body Id={"our-vision"} />
            </div>
            <section id="core-values" className="flex flex-col-reverse md:flex-row w-full bg-[#CFAC62] max-sm:py-0 ">
                <div className="w-full md:w-1/2 flex  justify-center md:px-0">
                    <Image
                        alt="Our Core Values Image"
                        src={lastImage}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 px-4 md:px-8 flex items-center flex-col justify-center text-white py-8 md:mt-0 gap-8 max-2xl:gap-4 text-center md:text-left">
                    <div className='w-full '>
                        <h2 className="text-3xl max-md:text-[42px] lg:text-[46px] xl:text-[48px] 2xl:text-[92px] Arimo font-normal text-primary ">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="text-base sm:text-lg lg:text-xl space-y-5 w-full mt-3">
                        <div className='space-y-2'>
                            <p className="Arimo max-md:text-[24px] md:text-[26px] 2xl:text-[32px] font-normal">1. Accessibility</p>
                            <p className="Inter max-md:text-[14px] md:text-[14px] md:text-base 2xl:text-[20px] font-normal">
                                Provide easy access to essential legal information and resources for everyone.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <p className="Arimo max-md:text-[24px] md:text-[26px] 2xl:text-[32px] font-normal">2. Clarity</p>
                            <p className="Inter max-md:text-[14px] md:text-[14px] md:text-base 2xl:text-[20px] font-normal">
                                Simplify complex legal concepts and language to enhance understanding.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <p className="Arimo max-md:text-[24px] md:text-[26px] 2xl:text-[32px] font-normal">3. Empowerment</p>
                            <p className="Inter max-md:text-[14px] md:text-[14px] md:text-base 2xl:text-[20px] font-normal">
                                Equip users with pros and cons, and utilize resources that enable them to navigate legal matters confidently.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <p className="Arimo max-md:text-[24px] md:text-[26px] 2xl:text-[32px] font-normal">4. Integrity</p>
                            <p className="Inter max-md:text-[14px] md:text-[14px] md:text-base 2xl:text-[20px] font-normal">
                                Ensure all information is accurate, up-to-date, and sourced from reputable legal professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-2'>


                <div className='w-full flex justify-center items-center gap-3 pt-2 border-t-[1px] border-[#3F3F3F] border-solid'>
                    <div className='text-[#3F3F3F] max-md:text-[16px] md:text-[18px] Inter border-r-[1px] pe-4 border-[#3F3F3F] border-solid'>Home</div>
                    <div className='text-[#3F3F3F] max-md:text-[16px] md:text-[18px] Inter border-r-[1px] pe-4 border-[#3F3F3F] border-solid'>Our Vision</div>
                    <div className='text-[#3F3F3F] max-md:text-[16px] md:text-[18px] Inter border-r-[1px] pe-4 border-[#3F3F3F] border-solid'>Core Values</div>
                    <div className='text-[#3F3F3F] max-md:text-[16px] md:text-[18px] Inter'>Form</div>
                </div>
                <div className='flex justify-center items-center  text-[#3F3F3F] max-md:text-[16px] md:text-[18px] Inter'>
                    ©Copyright 2024. All Rights Reserved.
                </div>
            </div>

        </>
    )
}

export default HomePage
