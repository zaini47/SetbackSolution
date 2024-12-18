'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFF',
};

export default function LangModal() {
    const [open, setOpen] = React.useState(true);
    const [language, setLanguage] = React.useState('en');
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    // not using  /////////////////////
    const lang = language;
    console.log(lang)
    // not using  /////////////////////


    // Function to handle language change
    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setOpen(!open)
    };

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style} className='!rounded-[24.852px] outline-none max-sm:!w-[324px] px-[31px] py-[48px]  space-y-5'>
                    <div className=''>
                        <p className='text-[#CFAC62] max-sm:text-[30px] text-[38.521px] text-center'>Select Language</p>
                    </div>
                    <div className='flex justify-evenly items-center gap-2  rounded-full p-2' >
                        <button
                            onClick={() => handleLanguageChange('en')}
                            className="flex justify-center items-center gap-1 px-2 py-1 "
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
                            <span className='text-[19px] font-normal Inter'>English</span>
                        </button>
                        <button
                            onClick={() => handleLanguageChange('hin')}
                            className="flex justify-center items-center gap-1 px-2 py-1 "
                        >
                            <span role="img" aria-label="Hindi" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M20.6237 11.5266C20.6237 10.4089 20.4117 9.34386 20.042 8.35535H3.08414C2.71446 9.34386 2.50244 10.4089 2.50244 11.5266C2.50244 12.6442 2.71446 13.7093 3.08414 14.6978H20.0416C20.4117 13.7093 20.6237 12.6442 20.6237 11.5266Z" fill="url(#paint0_linear_2001_340)" />
                                    <path d="M11.5631 9.26147C10.3119 9.26147 9.29797 10.2754 9.29797 11.5266C9.29797 12.7779 10.3119 13.7918 11.5631 13.7918C12.8144 13.7918 13.8283 12.7779 13.8283 11.5266C13.8283 10.2754 12.8144 9.26147 11.5631 9.26147ZM11.5631 13.5091C10.4677 13.5091 9.58067 12.6221 9.58067 11.5266C9.58067 10.4312 10.4677 9.54417 11.5631 9.54417C12.6586 9.54417 13.5456 10.4312 13.5456 11.5266C13.5456 12.6221 12.6586 13.5091 11.5631 13.5091Z" fill="#0D62AB" />
                                    <path d="M11.959 11.5266C11.959 11.7463 11.7823 11.9225 11.5631 11.9225C11.3438 11.9225 11.1671 11.7458 11.1671 11.5266C11.1671 11.3073 11.3438 11.1306 11.5631 11.1306C11.7823 11.1306 11.959 11.3068 11.959 11.5266Z" fill="#0D62AB" />
                                    <path d="M13.5433 11.6875C13.489 11.6807 13.4391 11.7169 13.4323 11.7713C13.4255 11.8256 13.4618 11.8755 13.5161 11.8823C13.5705 11.8913 13.6203 11.8528 13.6271 11.7985C13.6357 11.7441 13.5977 11.6943 13.5433 11.6875Z" fill="#0D62AB" />
                                    <path d="M11.5631 13.509L11.631 12.3189L11.5631 11.7531L11.4951 12.3189L11.5631 13.509Z" fill="#0D62AB" />
                                    <path d="M13.4345 12.1943C13.3824 12.1739 13.3258 12.1966 13.3032 12.2487C13.2828 12.2985 13.3077 12.3574 13.3575 12.3778C13.4074 12.3982 13.4662 12.3755 13.4866 12.3234C13.5093 12.2732 13.4844 12.2143 13.4345 12.1943Z" fill="#0D62AB" />
                                    <path d="M11.0493 13.4411L11.4226 12.3094L11.5042 11.7458L11.2912 12.2754L11.0493 13.4411Z" fill="#0D62AB" />
                                    <path d="M13.1967 12.656C13.1537 12.6221 13.0925 12.6289 13.0586 12.6742C13.0246 12.7172 13.0336 12.7784 13.0767 12.8123C13.1197 12.8463 13.1831 12.8373 13.2149 12.7942C13.2488 12.7507 13.2398 12.6873 13.1967 12.656Z" fill="#0D62AB" />
                                    <path d="M10.5719 13.2441L11.2261 12.2461L11.4503 11.7233L11.1087 12.1804L10.5719 13.2441Z" fill="#0D62AB" />
                                    <path d="M12.8507 13.0384C12.8167 12.9953 12.7533 12.9885 12.7102 13.0202C12.6672 13.0542 12.6581 13.1176 12.6921 13.1607C12.7261 13.2037 12.7872 13.2128 12.8303 13.1788C12.8756 13.1444 12.8824 13.0837 12.8507 13.0384Z" fill="#0D62AB" />
                                    <path d="M10.16 12.9296L11.0493 12.1354L11.4022 11.6874L10.9542 12.0403L10.16 12.9296Z" fill="#0D62AB" />
                                    <path d="M12.4139 13.3188C12.3935 13.269 12.3346 13.2464 12.2848 13.2667C12.2349 13.2871 12.21 13.346 12.2304 13.3959C12.2531 13.4457 12.3097 13.4706 12.3595 13.4502C12.4116 13.4276 12.4343 13.3709 12.4139 13.3188Z" fill="#0D62AB" />
                                    <path d="M9.8457 12.5179L10.9094 11.9815L11.3665 11.6399L10.8437 11.8641L9.8457 12.5179Z" fill="#0D62AB" />
                                    <path d="M11.9205 13.4796C11.9137 13.4252 11.8639 13.3867 11.8095 13.3935C11.7551 13.4025 11.7166 13.4524 11.7234 13.5067C11.7325 13.5611 11.7823 13.5973 11.8367 13.5905C11.8911 13.5833 11.9273 13.5339 11.9205 13.4796Z" fill="#0D62AB" />
                                    <path d="M9.64856 12.0403L10.8138 11.7984L11.3434 11.5854L10.7798 11.667L9.64856 12.0403Z" fill="#0D62AB" />
                                    <path d="M11.3166 13.3959C11.2622 13.3868 11.2124 13.4253 11.2056 13.4797C11.1988 13.534 11.2373 13.5839 11.2917 13.5907C11.3461 13.5997 11.3959 13.5612 11.4027 13.5068C11.409 13.4525 11.3705 13.4026 11.3166 13.3959Z" fill="#0D62AB" />
                                    <path d="M9.58057 11.5266L10.7707 11.5945L11.3365 11.5266L10.7707 11.4586L9.58057 11.5266Z" fill="#0D62AB" />
                                    <path d="M10.8437 13.2667C10.7939 13.2463 10.735 13.2712 10.7146 13.321C10.692 13.3709 10.7169 13.4297 10.7667 13.4501C10.8188 13.4705 10.8754 13.4479 10.8981 13.398C10.918 13.3459 10.8931 13.2893 10.8437 13.2667Z" fill="#0D62AB" />
                                    <path d="M9.64856 11.0128L10.7802 11.3861L11.3438 11.4677L10.8142 11.2547L9.64856 11.0128Z" fill="#0D62AB" />
                                    <path d="M10.4182 13.0202C10.3752 12.9885 10.3118 12.9953 10.2801 13.0384C10.2461 13.0837 10.2529 13.1448 10.2982 13.1788C10.3412 13.2105 10.4024 13.2037 10.4364 13.1607C10.4699 13.1149 10.4608 13.0542 10.4182 13.0202Z" fill="#0D62AB" />
                                    <path d="M9.8457 10.5354L10.8437 11.1896L11.3665 11.4138L10.9094 11.0722L9.8457 10.5354Z" fill="#0D62AB" />
                                    <path d="M10.0695 12.6737C10.0355 12.6307 9.97433 12.6216 9.93129 12.6556C9.88825 12.6873 9.87919 12.7507 9.91317 12.7938C9.94488 12.8368 10.0083 12.8459 10.0513 12.8119C10.0944 12.7779 10.1034 12.7168 10.0695 12.6737Z" fill="#0D62AB" />
                                    <path d="M10.16 10.1235L10.9542 11.0128L11.4022 11.3658L11.0493 10.9177L10.16 10.1235Z" fill="#0D62AB" />
                                    <path d="M9.82293 12.2459C9.80255 12.1961 9.74365 12.1712 9.69382 12.1938C9.64399 12.2142 9.61907 12.2731 9.63946 12.323C9.66211 12.3728 9.71874 12.3977 9.77084 12.3773C9.82067 12.3547 9.84559 12.298 9.82293 12.2459Z" fill="#0D62AB" />
                                    <path d="M10.5719 9.80908L11.1083 10.8728L11.4499 11.3299L11.2256 10.8071L10.5719 9.80908Z" fill="#0D62AB" />
                                    <path d="M9.69614 11.7708C9.68708 11.7164 9.63724 11.6802 9.58514 11.687C9.53078 11.6938 9.49227 11.7436 9.49907 11.798C9.50586 11.8523 9.5557 11.8908 9.61006 11.8818C9.66442 11.875 9.70293 11.8251 9.69614 11.7708Z" fill="#0D62AB" />
                                    <path d="M11.0493 9.61206L11.2912 10.7773L11.5042 11.3069L11.4226 10.7433L11.0493 9.61206Z" fill="#0D62AB" />
                                    <path d="M9.61006 11.1691C9.5557 11.1623 9.50586 11.2008 9.49907 11.2552C9.49227 11.3096 9.53078 11.3594 9.58514 11.3662C9.63951 11.373 9.68934 11.3345 9.69614 11.2801C9.70293 11.2257 9.66442 11.1759 9.61006 11.1691Z" fill="#0D62AB" />
                                    <path d="M11.5631 9.54407L11.4951 10.7342L11.5631 11.3L11.631 10.7342L11.5631 9.54407Z" fill="#0D62AB" />
                                    <path d="M9.76863 10.6758C9.71879 10.6554 9.6599 10.6804 9.63951 10.7302C9.61913 10.78 9.64178 10.8389 9.69388 10.8593C9.74371 10.8797 9.80261 10.857 9.82299 10.8049C9.84338 10.7551 9.81846 10.6962 9.76863 10.6758Z" fill="#0D62AB" />
                                    <path d="M12.0768 9.61206L11.7035 10.7437L11.6219 11.3073L11.8349 10.7777L12.0768 9.61206Z" fill="#0D62AB" />
                                    <path d="M10.0513 10.2414C10.006 10.2074 9.94484 10.2142 9.91086 10.2595C9.87915 10.3025 9.88594 10.3637 9.92898 10.3977C9.97429 10.4316 10.0354 10.4226 10.0694 10.3795C10.1011 10.3365 10.0943 10.2731 10.0513 10.2414Z" fill="#0D62AB" />
                                    <path d="M12.5543 9.80908L11.9002 10.8071L11.6759 11.3299L12.0175 10.8728L12.5543 9.80908Z" fill="#0D62AB" />
                                    <path d="M10.436 9.89296C10.402 9.84992 10.3408 9.84086 10.2978 9.87484C10.2525 9.90882 10.2457 9.96998 10.2774 10.0153C10.3114 10.0583 10.3748 10.0651 10.4178 10.0334C10.4609 9.99897 10.4699 9.936 10.436 9.89296Z" fill="#0D62AB" />
                                    <path d="M12.9661 10.1235L12.0768 10.9177L11.7239 11.3658L12.1719 11.0128L12.9661 10.1235Z" fill="#0D62AB" />
                                    <path d="M10.8953 9.65733C10.8749 9.60749 10.816 9.58258 10.7662 9.60523C10.7164 9.62561 10.6915 9.68224 10.7118 9.73434C10.7322 9.78417 10.7911 9.80909 10.841 9.78644C10.8931 9.76605 10.9157 9.70942 10.8953 9.65733Z" fill="#0D62AB" />
                                    <path d="M13.2806 10.5354L12.2169 11.0718L11.7598 11.4134L12.2826 11.1891L13.2806 10.5354Z" fill="#0D62AB" />
                                    <path d="M11.4023 9.54642C11.3955 9.49206 11.3457 9.45581 11.2913 9.46261C11.237 9.4694 11.1984 9.51924 11.2052 9.5736C11.212 9.62797 11.2619 9.66647 11.3162 9.65741C11.3706 9.65062 11.4091 9.60078 11.4023 9.54642Z" fill="#0D62AB" />
                                    <path d="M13.4776 11.0128L12.3124 11.2547L11.7828 11.4677L12.3464 11.3861L13.4776 11.0128Z" fill="#0D62AB" />
                                    <path d="M11.8344 9.46306C11.7801 9.45626 11.7302 9.49477 11.7234 9.54913C11.7166 9.6035 11.7551 9.65333 11.8095 9.66013C11.8639 9.66692 11.9137 9.62841 11.9205 9.57405C11.9273 9.51923 11.8888 9.46985 11.8344 9.46306Z" fill="#0D62AB" />
                                    <path d="M13.5455 11.5266L12.3554 11.4586L11.7896 11.5266L12.3554 11.5945L13.5455 11.5266Z" fill="#0D62AB" />
                                    <path d="M12.3595 9.60303C12.3096 9.58038 12.2508 9.60529 12.2304 9.65513C12.21 9.70723 12.2326 9.76386 12.2825 9.78424C12.3346 9.80689 12.3912 9.78198 12.4138 9.73214C12.4342 9.68004 12.4093 9.62342 12.3595 9.60303Z" fill="#0D62AB" />
                                    <path d="M13.4776 12.0403L12.3459 11.667L11.7823 11.5854L12.3119 11.7984L13.4776 12.0403Z" fill="#0D62AB" />
                                    <path d="M12.8303 9.87485C12.7872 9.84314 12.7261 9.84993 12.6921 9.89297C12.6581 9.93827 12.6672 9.99943 12.7102 10.0334C12.7533 10.0651 12.8167 10.0583 12.8507 10.0153C12.8824 9.96953 12.8756 9.90883 12.8303 9.87485Z" fill="#0D62AB" />
                                    <path d="M13.2806 12.5178L12.2826 11.8637L11.7598 11.6394L12.2169 11.981L13.2806 12.5178Z" fill="#0D62AB" />
                                    <path d="M13.2148 10.2594C13.1808 10.2164 13.1174 10.2073 13.0744 10.2413C13.0313 10.2753 13.0223 10.3364 13.0562 10.3795C13.0902 10.4225 13.1514 10.4316 13.1967 10.3976C13.2397 10.3659 13.2465 10.3025 13.2148 10.2594Z" fill="#0D62AB" />
                                    <path d="M12.9661 12.9296L12.1719 12.0403L11.7239 11.6874L12.0768 12.1354L12.9661 12.9296Z" fill="#0D62AB" />
                                    <path d="M13.4867 10.7302C13.464 10.6804 13.4074 10.6554 13.3576 10.6758C13.3055 10.6985 13.2828 10.7551 13.3032 10.8049C13.3236 10.857 13.3825 10.8797 13.4323 10.8593C13.4822 10.8389 13.5071 10.78 13.4867 10.7302Z" fill="#0D62AB" />
                                    <path d="M12.5544 13.2441L12.018 12.1804L11.6764 11.7233L11.9006 12.2461L12.5544 13.2441Z" fill="#0D62AB" />
                                    <path d="M13.6267 11.2552C13.6199 11.2008 13.57 11.1623 13.5157 11.1691C13.4613 11.1782 13.4228 11.2257 13.4319 11.2801C13.4387 11.3345 13.4885 11.373 13.5429 11.3662C13.5977 11.3589 13.6357 11.3091 13.6267 11.2552Z" fill="#0D62AB" />
                                    <path d="M12.0768 13.4411L11.8349 12.2759L11.6219 11.7463L11.7035 12.3099L12.0768 13.4411Z" fill="#0D62AB" />
                                    <path d="M20.042 14.6979H3.08411C4.37117 18.1355 7.6765 20.5873 11.5631 20.5873C15.4496 20.5873 18.755 18.1355 20.042 14.6979Z" fill="url(#paint1_linear_2001_340)" />
                                    <path d="M11.5631 2.46594C7.6765 2.46594 4.37117 4.91775 3.08411 8.35537H20.0416C18.755 4.91775 15.4496 2.46594 11.5631 2.46594Z" fill="url(#paint2_linear_2001_340)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2001_340" x1="5.24012" y1="5.2036" x2="17.8838" y2="17.8473" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#DFE9F2" />
                                            <stop offset="0.998" stop-color="#9EA7B0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2001_340" x1="3.38628" y1="7.0978" x2="16.1065" y2="19.818" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#21AD64" />
                                            <stop offset="1" stop-color="#088242" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_2001_340" x1="7.16729" y1="3.38288" x2="19.835" y2="16.0506" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F09701" />
                                            <stop offset="1" stop-color="#E36001" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <span className='text-[19px] font-normal Inter '>Hindi</span>
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
