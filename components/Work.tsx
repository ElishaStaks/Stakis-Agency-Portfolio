import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

const portfolioList = [
    {
        title: "Spiff Commerce",
        description: "A platform that helps brands create customized experiences for customers.",
        image: "/no-image-available.webp",
        href: "/case-study/spiff-commerce",
        borderGradient: 'border-gradient-pink-blue'
    },
    {
        title: "The Eggsperts",
        description: "A Melbourne-based business at Victoria Market, showcasing their premium range of eggs and honey.",
        image: "/no-image-available.webp",
        href: "/case-study/the-eggsperts",
        borderGradient: 'border-gradient-blue-pink'
    }
]

const Work = () => {
    return (
        <section id='work' className='mx-auto relative'>
            <div className='max-container padding-container pt-[5rem] pb-[4rem]'>
                <div className='w-full max-w-[81.25rem]'>
                    <div className='z-3 relative'>
                        <div className='flex-col grid grid-row-2 gap-x-4 gap-y-8 mb-[3rem] max-w-[64.5rem] justify-between'>
                            <h2 className='font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'>
                                Our Work
                            </h2>
                            <div className='max-w-[30rem] md:max-w-[40rem]'>
                                <p>
                                    Discover our portfolio showcasing the latest projects,
                                    demonstrating our commitment to delivering high-quality
                                    web solutions for diverse businesses.
                                </p>
                            </div>
                        </div>
                        <div className='flex z-10 flex-wrap justify-between relative'>
                            {portfolioList.map((portfolio) => (
                                <WorkItem
                                    key={portfolio.title}
                                    title={portfolio.title}
                                    description={portfolio.description}
                                    image={portfolio.image}
                                    href={portfolio.href}
                                    borderGradient={portfolio.borderGradient}
                                />
                            ))}
                        </div>

                        {/* <div className='mt-[6rem] justify-center flex'>
                            <Button
                                href="/work"
                                type="button"
                                title="EXPLORE MORE WORK"
                                icon='/svgs/right-arrow-icon.svg'
                                variant=''
                                className='rounded-md p-[0.85rem] pr-[1.5rem] pb-[0.75rem] pl-[1.5rem] tracking-tight border-2 hover:bg-buttonHover md:text-sm'
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

type WorkItem = {
    title: string;
    description: string;
    image: string;
    href: string;
    borderGradient: string;
}

const WorkItem = ({ title, description, image, href, borderGradient }: WorkItem) => {
    return (
        <Link href={href} className='w-[48%] max-w-[100%] inline-block'>
            <div className={`${borderGradient} p-3`}>
                <div className='rounded-sm pb-[75%] relative overflow-hidden'>
                    <Image
                        src={image}
                        alt="test"
                        className='z-1 w-full h-full object-cover absolute top-0 bottom-0 left-0 right-0'
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>
            <div className='flex-col flex mt-[1.5rem]'>
                <h3 className='mb-2 font-medium leading-tight text-3xl lg:text-4xl'>{title}</h3>
                <p className='text-white'>
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default Work