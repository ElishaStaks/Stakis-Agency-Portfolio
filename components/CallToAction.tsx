import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const CallToAction = () => {
    return (
        <section className='mx-auto relative'>
            <div className='max-container padding-container pt-[8rem] pb-[8rem] md:pt-[10rem] md:pb-[10rem] lg:pt-[12rem] lg:pb-[12rem]'>
                <div className='w-full max-w-[81.25rem]'>
                    <div className='flex-col justify-center items-center flex md:flex-row'>
                        <div className='grid gap-6 grid-cols-1 relative md:grid-cols-2 md:gap-8'>
                            <Link href="/contact" className='w-full flex-col justify-center pl-[10%] pr-[10%] flex relative top-0 bottom-0 left-0 right-0 md:pl-0'>
                                <Image src={"/pngs/handshake.png"} alt='Responsive no image' className='rounded-full' width={2000} height={2000} />
                            </Link>
                            <div className='flex-col flex items-center md:items-start md:justify-center md:max-w-[31rem]'>
                                <div className='pb-5'>
                                    <div className='pb-3'>
                                        <h2 className='font-medium leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center md:text-left'>
                                            Curious to explore the possibilities for your website?
                                        </h2>
                                    </div>
                                    <p className='text-center md:text-left'>
                                        Contact us to discover the potential together!
                                    </p>
                                </div>
                                <Button
                                    href="/contact"
                                    type="button"
                                    title="LETS CHAT"
                                    icon='/svgs/right-arrow-icon.svg'
                                    variant=''
                                    className='rounded-md p-[0.85rem] pr-[1.5rem] pb-[0.75rem] pl-[1.5rem] tracking-tight border-2 hover:bg-buttonHover md:text-sm'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction







{/* <Link href="/contact" className='w-full'>
    <Image src="/no-image-available.webp" alt="Call to action image" width={2000} height={2000} />
</Link>
<div className='max-w-[31rem] flex-col flex items-start'>
    <div className='pb-5'>
        <div className='pb-3'>
            <h2 className='font-medium leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center md:text-left'>
                Curious to explore the possibilities for your website?
            </h2>
        </div>
        <p className='text-white text-center md:text-left'>
            Contact us to discover the potential together!
        </p>
    </div>
    <Button
        href="/contact"
        type="button"
        title="LETS CHAT"
        variant=''
        className='rounded-md p-3 tracking-tight border bg-[#0527cf] border-[#0527cf] hover:bg-[#283b43] hover:border-[#283b43] md:text-sm'
    />
</div> */}