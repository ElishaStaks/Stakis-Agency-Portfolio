'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { toast } from 'sonner';

const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    message: '',
};

const page = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setLoading] = useState(false);

    const handleFocusEvent = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const element = e.currentTarget;
        element.classList.remove('border-red-500');
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;

        let hasEmptyFields = false;
        let emailFormatValid = true;

        const fieldsToCheck = ['name', 'email', 'message'];

        for (const fieldName of fieldsToCheck) {
            const element = (form.elements.namedItem(fieldName) as HTMLInputElement);

            if (!element) {
                continue;
            }

            if (element.value.trim() === '') {
                // Empty field found
                hasEmptyFields = true;
                element.classList.add('border-red-500');
            }

            if (fieldName === 'email' && element.value.trim() !== '' && !element.value.includes('@')) {
                // Email without @ found
                emailFormatValid = false;
                toast.error('Please include an @ in the email address');
                element.classList.add('border-red-500');
            }

            if (!hasEmptyFields && emailFormatValid) {
                element.classList.remove('border-red-500');
            }
        }

        if (hasEmptyFields) {
            toast.error('Please fill out all fields');
            return;
        }

        if (!emailFormatValid) {
            return;
        }

        setLoading(true);

        const url = process.env.NEXT_PUBLIC_STAKIS_BACKEND_URL;

        // Send form data to the backend
        const response = await fetch(`${url}/api/send-email`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setLoading(false);
            toast.success("Thank you! Your message has been received!");
            // Clear the form data
            setFormData(initialFormData);
        } else {
            setLoading(false);
            toast.error("Oops! Something went wrong while submitting the form.");
        }
    };
    return (
        <section className='mx-auto relative max-w-[100rem] xl:max-w-[70rem]'>
            <div className='max-container padding-container pt-[3rem] pb-[3rem] lg:pt-[5.5rem] lg:pb-[5.5rem]'>
                <div className='w-full max-w-[67.5rem]'>
                    <div className='max-w-[42rem]'>
                        <h1 className='text-white font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl'>
                            Let's <span className='text-text'>connect</span>
                        </h1>
                    </div>
                    <div className='pt-[2rem] z-2 relative gap-x-5 gap-y-5 md:grid md:grid-cols-2 md:pt-[3rem]'>
                        <div className='pt-[1rem] flex-col justify-between flex md:pt-[0rem]'>
                            <div className='max-w-[24rem] pb-[2rem]'>
                                <p>
                                    Get started by completing the form below.
                                    Our team will get in touch with you within two
                                    business days.
                                </p>
                                <div className='pt-[2rem] flex flex-col'>
                                    <div className="flex items-center gap-x-2">
                                        <Image src="/svgs/mail-icon.svg" alt="Mail icon" width={24} height={24} />
                                        <div className='text-white'>elisha@stakis.com.au</div>
                                    </div>

                                    <div className="flex items-center gap-x-2">
                                        <Image src="/svgs/phone-icon.svg" alt="Phone icon" width={24} height={24} />
                                        <div className='text-white'>+61 430177749</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <form className='flex-col items-start flex grid-rows-gap-8' onSubmit={handleSubmit}>
                            <input
                                onClick={handleFocusEvent}
                                type="text"
                                maxLength={256}
                                placeholder='Name'
                                id="name"
                                name="name"
                                className="bg-transparent border rounded mb-4 min-h-[2rem] pl-[1rem] pr-[1rem] w-full h-auto leading-tight p-2 px-5 text-text"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <input
                                onClick={handleFocusEvent}
                                type="text"
                                maxLength={256}
                                placeholder='Email'
                                id="email"
                                name="email"
                                className="bg-transparent border rounded mb-4 min-h-[2rem] pl-[1rem] pr-[1rem] w-full h-auto leading-tight p-2 px-5 text-text"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <input
                                onClick={handleFocusEvent}
                                type="text"
                                maxLength={256}
                                placeholder='Mobile'
                                id="mobile"
                                name="mobile"
                                className="bg-transparent border rounded mb-4 min-h-[2rem] pl-[1rem] pr-[1rem] w-full h-auto leading-tight p-2 px-5 text-text"
                                value={formData.mobile}
                                onChange={handleInputChange}
                            />
                            <textarea
                                onClick={handleFocusEvent}
                                maxLength={256}
                                placeholder='Message'
                                id="message"
                                name="message"
                                className="bg-transparent border rounded mb-4 min-h-[11rem] pl-[1rem] pr-[1rem] w-full h-auto leading-tight p-2 px-5 text-text"
                                value={formData.message}
                                onChange={handleInputChange}
                            />

                            <Button
                                className='rounded-md p-3 border tracking-tight bg-background hover:bg-buttonHover md:text-sm'
                                type='submit'
                                title='SUBMIT'
                                variant=''
                                isLoading={isLoading}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page