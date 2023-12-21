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
                        <h1 className='text-white font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-6xl'>
                            Creating Outstanding Web Experiences for Your <span className='text-text'>Success</span>
                        </h1>
                    </div>

                    <div className='mt-[3rem] flex-col-reverse items-center flex justify-between relative md:mt-[1.6rem] md:flex-row'>
                        <div className='w-auto max-w-none mt-0 flex-col items-start flex md:w-[30%] md:max-w-[22.5rem]'>
                            <p className='text-text line-1.5 mb-[1.25rem] mt-[1.25rem]'>
                                We specialize in empowering
                                small and medium-sized businesses through
                                cutting-edge web solutions. Elevate your
                                online presence with our tailored web
                                development services, designed for growth
                                and success.
                            </p>
                            <Button
                                href='/contact'
                                className='rounded-md p-3 tracking-tight border-2 hover:bg-buttonHover md:text-sm'
                                type='button'
                                title='START A PROJECT'
                                variant=''
                            />
                        </div>
                        <div className='w-full max-w-none z-1 relative md:w-1/2 md:max-w-[42rem]'>
                            <Image
                                src='/pngs/hero-image.png'
                                alt='Responsive image of a developer coding on a laptop'
                                width={2000}
                                height={2000}
                            />
                        </div>
                        <Link
                            href="/#work"
                            className='w-auto max-w-[7rem] absolute top-0 bottom-auto left-0 right-0 mb-0 justify-center items-center flex md:relative md:top-auto md:bottom-auto md:left-auto md:right-auto md:max-w-[6.25rem] lg:mt-[10vh] lg:max-w-[7.25rem] xl:max-w-[8.25rem] 2xl:max-w-[9.25rem]'
                        >
                            <div className='w-full justify-center items-center flex relative animate-spin-slow'>
                                <Image className='z-1 w-full relative' src="/svgs/cta-circular.svg" alt="responsive hero arrow" width={2000} height={2000} />
                            </div>
                            <div className='z-1 max-w-[2.25rem] absolute lg:max-w-[3.25rem] xl:max-w-[4.25rem]'>
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