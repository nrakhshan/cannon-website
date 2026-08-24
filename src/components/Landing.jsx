'use client';
import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import issues from '../data/issues.json';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
    const hero = issues[0].hero;

    return (
        <div className='group relative h-[max(800px,132vw)] overflow-hidden -mb-20'>
            {hero && (<Image
                src={hero.image}
                alt={issues[0].name}
                fill
                className="object-cover opacity-70"
                draggable={false}
                style={{ WebkitUserDrag: 'none' }}
                priority={false}
            />)}
            <div className="relative z-10 mx-auto w-[70%] text-shadow-lg">
                <motion.div
                    className="cantata text-[14vw] leading-none uppercase text-left mt-50">
                    The Cannon
                </motion.div>
                <motion.div
                    className="cantata text-[3vw] leading-none uppercase text-right pr-10">
                    EST. 1978
                </motion.div>

                <motion.div
                    className="afacad text-[clamp(24px,3vw,40px)] font-bold leading-none text-left pl-2 lg:pl-5 mt-20 mb-10">
                    Read the latest issue

                    <Link href="/issues?issue=0&page=1">
                        <img
                            width="45px"
                            height="45px"
                            src="/assets/arrowright.svg"
                            alt="Cover Image"
                            className="inline ml-5 invert brightness-1"
                        />
                    </Link>
                </motion.div>
            </div>
            {hero && (<div className="absolute bottom-0 right-0 flex items-end justify-between p-3 afacad text-sm font-bold">
                <span className="rounded-full text-primary px-1 py-1">
                    Illustrated by {hero.credit}
                </span>
            </div>)}
        </div>
    )
}

export default Landing
