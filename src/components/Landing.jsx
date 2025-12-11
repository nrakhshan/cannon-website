'use client';
import { React, useState, useEffect }  from 'react'
import { motion } from 'framer-motion';
import issues from '../data/issues.json';
import Image from 'next/image';

const Landing = () => {
    return (
        <div className=''>
            <motion.div 
            className="cantata text-[14vw] leading-none uppercase text-left w-[70%] m-auto mt-50 z-10">
                The Cannon
            </motion.div>
            <motion.div 
            className="cantata text-[3vw] leading-none uppercase text-right pr-10 w-[70%] m-auto z-10">
                EST. 1978
            </motion.div>

            <motion.div 
            className="afacad text-[clamp(24px,3vw,40px)] font-bold leading-none text-left pl-2 lg:pl-5 w-[70%] m-auto mt-20 mb-10 z-10">
                Read the latest issue 
                <img
                    width="45px"
                    height="45px"
                    src="/assets/arrowright.svg"
                    alt="Cover Image"
                    className="inline ml-5 rotate-90"
                />
            </motion.div>
            
            <div className="w-full overflow-x-hidden no-scrollbar mb-50">
            <motion.div 
                className='flex mt-20 px-10 gap-4'
                animate={{ x: ['-100px', `-${((420 + 4*4) * issues.length) + 100}px`] }}
                transition={{ 
                    duration: 2 * issues.length, 
                    repeat: Infinity, 
                    ease: 'linear' 
                }}
            >
                {[...issues, ...issues].map((item, index) => (
                    <motion.div 
                        key={index}
                        className='flex-shrink-0'
                    >
                        <div className="relative overflow-hidden rounded-md w-[420px] h-[540px]">
                            <Image
                                src={item.thumbnail}
                                alt="Cover Image"
                                fill
                                className="object-cover pointer-events-none"
                                draggable={false}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </div>
    )
}

export default Landing
