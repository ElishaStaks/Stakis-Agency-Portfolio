import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const HomeHero = () => {
    return (
        <section className='mx-auto relative'>
            <div className='max-container padding-container pt-[2rem] pb-[2rem] md:pt-[3.5rem] md:pb-[3.5rem]'>
                <div className='z-10 flex-col justify-between flex relative'>
                    <div className='max-w-[53.75rem]'>
                        <h1 className='text-[#ee9c00] font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'>
                            Crafting Exceptional Web Experiences for Your Success
                        </h1>
                    </div>

                    <div className='mt-[3rem] flex-col-reverse items-center flex justify-between relative md:mt-[1.6rem] md:flex-row'>
                        <div className='w-auto max-w-none mt-0 flex-col items-start flex md:w-[30%] md:max-w-[22.5rem]'>
                            <p className='line-1.5 mb-[1.25rem] mt-[1.25rem]'>
                                We specialize in empowering
                                small and medium-sized businesses through
                                cutting-edge web solutions. Elevate your
                                online presence with our tailored web
                                development services, designed for growth
                                and success.
                            </p>
                            <Button
                                className='rounded-md p-3 tracking-tight border bg-[#0527cf] border-[#0527cf] hover:bg-[#283b43] hover:border-[#283b43] md:text-sm'
                                type='button'
                                title='START A PROJECT'
                                variant=''
                            />
                        </div>
                        <div className='w-full max-w-none z-1 relative md:w-1/2 md:max-w-[42rem]'>
                            <Image src='/no-image-available.webp' alt='Responsive no image' className='' width={2000} height={2000} />
                        </div>
                        <Link
                            href="/contact"
                            className='w-auto max-w-[7rem] sm:absolute sm:top-0 sm:bottom-auto sm:left-auto sm:right-0 mt-0 justify-center items-center flex md:relative md:top-auto md:bottom-auto md:left-auto md:right-auto md:max-w-[6.25rem]'
                        >
                            <div className='w-full justify-center items-center flex relative animate-spin-slow'>
                                <Image className='z-1 w-full relative' src="/svgs/cta-circular.svg" alt="responsive hero arrow" width={100} height={100} />
                            </div>
                            <div className='z-1 max-w-[2.25rem] absolute'>
                                <Image className='' src="/svgs/hero-arrow.svg" alt="responsive hero arrow" width={50} height={45} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero