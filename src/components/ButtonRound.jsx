'use client'
import React from 'react'
import { motion } from 'framer-motion';

const ButtonRound = ({ text, isHighlight }) => {
    return (
        <div className=''>
        <motion.div className={`cursor-pointer rounded-full afacad font-semibold text-[20px] pt-2 pb-2 pl-7 pr-7`}
        initial={{ 
            scale: 1,
            color: isHighlight ? '#00275C' : '#FFFFFF',
            backgroundColor: isHighlight ? '#FFC809' : '#00275C'
        }}
        whileHover={{ 
            scale: 1.05,
            color: '#00275C',
            backgroundColor: isHighlight ? '#EAEEF3' : '#FFC809'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15, ease: "anticipate" }}
        >
            <p>{text}</p>
        </motion.div>
        </div>
    )
}

export default ButtonRound

