'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NestedModal from './NestedModel';
// import Image from 'next/image';

interface Option {
    label: string;
    value: string;
}

interface CustomDropdownProps {
    options: Option[];
    onOptionSelect: (option: Option) => void;
    selectedOption: string;
    placeholder: string;
}

interface HeaderProps {
    Id: string;
}

const Header: React.FC<HeaderProps> = ({ Id }) => {
    const [showNextForm, setShowNextForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    // const [fraudImagePreview, setFraudImagePreview] = useState<string | null>(null);
    // const [complaintImagePreview, setComplaintImagePreview] = useState<string | null>(null);
    // const [incidentImagePreview, setIncidentImagePreview] = useState<string | null>(null);
    const [fraudselected, setFraudselected] = useState('')
    const [fraudselected2, setFraudselected2] = useState('')
    const [incident, setIncident] = useState('')
    const [incidentFiles, setIncidentFiles] = useState<File[]>([]);
    const [fraudFiles, setFraudFiles] = useState<File[]>([]);
    const [complaintFiles, setComplaintFiles] = useState<File[]>([]);

    // Validation schemas for both forms
    const initialFormSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string()
            .matches(/^\+91\d{10}$/, 'Phone number must be a valid Indian number')
            .required('Phone is required'),
        whatsapp: Yup.string().required('WhatsApp number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const additionalFormSchema = Yup.object().shape({
        cityResidence: Yup.string().required('City of residence is required'),
        oppositeCityResidence: Yup.string().required('Opposite city is required'),
        additionalInfo: Yup.string(),
        incidentCityFile: Yup.mixed().required('Incident file is required'),
        fraudFile: Yup.mixed().required('Fraud file is required'),
        complaintFile: Yup.mixed().required('Complaint file is required'),
    });

    const options = [
        { label: 'Online Fraud', value: 'fraud' },
        { label: 'Others', value: 'others' },
    ];

    const options2 = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];
    const options3 = [
        { label: 'Case', value: 'case' },
        { label: 'Incident', value: 'incident' },
    ];

    const handleOptionSelect2 = (option: Option) => {
        setFraudselected2(option?.value)
    };

    const handleOptionSelect = (option: Option) => {
        setFraudselected(option?.value)
    };
    const handleOptionSelect3 = (option: Option) => {
        setIncident(option?.value)
    };


    const handleIncidentFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setIncidentFiles(prevFiles => [...prevFiles, ...files]);
    };

    const handleFraudFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setFraudFiles(prevFiles => [...prevFiles, ...files]);
    };

    const handleComplaintFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setComplaintFiles(prevFiles => [...prevFiles, ...files]);
    };


    return (
        <div id={Id} className="w-4/5 max-md:w-full md:w-[90%] flex flex-col justify-center mx-auto">
            <section className="flex flex-col lg:flex-row justify-between items-center py-20 max-md:py-5 gap-7">
                <div className="flex-1 max-md:px-6 max-sm:px-3">
                    <h1 className="max-sm:text-[58px] max-md:text-[64px] max-md:text-center md:text-[80px] lg:text-[100px] xl:text-[124px] font-normal text-[#c8a164] leading-snug">
                        Empowering
                    </h1>
                    <p className="max-md:text-[46px] md:text-[60px] lg:text-[70px] xl:text-[82px] font-normal text-[#c8a164] leading-snug max-md:text-center max-sm:w-full">
                        Legal Clarity
                    </p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#3f3f3f] mt-4 max-sm:px-2">
                        Your Go-To Platform for Accessible Information and Informed Decisions
                    </p>
                </div>

                <div className="max-w-[90%] xl:max-w-[40%] w-full">
                    <h2 className="md:text-[24px] max-md:text-[24px] ps-10 lg:text-[28px] font-semibold text-[#c8a164] mb-3">
                        Legal Suggestion Form
                    </h2>
                    {!showNextForm ? (
                        <Formik
                            initialValues={{ name: '', phone: '', whatsapp: '', email: '' }}
                            validationSchema={initialFormSchema}
                            onSubmit={() => {
                                setShowNextForm(true);
                            }}
                        >
                            {() => (
                                <Form className="space-y-4 bg-[#f9f8f4] p-5 rounded-[20px] shadow-lg">
                                    {['name', 'phone', 'whatsapp', 'email'].map((field) => (
                                        <div key={field}>
                                            <label className="block text-[16px] ps-[20px] md:text-[18px] font-normal text-[#3f3f3f]">
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                            </label>
                                            <Field
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                                className={`mt-1 py-3 px-5 w-full border border-[#CED4DA] rounded-full outline-none`}
                                            />
                                            <ErrorMessage
                                                name={field}
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>
                                    ))}
                                    <button
                                        type="submit"
                                        className="!mt-6 w-fit bg-[#c8a164] text-white font-semibold py-3 px-10 rounded-full transition duration-300 hover:bg-[#b29352]"
                                    >
                                        Next
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    ) : (
                        <Formik
                            initialValues={{
                                cityResidence: '',
                                oppositeCityResidence: '',
                                additionalInfo: '',
                                incidentCityFile: null,
                                fraudFile: null,
                                complaintFile: null,
                            }}
                            validationSchema={additionalFormSchema}
                            onSubmit={() => {
                                setIsModalOpen(true);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="space-y-4 bg-[#f9f8f4] p-5 rounded-[20px] shadow-lg" onSubmit={(e) => {
                                    e.preventDefault()
                                    setIsModalOpen(true)
                                }}>
                                    {[
                                        { name: 'cityResidence', label: 'City of Residence' },
                                        { name: 'oppositeCityResidence', label: 'Opposite Party’s City of Residence' },
                                    ].map(({ name, label }) => (
                                        <div key={name}>
                                            <label className="block text-[16px] ps-[20px] md:text-[18px] font-normal text-[#3f3f3f]">
                                                {label}
                                            </label>
                                            <Field
                                                type="text"
                                                name={name}
                                                placeholder={label}
                                                className={`mt-1 py-3 px-5 w-full border border-[#CED4DA] rounded-full outline-none`}
                                            />
                                            <ErrorMessage
                                                name={name}
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>
                                    ))}

                                    {/* Incident attachment section */}
                                    <div>
                                        <label className="block text-[16px] md:text-[18px] ps-[20px] font-normal text-[#3f3f3f]">Case or Incident Happened in City</label>

                                        <CustomDropdown options={options3} onOptionSelect={handleOptionSelect3} selectedOption={incident} placeholder={"Case or Incident Happened in City"} />

                                        {incident && (
                                            <>
                                                <div className='flex items-center gap-3 mt-5'>
                                                    <div>
                                                        <label
                                                            htmlFor="incident-file"
                                                            className="rounded-[40px] text-white py-[12px] px-[30px] bg-[#CFAC62]"
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            Attachment
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="incident-file"
                                                            name="incidentCityFile"
                                                            onChange={handleIncidentFileChange}
                                                            multiple
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        {incidentFiles.length > 0 && (
                                                            <div className="py-2 px-3 flex justify-center items-center rounded-full bg-white space-x-4 w-fit">
                                                                <span className="text-[#3F3F3F] text-[16px] max-sm:text-[12px]">
                                                                    {incidentFiles.length} file(s) uploaded
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    className="text-red-500 text-sm"
                                                                    onClick={() => {
                                                                        setIncidentFiles([]); // Clear the files
                                                                    }}
                                                                >
                                                                    X
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {errors.incidentCityFile && touched.incidentCityFile && (
                                                    <div className="text-red-500 text-sm">{errors.incidentCityFile}</div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    {errors.incidentCityFile && touched.incidentCityFile && (
                                        <div className="text-red-500 text-sm">{errors.incidentCityFile}</div>
                                    )}

                                    {/* Fraud attachment section */}
                                    <div>
                                        <label className="block text-[16px] md:text-[18px] ps-[20px] font-normal text-[#3f3f3f]">Online Fraud or Others</label>

                                        <CustomDropdown options={options} onOptionSelect={handleOptionSelect} selectedOption={fraudselected} placeholder={"Online Fraud or Others"} />

                                        {fraudselected && (
                                            <>
                                                <div className='flex items-center gap-3 mt-5'>
                                                    <div>
                                                        <label
                                                            htmlFor="fraud-file"
                                                            className="rounded-[40px] text-white py-[12px] px-[30px] bg-[#CFAC62]"
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            Attachment
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="fraud-file"
                                                            name="fraudFile"
                                                            onChange={handleFraudFileChange}
                                                            multiple
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        {fraudFiles.length > 0 && (
                                                            <div className="py-2 px-3 flex justify-center items-center rounded-full bg-white space-x-4 w-fit">
                                                                <span className="text-[#3F3F3F] text-[16px] max-sm:text-[12px]">
                                                                    {fraudFiles.length} file(s) uploaded
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    className="text-red-500 text-sm"
                                                                    onClick={() => {
                                                                        setFraudFiles([]); // Clear the files
                                                                    }}
                                                                >
                                                                    X
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {errors.fraudFile && touched.fraudFile && (
                                                    <div className="text-red-500 text-sm">{errors.fraudFile}</div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    {errors.fraudFile && touched.fraudFile && (
                                        <div className="text-red-500 text-sm">{errors.fraudFile}</div>
                                    )}

                                    {/* Complaint attachment section */}
                                    <div>
                                        <label className="block text-[16px] md:text-[18px] ps-[20px] font-normal text-[#3f3f3f] ">Have You Already Filled Complaint?</label>
                                        <CustomDropdown options={options2} onOptionSelect={handleOptionSelect2} selectedOption={fraudselected2} placeholder={"Have You Already Filled Complaint?"} />

                                        {fraudselected2 && (
                                            <>
                                                <div className='flex items-center gap-3 mt-5'>
                                                    <div>
                                                        <label
                                                            htmlFor="complaint-file"
                                                            className="rounded-[40px] text-white py-[12px] px-[30px] bg-[#CFAC62]"
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            Attachment
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="complaint-file"
                                                            name="complaintFile"
                                                            onChange={handleComplaintFileChange}
                                                            multiple
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        {complaintFiles.length > 0 && (
                                                            <div className="py-2 px-3 flex justify-center items-center rounded-full bg-white space-x-4 w-fit">
                                                                <span className="text-[#3F3F3F] text-[16px] max-sm:text-[12px]">
                                                                    {complaintFiles.length} file(s) uploaded
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    className="text-red-500 text-sm"
                                                                    onClick={() => {
                                                                        setComplaintFiles([]); // Clear the files
                                                                    }}
                                                                >
                                                                    X
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {errors.complaintFile && touched.complaintFile && (
                                                    <div className="text-red-500 text-sm">{errors.complaintFile}</div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    {errors.complaintFile && touched.complaintFile && (
                                        <div className="text-red-500 text-sm">{errors.complaintFile}</div>
                                    )}
                                    <div className='mt-2'>
                                        <label
                                            htmlFor="additionalInfo"
                                            className="block text-[16px] ps-[20px] md:text-[18px] font-normal text-[#3f3f3f]"
                                        >
                                            Additional Info
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="additionalInfo"
                                            id="additionalInfo"
                                            placeholder="Additional info"
                                            className="mt-1 pt-3 pb-8 px-5 w-full border border-[#CED4DA] rounded-[12px] outline-none"
                                        />
                                        <ErrorMessage
                                            name="additionalInfo"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>
                                    <div className='flex items-center gap-2'>

                                        <button
                                            type="submit"
                                            className="mt-4 w-fit bg-[#c8a164] text-white font-semibold py-3 px-10 rounded-full transition duration-300 hover:bg-[#b29352] outline-none"
                                        >
                                            Payment
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowNextForm(false)}
                                            className="mt-4 w-fit bg-[#c8a164] text-white font-semibold py-3 px-10 rounded-full transition duration-300 hover:bg-[#b29352] outline-none"
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
                <NestedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </section>
        </div>
    );
};

export default Header;

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onOptionSelect, selectedOption, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(selectedOption); // Initialize with selectedOption

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionSelect = (option: Option) => {
        setValue(option.label); // Update the local state with the selected option's label
        onOptionSelect(option); // Notify parent of the selected option
        setIsOpen(false); // Close the dropdown
    };

    return (
        <div className="relative w-full">
            {/* Dropdown Button */}
            <button
                type="button"
                className="my-1 p-3 w-full border border-[#CED4DA] bg-[#FFF] rounded-full flex justify-between items-center"
                onClick={toggleDropdown}
            >
                <div>
                    <p className={`${value ? "text-[#3F3F3F]" : "text-[#626a7b9f]"} text-start px-2`}>{value || placeholder}</p>
                </div>
                <div className='pe-3'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                        <path
                            d="M14.5947 0.219778L8 6.81453L1.40525 0.219778C1.11237 -0.0730967 0.637623 -0.0730967 0.344748 0.219778C0.0518728 0.512653 0.0518728 0.987403 0.344748 1.28028L7.46975 8.40528C7.61637 8.5519 7.808 8.62503 8 8.62503C8.192 8.62503 8.38362 8.5519 8.53025 8.40528L15.6552 1.28028C15.9481 0.987403 15.9481 0.512653 15.6552 0.219778C15.3624 -0.0730967 14.8876 -0.0730967 14.5947 0.219778Z"
                            fill="#3F3F3F"
                        />
                    </svg>
                </div>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <div className="absolute w-full bg-white border border-[#CED4DA] rounded-lg shadow-lg z-10">
                    {options.map((option: Option, index: number) => (
                        <div
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className="p-3 cursor-pointer hover:bg-gray-100 text-[# 3F3F3F] first:rounded-t-lg last:rounded-b-lg"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};