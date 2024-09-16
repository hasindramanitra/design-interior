import React from 'react'

export default function Newsletter() {
    return (
        <div className='max-w-[500px] mx-auto space-y-5 py-14'>
            <h1 className='text-3xl font-bold font-serif text-center'>Subscribe to our Newsletter</h1>
            <p className='max-w-[300px] mx-auto text-gray-500 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum placeat quae quod dolor, facilis soluta reiciendis itaque.</p>
            {/* form here */}
            <div className='!mt-10 flex justify-center'>
                <input type="text" placeholder='Enter your email' className='px-4 py-4 border-[1px] border-black '/>
                <button className='bg-black text-white px-4 py-4 uppercase'>Subscribe</button>
            </div>
        </div>
    )
}
