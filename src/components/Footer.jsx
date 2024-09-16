import React from 'react'
import Logo from '../assets/logo.png'
import { FaCopyright, FaPhone, FaVoicemail } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { SlideUp } from '../animation/animate'




export default function Footer() {
    return (
        <footer>
            <div className='container py-11'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* company info */}
                    <div className='space-y-4 font-semibold'>
                        <div className='flex items-center space-x-3'>
                            <img src={Logo} alt="" className='w-6' />
                            <p className='text-2xl font-semibold'>Interior</p>
                        </div>
                        <p>Greater Noida, Uttar Pradesh, India</p>
                        <p>@ 2024 TCJ All rights reserved</p>
                    </div>
                    {/* footer link */}
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                            <h1 className='text-xl font-semibold'>About us</h1>
                            <ul className='text-sm space-y-4'>
                                <li>
                                    <a href="#">Our story</a>
                                </li>
                                <li>
                                    <a href="#">Designer</a>
                                </li>
                                <li>
                                    <a href="#">Craftmanship</a>
                                </li>
                                <li>
                                    <a href="#">Sustainability</a>
                                </li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-xl font-semibold'>Support</h1>
                            <ul className='text-sm space-y-4'>
                                <li>
                                    <a href="#">FAQ's</a>
                                </li>
                                <li>
                                    <a href="#">Shipping & Returns</a>
                                </li>
                                <li>
                                    <a href="#">Care Guide</a>
                                </li>
                                <li>
                                    <a href="#">Warranty</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* contact section */}
                    <div className='space-y-4'>
                        <h1 className='text-xl font-semibold'>Contact us</h1>
                        <ul className='text-sm space-y-4'>
                            <li className='flex items-center space-x-3'>
                                <FaPhone/>
                                <a href="#">+91 12467852956</a>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <FaVoicemail/>
                                <a href="#">contact.thecodingjourney@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='text-center text-sm font-semibold'>
                    <FaCopyright/>; 2023 TCJ. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
