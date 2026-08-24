'use client';
import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import issues from '../data/issues.json';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
    return (
        <div className=''>
            <motion.div
                className="cantata text-[14vw] leading-none uppercase text-left w-[70%] m-auto mt-50">
                The Cannon
            </motion.div>
            <motion.div
                className="cantata text-[3vw] leading-none uppercase text-right pr-10 w-[70%] m-auto">
                EST. 1978
            </motion.div>

            <motion.div
                className="afacad text-[clamp(24px,3vw,40px)] font-bold leading-none text-left pl-2 lg:pl-5 w-[70%] m-auto mt-20 mb-10">
                Read the latest issue

                <Link href="/issues?issue=0&page=1" className='z-100'>
                    <img
                        width="45px"
                        height="45px"
                        src="/assets/arrowright.svg"
                        alt="Cover Image"
                        className="inline ml-5 rotate-90 invert brightness-1"
                    />
                </Link>
            </motion.div>
        </div>
    )
}

export default Landing
