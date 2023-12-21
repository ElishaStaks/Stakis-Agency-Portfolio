import React from 'react'
import Button from './Button'
import Image from 'next/image'

const servicesList = [
    {
        title: "Custom Web Development",
        description: "We specialize in developing highly scalable and meticulously crafted websites. Share your designs with us, and we'll transform them into pixel-perfect, seamless online experiences tailored to your needs.",
        image: "/pngs/custom-web-dev.png",
    },
    {
        title: "Web Maintenance",
        description: "From routine updates to proactive enhancements, we ensure your website remains secure, performs optimally, and continues to support your business growth.",
        image: "/pngs/gears.png",
    }
]

const Services = () => {
    return (
        <section id='services' className='mx-auto relative'>
            <div className='max-container padding-container pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] lg:pt-[5.5rem] lg:pb-[5.5rem]'>
                <div className='flex-col mb-[4rem] flex gap-4 z-2 w-full justify-between relative md:mb-[3rem] md:gap-y-4 md:flex-row lg:mb-[5.5rem] lg:gap-6 lg:max-w-[79.125rem]'>
                    <div className='max-w-none md:max-w-[20.25rem] lg:max-w-[26.25rem]'>
                        <h2 className='font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'>
                            Services we can provide for you!
                        </h2>
                    </div>
                    <div className='max-w-none flex-col items-start flex md:max-w-[30.625rem]'>
                        <div className='pb-4'>
                            <p>
                                Explore our tailored web development services
                                designed to enhance your online presence and
                                elevate your business growth
                            </p>
                        </div>
                        <Button
                            href="/contact"
                            type="button"
                            title="LETS CHAT"
                            variant=''
                            className='rounded-md p-3 tracking-tight border-2 hover:bg-buttonHover md:text-sm'
                        />
                    </div>
                </div>
                <div className='ml-auto mr-auto relative'>
                    <div className='flex gap-10 z-1 w-full flex-col sticky top-0'>
                        {servicesList.map((service) => (
                            <ServiceItem
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

type ServiceItem = {
    title: string;
    description: string;
    image: string;
}

const ServiceItem = ({ title, description, image }: ServiceItem) => {
    return (
        <div className='relative top-0 bottom-0 left-0 right-0'>
            <div className='grid gap-6 grid-cols-1 relative md:grid-cols-2 md:gap-8'>
                <div className='w-full flex-col justify-center pl-[10%] pr-[10%] flex relative top-0 bottom-0 left-0 right-0 md:pl-0'>
                    <Image src={image} alt='Responsive no image' className='' width={2000} height={2000} />
                </div>
                <div className='flex-col justify-center items-center flex'>
                    <div className='max-w-none md:max-w-[26.25rem]'>
                        <div className='pb-2'>
                            <h3 className='font-medium leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                                {title}
                            </h3>
                        </div>
                        <p className='text-white'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services