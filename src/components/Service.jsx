import React from 'react'
import { BiSolidDollarCircle } from 'react-icons/bi';
import { FaVectorSquare } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { SlideLeft, SlideUp } from '../animation/animate';


const ServiceCard = [
    {
      id: 1,
      title: "Luxury Facilities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
      icon: <FaVectorSquare />,
      link: "#",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Quality Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
      icon: <FaPenToSquare />,
      link: "#",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Affordable Price",
      description:
        "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      icon: <BiSolidDollarCircle />,
      link: "#",
      delay: 0.6,
    },
  ];

export default function Service() {
  return (
    <div>
        <div className="container py-20">
          {/* heading title */}
          <div className='space-y-3 text-center max-w-[350px] mx-auto mb-8'>
            <motion.h1 variants={SlideUp(0.2)} initial="initial" whileInView={"animate"} className='text-3xl font-bold font-serif'>What we provide</motion.h1>
            <motion.p variants={SlideUp(0.4)} initial="initial" whileInView={"animate"} className='text-gray-500 text-sm'>Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* card section */}
                {
                    ServiceCard.map((serviceCard) => (
                        <motion.div
                          variants={SlideUp(serviceCard.delay)}
                          initial="initial"
                          whileInView={"animate"}
                           key={serviceCard.id} className='space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300'>
                            <div className='inline-block text-xl border-[1px] border-black rounded-full p-3'>
                                {serviceCard.icon}
                            </div>
                            <p className='text-2xl font-bold font-serif'>{serviceCard.title}</p>
                            <p className='text-gray-400 text-xs'>{serviceCard.description}</p>
                            <a href={serviceCard.link} className='inline-block border-b border-black'>Learn More</a>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
