'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const NAV_LINKS = [
    { href: '/work', key: 'work', label: '  Work' },
    { href: '/about', key: 'about', label: 'About Us' },
    { href: '#services', key: 'services', label: 'Services' },
    { href: '/contact', key: 'contact', label: 'Contact Us' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative z-30 py-6">
            <div className="max-container flexBetween padding-container">
                <div className='flex'>
                    <Link href="/" className="text-2xl font-semibold">
                        <Image src="/pngs/Stakis-logo-final.png" alt="responsive stakis image logo" className='rounded-full' width={70} height={70} />
                    </Link>
                </div>

                {/* Display the menu icon on screens smaller than lg */}
                <Image
                    className="inline-block cursor-pointer lg:hidden"
                    src="/svgs/grid-icon.svg"
                    alt="menu"
                    width={60}
                    height={60}
                    onClick={handleMenuClick}
                />

                {/* On larger screens (lg and xl), display the regular navigation links and shop now button */}
                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                            className="flexCenter cursor-pointer pb-1.5 transition-all hover:text-textHover"
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
                <div className="lg:flexCenter hidden">
                    <Button
                        className="border-2 hover:bg-buttonHover rounded-md p-3"
                        href="/contact"
                        type="button"
                        title="START A PROJECT"
                        variant=""
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavBar