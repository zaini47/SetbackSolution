'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../public/assets/1 1.png"

const Navbar = ({ activeSection, onLinkClick }: any) => {
    const [language, setLanguage] = useState('en');

    // Function to handle language change
    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
    };

    const links = [
        { label: 'Home', id: 'home' },
        { label: 'Our Vision', id: 'our-vision' },
        { label: 'Core Values', id: 'core-values' },
    ];

    return (
        <div className='w-4/5 max-md:w-full md:w-[90%] flex flex-col justify-center mx-auto'>
            <nav>
                <div className='flex justify-between max-md:justify-center items-center  py-4'>
                    {/* Logo */}
                    <div>
                        <Image src={logo} alt='Logo' width={1000} height={1000} className='w-16 h-16 rounded-full' />
                    </div>

                    {/* Navigation Links and Language Switcher */}
                    <div className='border-[1px] border-solid border-[#3f3f3f46] max-md:hidden rounded-full px-8 py-3 flex items-center gap-6'>
                        {/* Navigation Links */}
                        <div className="flex gap-8">
                            {links.map((link) => (
                                <p
                                    key={link.id}
                                    className={`Inter font-normal text-lg cursor-pointer ${activeSection === link.id ? 'text-[#CFAC62]' : 'text-[#3f3f3f]'
                                        }`}
                                    onClick={() => onLinkClick(link.id)}
                                >
                                    {link.label}
                                </p>
                            ))}
                        </div>
                        {/* Language Switcher */}
                        <div className='flex items-center gap-2 ml-4 bg-[#e0e0e0] rounded-full p-2' >
                            <button
                                onClick={() => handleLanguageChange('en')}
                                className={`flex items-center gap-1 border rounded-full px-2 py-1 ${language === 'en' ? 'bg-[#CFAC62] text-white' : 'bg-[#e0e0e0] text-[#3f3f3f]'
                                    }`}
                            >
                                <span role="img" aria-label="English" className='text-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M13.0001 2.08329V2.04913C12.2109 1.80121 11.3713 1.66663 10.5001 1.66663C5.89758 1.66663 2.16675 5.39746 2.16675 9.99996C2.16675 10.2812 2.18175 10.5591 2.20883 10.8333H13.0001V2.08329Z" fill="#3F51B5" />
                                        <path d="M13 4.58337H16.825C16.4262 4.11837 15.9758 3.70129 15.4846 3.33337H13V4.58337Z" fill="#ECEFF1" />
                                        <path d="M18.7912 10.8334H13H2.20874C2.25124 11.2617 2.33499 11.6767 2.43999 12.0834H18.5604C18.665 11.6767 18.7487 11.2617 18.7912 10.8334Z" fill="#ECEFF1" />
                                        <path d="M16.4462 15.8334H4.55371C5.02329 16.3121 5.55288 16.7288 6.12579 17.0834H14.8741C15.447 16.7288 15.9766 16.3121 16.4462 15.8334Z" fill="#ECEFF1" />
                                        <path d="M18.1353 13.3334H2.8645C3.05575 13.7709 3.28325 14.1888 3.54367 14.5834H17.4562C17.7166 14.1888 17.9437 13.7709 18.1353 13.3334Z" fill="#ECEFF1" />
                                        <path d="M13 7.08337H18.2983C18.1354 6.64837 17.9396 6.23046 17.7096 5.83337H13V7.08337Z" fill="#ECEFF1" />
                                        <path d="M13 9.58337H18.8125C18.7913 9.15837 18.7487 8.73921 18.6662 8.33337H13V9.58337Z" fill="#ECEFF1" />
                                        <path d="M13 3.33337H15.485C14.7671 2.79587 13.9637 2.36837 13.0929 2.08337H13V3.33337Z" fill="#F44336" />
                                        <path d="M13 5.83337H17.7096C17.4525 5.38921 17.1571 4.97087 16.8254 4.58337H13V5.83337Z" fill="#F44336" />
                                        <path d="M13 8.33337H18.6658C18.5783 7.90254 18.4492 7.48754 18.2979 7.08337H13V8.33337Z" fill="#F44336" />
                                        <path d="M13 10.8334H18.7912C18.8183 10.5592 18.8333 10.2813 18.8333 10C18.8333 9.85921 18.8192 9.72212 18.8125 9.58337H13V10.8334Z" fill="#F44336" />
                                        <path d="M18.5599 12.0834H2.43994C2.55077 12.5138 2.68952 12.933 2.86494 13.3334H18.1354C18.3104 12.933 18.4491 12.5138 18.5599 12.0834Z" fill="#F44336" />
                                        <path d="M17.4562 14.5834H3.5437C3.83995 15.0325 4.17828 15.4509 4.5537 15.8334H16.4466C16.8216 15.4509 17.16 15.0325 17.4562 14.5834Z" fill="#F44336" />
                                        <path d="M6.12573 17.0834C7.39823 17.8709 8.89323 18.3334 10.4999 18.3334C12.1066 18.3334 13.6016 17.8709 14.8741 17.0834H6.12573Z" fill="#F44336" />
                                        <path d="M4.77075 5.41663L4.9645 5.82829L5.39575 5.89329L5.08325 6.21413L5.15825 6.66663L4.77075 6.45329L4.38325 6.66663L4.45825 6.21413L4.14575 5.89329L4.577 5.82829L4.77075 5.41663Z" fill="white" />
                                        <path d="M6.4375 5.41663L6.63125 5.82829L7.0625 5.89329L6.75 6.21413L6.825 6.66663L6.4375 6.45329L6.05 6.66663L6.125 6.21413L5.8125 5.89329L6.24375 5.82829L6.4375 5.41663Z" fill="white" />
                                        <path d="M3.10405 6.45339L3.49155 6.66672L3.41655 6.21422L3.72905 5.89339L3.2978 5.82839L3.29613 5.82422C3.15863 6.06089 3.03238 6.30464 2.91821 6.55547L3.10405 6.45339Z" fill="white" />
                                        <path d="M8.10425 5.41663L8.298 5.82829L8.72925 5.89329L8.41675 6.21413L8.49175 6.66663L8.10425 6.45329L7.71675 6.66663L7.79175 6.21413L7.47925 5.89329L7.9105 5.82829L8.10425 5.41663Z" fill="white" />
                                        <path d="M9.77075 5.41663L9.9645 5.82829L10.3958 5.89329L10.0833 6.21413L10.1583 6.66663L9.77075 6.45329L9.38325 6.66663L9.45825 6.21413L9.14575 5.89329L9.577 5.82829L9.77075 5.41663Z" fill="white" />
                                        <path d="M11.3333 5.41663L11.527 5.82829L11.9583 5.89329L11.6458 6.21413L11.7208 6.66663L11.3333 6.45329L10.9458 6.66663L11.0208 6.21413L10.7083 5.89329L11.1395 5.82829L11.3333 5.41663Z" fill="white" />
                                        <path d="M4.77075 8.75L4.9645 9.16167L5.39575 9.22667L5.08325 9.5475L5.15825 10L4.77075 9.78667L4.38325 10L4.45825 9.5475L4.14575 9.22667L4.577 9.16167L4.77075 8.75Z" fill="white" />
                                        <path d="M6.4375 8.75L6.63125 9.16167L7.0625 9.22667L6.75 9.5475L6.825 10L6.4375 9.78667L6.05 10L6.125 9.5475L5.8125 9.22667L6.24375 9.16167L6.4375 8.75Z" fill="white" />
                                        <path d="M8.10425 8.75L8.298 9.16167L8.72925 9.22667L8.41675 9.5475L8.49175 10L8.10425 9.78667L7.71675 10L7.79175 9.5475L7.47925 9.22667L7.9105 9.16167L8.10425 8.75Z" fill="white" />
                                        <path d="M3.10425 8.75L3.298 9.16167L3.72925 9.22667L3.41675 9.5475L3.49175 10L3.10425 9.78667L2.71675 10L2.79175 9.5475L2.47925 9.22667L2.9105 9.16167L3.10425 8.75Z" fill="white" />
                                        <path d="M9.77075 8.75L9.9645 9.16167L10.3958 9.22667L10.0833 9.5475L10.1583 10L9.77075 9.78667L9.38325 10L9.45825 9.5475L9.14575 9.22667L9.577 9.16167L9.77075 8.75Z" fill="white" />
                                        <path d="M11.3333 8.75L11.527 9.16167L11.9583 9.22667L11.6458 9.5475L11.7208 10L11.3333 9.78667L10.9458 10L11.0208 9.5475L10.7083 9.22667L11.1395 9.16167L11.3333 8.75Z" fill="white" />
                                        <path d="M5.1875 7.08337L5.38125 7.49504L5.8125 7.56004L5.5 7.88087L5.575 8.33337L5.1875 8.12004L4.8 8.33337L4.875 7.88087L4.5625 7.56004L4.99375 7.49504L5.1875 7.08337Z" fill="white" />
                                        <path d="M6.85425 7.08337L7.048 7.49504L7.47925 7.56004L7.16675 7.88087L7.24175 8.33337L6.85425 8.12004L6.46675 8.33337L6.54175 7.88087L6.22925 7.56004L6.6605 7.49504L6.85425 7.08337Z" fill="white" />
                                        <path d="M3.52075 7.08337L3.7145 7.49504L4.14575 7.56004L3.83325 7.88087L3.90825 8.33337L3.52075 8.12004L3.13325 8.33337L3.20825 7.88087L2.89575 7.56004L3.327 7.49504L3.52075 7.08337Z" fill="white" />
                                        <path d="M8.52075 7.08337L8.7145 7.49504L9.14575 7.56004L8.83325 7.88087L8.90825 8.33337L8.52075 8.12004L8.13325 8.33337L8.20825 7.88087L7.89575 7.56004L8.327 7.49504L8.52075 7.08337Z" fill="white" />
                                        <path d="M10.1875 7.08337L10.3813 7.49504L10.8125 7.56004L10.5 7.88087L10.575 8.33337L10.1875 8.12004L9.8 8.33337L9.875 7.88087L9.5625 7.56004L9.99375 7.49504L10.1875 7.08337Z" fill="white" />
                                        <path d="M11.75 7.08337L11.9438 7.49504L12.375 7.56004L12.0625 7.88087L12.1375 8.33337L11.75 8.12004L11.3625 8.33337L11.4375 7.88087L11.125 7.56004L11.5562 7.49504L11.75 7.08337Z" fill="white" />
                                        <path d="M5.1875 3.75L5.38125 4.16167L5.8125 4.22667L5.5 4.5475L5.575 5L5.1875 4.78667L4.8 5L4.875 4.5475L4.5625 4.22667L4.99375 4.16167L5.1875 3.75Z" fill="white" />
                                        <path d="M6.85425 3.75L7.048 4.16167L7.47925 4.22667L7.16675 4.5475L7.24175 5L6.85425 4.78667L6.46675 5L6.54175 4.5475L6.22925 4.22667L6.6605 4.16167L6.85425 3.75Z" fill="white" />
                                        <path d="M8.52075 3.75L8.7145 4.16167L9.14575 4.22667L8.83325 4.5475L8.90825 5L8.52075 4.78667L8.13325 5L8.20825 4.5475L7.89575 4.22667L8.327 4.16167L8.52075 3.75Z" fill="white" />
                                        <path d="M10.1875 3.75L10.3813 4.16167L10.8125 4.22667L10.5 4.5475L10.575 5L10.1875 4.78667L9.8 5L9.875 4.5475L9.5625 4.22667L9.99375 4.16167L10.1875 3.75Z" fill="white" />
                                        <path d="M11.75 3.75L11.9438 4.16167L12.375 4.22667L12.0625 4.5475L12.1375 5L11.75 4.78667L11.3625 5L11.4375 4.5475L11.125 4.22667L11.5562 4.16167L11.75 3.75Z" fill="white" />
                                        <path d="M6.82505 3.33331L6.75005 2.88081L7.06255 2.55997L6.83297 2.52539C6.58755 2.64581 6.34963 2.77789 6.11838 2.92122L6.05005 3.33331L6.43755 3.11997L6.82505 3.33331Z" fill="white" />
                                        <path d="M8.10425 2.08337L8.298 2.49504L8.72925 2.56004L8.41675 2.88087L8.49175 3.33337L8.10425 3.12004L7.71675 3.33337L7.79175 2.88087L7.47925 2.56004L7.9105 2.49504L8.10425 2.08337Z" fill="white" />
                                        <path d="M9.77075 2.08337L9.9645 2.49504L10.3958 2.56004L10.0833 2.88087L10.1583 3.33337L9.77075 3.12004L9.38325 3.33337L9.45825 2.88087L9.14575 2.56004L9.577 2.49504L9.77075 2.08337Z" fill="white" />
                                        <path d="M11.3333 2.08337L11.527 2.49504L11.9583 2.56046L11.6458 2.88129L11.7208 3.33337L11.3333 3.12004L10.9458 3.33337L11.0208 2.88087L10.7083 2.56004L11.1395 2.49504L11.3333 2.08337Z" fill="white" />
                                    </svg>
                                </span>
                                <span className='text-sm font-medium '>En</span>
                            </button>
                            <button
                                onClick={() => handleLanguageChange('hin')}
                                className={`flex items-center gap-1 border rounded-full px-2 py-1 ${language === 'hin' ? 'bg-[#CFAC62] text-white' : 'bg-[#e0e0e0] text-[#3f3f3f]'
                                    }`}
                            >
                                <span role="img" aria-label="Hindi" className='text-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                        <path d="M18.8334 10C18.8334 8.97212 18.6384 7.99254 18.2984 7.08337H2.70175C2.36175 7.99254 2.16675 8.97212 2.16675 10C2.16675 11.028 2.36175 12.0075 2.70175 12.9167H18.298C18.6384 12.0075 18.8334 11.028 18.8334 10Z" fill="url(#paint0_linear_2001_167)" />
                                        <path d="M10.5001 7.91663C9.34925 7.91663 8.41675 8.84913 8.41675 9.99996C8.41675 11.1508 9.34925 12.0833 10.5001 12.0833C11.6509 12.0833 12.5834 11.1508 12.5834 9.99996C12.5834 8.84913 11.6509 7.91663 10.5001 7.91663ZM10.5001 11.8233C9.49258 11.8233 8.67675 11.0075 8.67675 9.99996C8.67675 8.99246 9.49258 8.17663 10.5001 8.17663C11.5076 8.17663 12.3234 8.99246 12.3234 9.99996C12.3234 11.0075 11.5076 11.8233 10.5001 11.8233Z" fill="#0D62AB" />
                                        <path d="M10.8641 10C10.8641 10.2021 10.7016 10.3642 10.4999 10.3642C10.2982 10.3642 10.1357 10.2017 10.1357 10C10.1357 9.79836 10.2982 9.63586 10.4999 9.63586C10.7016 9.63586 10.8641 9.79795 10.8641 10Z" fill="#0D62AB" />
                                        <path d="M12.3213 10.148C12.2713 10.1417 12.2255 10.1751 12.2193 10.2251C12.213 10.2751 12.2463 10.3209 12.2963 10.3271C12.3463 10.3355 12.3922 10.3001 12.3984 10.2501C12.4063 10.2001 12.3713 10.1542 12.3213 10.148Z" fill="#0D62AB" />
                                        <path d="M10.5 11.8234L10.5625 10.7288L10.5 10.2084L10.4375 10.7288L10.5 11.8234Z" fill="#0D62AB" />
                                        <path d="M12.2211 10.6141C12.1732 10.5954 12.1211 10.6162 12.1003 10.6641C12.0816 10.71 12.1045 10.7641 12.1503 10.7829C12.1961 10.8016 12.2503 10.7808 12.2691 10.7329C12.2899 10.6866 12.267 10.6325 12.2211 10.6141Z" fill="#0D62AB" />
                                        <path d="M10.0276 11.7608L10.3709 10.72L10.4459 10.2017L10.2501 10.6887L10.0276 11.7608Z" fill="#0D62AB" />
                                        <path d="M12.0026 11.0387C11.963 11.0075 11.9067 11.0137 11.8755 11.0554C11.8442 11.095 11.8526 11.1512 11.8922 11.1825C11.9317 11.2137 11.9901 11.2054 12.0192 11.1658C12.0505 11.1258 12.0422 11.0675 12.0026 11.0387Z" fill="#0D62AB" />
                                        <path d="M9.58838 11.5795L10.19 10.6616L10.3963 10.1808L10.0821 10.6012L9.58838 11.5795Z" fill="#0D62AB" />
                                        <path d="M11.6842 11.3904C11.6529 11.3508 11.5946 11.3446 11.555 11.3738C11.5154 11.405 11.5071 11.4633 11.5383 11.5029C11.5696 11.5425 11.6258 11.5508 11.6654 11.5196C11.7071 11.4879 11.7133 11.4321 11.6842 11.3904Z" fill="#0D62AB" />
                                        <path d="M9.20947 11.2904L10.0274 10.56L10.352 10.1479L9.93989 10.4725L9.20947 11.2904Z" fill="#0D62AB" />
                                        <path d="M11.2825 11.6483C11.2637 11.6025 11.2096 11.5816 11.1637 11.6004C11.1179 11.6191 11.095 11.6733 11.1137 11.7191C11.1346 11.765 11.1867 11.7879 11.2325 11.7691C11.2804 11.7483 11.3012 11.6962 11.2825 11.6483Z" fill="#0D62AB" />
                                        <path d="M8.92041 10.9116L9.89874 10.4183L10.3192 10.1041L9.83833 10.3104L8.92041 10.9116Z" fill="#0D62AB" />
                                        <path d="M10.8287 11.7962C10.8224 11.7462 10.7766 11.7108 10.7266 11.717C10.6766 11.7254 10.6412 11.7712 10.6474 11.8212C10.6558 11.8712 10.7016 11.9045 10.7516 11.8983C10.8016 11.8916 10.8349 11.8462 10.8287 11.7962Z" fill="#0D62AB" />
                                        <path d="M8.73926 10.4725L9.81092 10.25L10.298 10.0542L9.77967 10.1292L8.73926 10.4725Z" fill="#0D62AB" />
                                        <path d="M10.2735 11.7191C10.2235 11.7108 10.1776 11.7462 10.1714 11.7962C10.1651 11.8462 10.2005 11.892 10.2505 11.8983C10.3005 11.9066 10.3464 11.8712 10.3526 11.8212C10.3585 11.7712 10.323 11.7254 10.2735 11.7191Z" fill="#0D62AB" />
                                        <path d="M8.67676 10L9.77134 10.0625L10.2918 10L9.77134 9.9375L8.67676 10Z" fill="#0D62AB" />
                                        <path d="M9.83841 11.6004C9.79258 11.5817 9.73841 11.6046 9.71966 11.6504C9.69883 11.6963 9.72175 11.7504 9.76758 11.7692C9.8155 11.7879 9.86758 11.7671 9.88841 11.7213C9.90675 11.6733 9.88383 11.6213 9.83841 11.6004Z" fill="#0D62AB" />
                                        <path d="M8.73926 9.52747L9.78009 9.8708L10.2984 9.9458L9.81134 9.74997L8.73926 9.52747Z" fill="#0D62AB" />
                                        <path d="M9.44706 11.3738C9.40748 11.3446 9.34914 11.3508 9.31998 11.3904C9.28873 11.4321 9.29498 11.4883 9.33664 11.5196C9.37623 11.5488 9.43248 11.5425 9.46373 11.5029C9.49456 11.4608 9.48623 11.405 9.44706 11.3738Z" fill="#0D62AB" />
                                        <path d="M8.92041 9.08838L9.83833 9.69005L10.3192 9.8963L9.89874 9.58213L8.92041 9.08838Z" fill="#0D62AB" />
                                        <path d="M9.12618 11.055C9.09493 11.0154 9.03868 11.0071 8.9991 11.0383C8.95951 11.0675 8.95118 11.1258 8.98243 11.1654C9.0116 11.205 9.06993 11.2133 9.10951 11.1821C9.1491 11.1508 9.15743 11.0946 9.12618 11.055Z" fill="#0D62AB" />
                                        <path d="M9.20947 8.70959L9.93989 9.52751L10.352 9.8521L10.0274 9.44001L9.20947 8.70959Z" fill="#0D62AB" />
                                        <path d="M8.89968 10.6616C8.88093 10.6158 8.82676 10.5929 8.78093 10.6137C8.73509 10.6325 8.71217 10.6866 8.73092 10.7325C8.75176 10.7783 8.80384 10.8012 8.85176 10.7825C8.89759 10.7616 8.92051 10.7095 8.89968 10.6616Z" fill="#0D62AB" />
                                        <path d="M9.58838 8.42041L10.0817 9.39874L10.3959 9.81916L10.1896 9.33833L9.58838 8.42041Z" fill="#0D62AB" />
                                        <path d="M8.78279 10.2246C8.77446 10.1746 8.72863 10.1412 8.68071 10.1475C8.63071 10.1537 8.5953 10.1996 8.60155 10.2496C8.6078 10.2996 8.65363 10.335 8.70363 10.3266C8.75363 10.3204 8.78904 10.2746 8.78279 10.2246Z" fill="#0D62AB" />
                                        <path d="M10.0276 8.23914L10.2501 9.3108L10.4459 9.79789L10.3709 9.27955L10.0276 8.23914Z" fill="#0D62AB" />
                                        <path d="M8.70363 9.67125C8.65363 9.665 8.6078 9.70041 8.60155 9.75041C8.5953 9.80041 8.63071 9.84625 8.68071 9.8525C8.73071 9.85875 8.77654 9.82333 8.78279 9.77333C8.78904 9.72333 8.75363 9.6775 8.70363 9.67125Z" fill="#0D62AB" />
                                        <path d="M10.5 8.17664L10.4375 9.27122L10.5 9.79164L10.5625 9.27122L10.5 8.17664Z" fill="#0D62AB" />
                                        <path d="M8.84946 9.2175C8.80363 9.19875 8.74946 9.22166 8.73071 9.2675C8.71196 9.31333 8.7328 9.3675 8.78071 9.38625C8.82655 9.405 8.88071 9.38416 8.89946 9.33625C8.91821 9.29041 8.8953 9.23625 8.84946 9.2175Z" fill="#0D62AB" />
                                        <path d="M10.9725 8.23914L10.6292 9.27997L10.5542 9.7983L10.75 9.31122L10.9725 8.23914Z" fill="#0D62AB" />
                                        <path d="M9.10949 8.8179C9.06782 8.78665 9.01157 8.7929 8.98032 8.83457C8.95115 8.87415 8.9574 8.9304 8.99699 8.96165C9.03865 8.9929 9.0949 8.98457 9.12615 8.94499C9.15532 8.9054 9.14907 8.84707 9.10949 8.8179Z" fill="#0D62AB" />
                                        <path d="M11.4117 8.42041L10.81 9.33833L10.6038 9.81916L10.9179 9.39874L11.4117 8.42041Z" fill="#0D62AB" />
                                        <path d="M9.46341 8.49751C9.43216 8.45793 9.37591 8.44959 9.33633 8.48084C9.29466 8.51209 9.28841 8.56834 9.31758 8.61001C9.34883 8.64959 9.40716 8.65584 9.44674 8.62668C9.48633 8.59501 9.49466 8.53709 9.46341 8.49751Z" fill="#0D62AB" />
                                        <path d="M11.7904 8.70959L10.9725 9.44001L10.6479 9.8521L11.06 9.52751L11.7904 8.70959Z" fill="#0D62AB" />
                                        <path d="M9.88576 8.28089C9.86701 8.23505 9.81284 8.21214 9.76701 8.23297C9.72118 8.25172 9.69826 8.3038 9.71701 8.35172C9.73576 8.39755 9.78993 8.42047 9.83576 8.39963C9.88368 8.38088 9.90451 8.3288 9.88576 8.28089Z" fill="#0D62AB" />
                                        <path d="M12.0797 9.08838L11.1013 9.58171L10.6809 9.89588L11.1617 9.68963L12.0797 9.08838Z" fill="#0D62AB" />
                                        <path d="M10.3521 8.17879C10.3459 8.12879 10.3 8.09545 10.25 8.1017C10.2 8.10795 10.1646 8.15379 10.1709 8.20379C10.1771 8.25379 10.223 8.2892 10.273 8.28087C10.323 8.27462 10.3584 8.22879 10.3521 8.17879Z" fill="#0D62AB" />
                                        <path d="M12.2609 9.52747L11.1892 9.74997L10.7021 9.9458L11.2205 9.8708L12.2609 9.52747Z" fill="#0D62AB" />
                                        <path d="M10.7495 8.10203C10.6995 8.09578 10.6537 8.1312 10.6474 8.1812C10.6412 8.2312 10.6766 8.27703 10.7266 8.28328C10.7766 8.28953 10.8224 8.25412 10.8287 8.20412C10.8349 8.1537 10.7995 8.10828 10.7495 8.10203Z" fill="#0D62AB" />
                                        <path d="M12.3233 10L11.2287 9.9375L10.7083 10L11.2287 10.0625L12.3233 10Z" fill="#0D62AB" />
                                        <path d="M11.2326 8.23089C11.1867 8.21006 11.1326 8.23298 11.1138 8.27881C11.0951 8.32673 11.1159 8.37881 11.1617 8.39756C11.2096 8.41839 11.2617 8.39548 11.2826 8.34964C11.3013 8.30173 11.2784 8.24964 11.2326 8.23089Z" fill="#0D62AB" />
                                        <path d="M12.2608 10.4725L11.22 10.1292L10.7017 10.0542L11.1887 10.25L12.2608 10.4725Z" fill="#0D62AB" />
                                        <path d="M11.6654 8.48081C11.6258 8.45164 11.5696 8.45789 11.5383 8.49748C11.5071 8.53914 11.5154 8.59539 11.555 8.62664C11.5946 8.65581 11.6529 8.64956 11.6842 8.60998C11.7133 8.56789 11.7071 8.51206 11.6654 8.48081Z" fill="#0D62AB" />
                                        <path d="M12.0797 10.9117L11.1617 10.31L10.6809 10.1038L11.1013 10.4179L12.0797 10.9117Z" fill="#0D62AB" />
                                        <path d="M12.0191 8.83455C11.9879 8.79496 11.9295 8.78663 11.89 8.81788C11.8504 8.84913 11.842 8.90538 11.8733 8.94496C11.9045 8.98455 11.9608 8.99288 12.0025 8.96163C12.042 8.93246 12.0483 8.87413 12.0191 8.83455Z" fill="#0D62AB" />
                                        <path d="M11.7904 11.2904L11.06 10.4725L10.6479 10.1479L10.9725 10.56L11.7904 11.2904Z" fill="#0D62AB" />
                                        <path d="M12.2691 9.2675C12.2483 9.22166 12.1962 9.19875 12.1503 9.2175C12.1024 9.23833 12.0816 9.29041 12.1003 9.33625C12.1191 9.38416 12.1733 9.405 12.2191 9.38625C12.2649 9.3675 12.2878 9.31333 12.2691 9.2675Z" fill="#0D62AB" />
                                        <path d="M11.4117 11.5795L10.9184 10.6012L10.6042 10.1808L10.8105 10.6616L11.4117 11.5795Z" fill="#0D62AB" />
                                        <path d="M12.3979 9.75041C12.3917 9.70041 12.3458 9.665 12.2958 9.67125C12.2458 9.67958 12.2104 9.72333 12.2187 9.77333C12.225 9.82333 12.2708 9.85875 12.3208 9.8525C12.3712 9.84583 12.4062 9.8 12.3979 9.75041Z" fill="#0D62AB" />
                                        <path d="M10.9725 11.7608L10.75 10.6891L10.5542 10.202L10.6292 10.7204L10.9725 11.7608Z" fill="#0D62AB" />
                                        <path d="M18.2983 12.9166H2.70166C3.88541 16.0783 6.92541 18.3333 10.5 18.3333C14.0746 18.3333 17.1146 16.0783 18.2983 12.9166Z" fill="url(#paint1_linear_2001_167)" />
                                        <path d="M10.5 1.66663C6.92541 1.66663 3.88541 3.92163 2.70166 7.08329H18.2979C17.1146 3.92163 14.0746 1.66663 10.5 1.66663Z" fill="url(#paint2_linear_2001_167)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2001_167" x1="4.68466" y1="4.18462" x2="16.3134" y2="15.8134" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#DFE9F2" />
                                                <stop offset="0.998" stopColor="#9EA7B0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_2001_167" x1="2.97958" y1="5.92663" x2="14.6787" y2="17.6258" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#21AD64" />
                                                <stop offset="1" stopColor="#088242" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_2001_167" x1="6.45708" y1="2.50996" x2="18.1079" y2="14.1608" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F09701" />
                                                <stop offset="1" stopColor="#E36001" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span className='text-sm font-medium '>Hin</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
