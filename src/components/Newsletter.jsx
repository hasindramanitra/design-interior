import React from 'react'
import { delay, motion } from 'framer-motion'
import { SlideUp } from '../animation/animate'

export default function Newsletter() {
    return (
        <div className='max-w-[500px] mx-auto space-y-5 py-14'>
            <motion.h1 
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className='text-3xl font-bold font-serif text-center'>Subscribe to our Newsletter</motion.h1>
            <motion.p 
            variants={SlideUp(0.4)}
            initial="initial"
            animate="animate"
            className='max-w-[300px] mx-auto text-gray-500 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum placeat quae quod dolor, facilis soluta reiciendis itaque.</motion.p>
            {/* form here */}
            <motion.div 
            variants={SlideUp(0.6)}
            initial="initial"
            animate="animate"
            className='!mt-10 flex justify-center'>
                <input type="text" placeholder='Enter your email' className='px-4 py-4 border-[1px] border-black '/>
                <button className='bg-black text-white px-4 py-4 uppercase'>Subscribe</button>
            </motion.div>
        </div>
    )
}
