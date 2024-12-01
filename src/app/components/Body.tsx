'use client'
import Image from 'next/image'
import React from 'react'
import section1 from '../../../public/assets/Image.png'


interface BodyProps {
    Id: string;
}
const Body: React.FC<BodyProps> = ({ Id }) => {
    return (
        <div id={Id} className='w-4/5 max-md:w-full md:w-[90%] flex flex-col justify-center mx-auto'>
            <div className="flex flex-col md:flex-row items-center justify-between py-10 max-md:pt-10 max-md:pb-0 md:py-20 bg-background ">
                <div className="w-full md:w-1/2 px-4 md:px-0 max-sm:text-center md:text-left max-xl:space-y-6 xl:space-y-6 2xl:space-y-8">
                    <h2 className="text-3xl max-md:text-[42px] md:text-[36px] lg:text-[60px] xl:text-[60px] 2xl:text-[92px] text-[#CFAC62] text-primary font-normal Arimo">
                        Our Vision
                    </h2>
                    <p className="mt-4 text-base max-md:text-normal font-normal md:text-xl xl:text-[21px] 2xl:text-[28px] max-sm:text-center text-justify text-[#3F3F3F] Inter">
                        “To become the go-to platform for accessible legal information and resources, empowering individuals and businesses to make informed decisions without the need for direct consultation.”
                    </p>
                </div>
                <div className="w-full md:w-[45%] mt-8 md:mt-0 px-4 max-md:px-0 md:px-0">
                    <Image
                        alt="Our Vision Image"
                        src={section1}
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Body
