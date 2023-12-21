import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className='max-container padding-container'>
                <div className='pt-[1.5rem] pb-[2.125rem]'>
                    <div className='w-full max-w-[81.25rem]'>
                        <div className='flex flex-wrap gap-x-5 justify-between items-center mb-[2rem] md'>
                            <Link href="/" className="w-auto">
                                <Image src="/pngs/Stakis-logo-final.png" alt="responsive stakis image logo" className='rounded-full' width={70} height={70} />
                            </Link>
                            <div className='w-full order-1 pt-[2rem] text-center flex flex-wrap justify-center items-center md:pt-0 md:w-auto md:order-none'>
                                <Link href="#work" className='pl-[1.12rem] pr-[1.125rem] p-2.5 inline-block transition-all hover:text-[#954800]'>Work</Link>
                                <Link href="/about" className='pl-[1.12rem] pr-[1.125rem] p-2.5 inline-block transition-all hover:text-[#954800]'>About Us</Link>
                                <Link href="/contact" className='pl-[1.12rem] pr-[1.125rem] p-2.5 inline-block transition-all hover:text-[#954800]'>Contact Us</Link>
                            </div>
                            <div className='flex gap-x-4 justify-center'>
                                <Link
                                    href="/"
                                    target='_blank'
                                    className='p-1'
                                >
                                    <Image src="/svgs/instagram-icon.svg" alt='Instagram' width={32} height={32} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/stakis/"
                                    target='_blank'
                                    className='p-1'
                                >
                                    <Image src="/svgs/linkedin-icon.svg" alt='LinkedIn' width={32} height={32} />
                                </Link>
                            </div>
                        </div>
                        <div className='text-center justify-center items-center flex'>
                            <div className='text-[#ee9c004d]'>
                                @ 2024 Stakis | All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer