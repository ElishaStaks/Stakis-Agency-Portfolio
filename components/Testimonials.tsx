'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const testimonials = [
    {
        name: "Daniel Perogiannis",
        businessName: "Business Owner, The Eggsperts",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare massa eget egestas purus viverra accumsan in. Mattis enim ut tellus elementum sagittis vitae et.",
        image: "/no-image-available.webp",
    },
    {
        name: "Test Name",
        businessName: "Business Owner, The Test",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare massa eget egestas purus viverra accumsan in. Mattis enim ut tellus elementum sagittis vitae et.",
        image: "/no-image-available.webp",
    },
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <section className='mx-auto relative mt-[4rem] mb-[-2px] overflow-hidden'>
            <div className='max-container padding-container pt-[4rem] pb-[4rem]'>
                <div className='z-2 max-w-[970px] ml-auto mr-auto relative'>
                    <div className='max-w-[38.75rem] lg:max-w-[45rem] ml-auto mr-auto text-center mb-[4.5rem]'>
                        <h2
                            className='font-medium leading-tight text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl'
                        >
                            What Our Clients say about Us
                        </h2>
                    </div>
                    <div className='relative'>
                        <div className='z-2 flex-col justify-start flex items-stretch relative overflow-visible'>
                            <div className='flex-row flex-1 justify-between items-end'>
                                {testimonials.map((testimony, index) => (
                                    <div key={testimony.name} className={index === currentIndex ? 'block' : 'hidden'}>
                                        <TestimonialItem
                                            name={testimony.name}
                                            businessName={testimony.businessName}
                                            quote={testimony.quote}
                                            image={testimony.image}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-5 justify-between mt-[1.5rem] ml-auto'>
                            <button type='button' className='w-[5rem] min-h-[4rem] border-2 border-[#ff66cc] justify-center items-center flex text-white text-2xl' onClick={handlePrev}>
                                &lt;
                            </button>
                            <div className='w-full justify-center items-center flex text-base gradient-border'>
                                <div className='text-white text-1xl'>
                                    {currentIndex + 1}
                                </div>
                                <div className='text-white text-1xl'>/</div>
                                <div className='text-white text-1xl'>{testimonials.length}</div>
                            </div>
                            <button type='button' className='w-[5rem] min-h-[3rem] border-2 border-[#66ccff] justify-center items-center flex text-white text-2xl' onClick={handleNext}>
                                &gt;
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

type TestimonialItem = {
    name: string;
    businessName: string;
    quote: string;
    image: string;
}

const TestimonialItem = ({ name, businessName, quote, image }: TestimonialItem) => {
    return (
        <div className='flex-none justify-center flex items-stretch self-stretch ml-[auto] mr-[auto]'>
            <div className='h-full gradient-border flex-col flex-1 justify-center flex items-stretch p-[4.5rem] pr-[4rem] pb-[5rem] pl-[4rem] relative'>
                <div className='flex-col items-start flex transition-opacity duration-200'>
                    <div className='items-center mb-[1.5rem] flex'>
                        <div className='w-[4rem] h-[4rem] max-w-[4rem] rounded-full overflow-hidden'>
                            <Image
                                src={image}
                                alt=""
                                className='object-cover w-full h-full'
                                width={2000}
                                height={2000}
                            />
                        </div>
                        <div className='flex-col items-start flex ml-5'>
                            <div className='text-base font-bold text-white'>
                                {name}
                            </div>
                            <div className='text-white'>
                                {businessName}
                            </div>
                        </div>
                    </div>
                    <p className='italic leading-relaxed text-2xl text-white'>
                        "{quote}"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials