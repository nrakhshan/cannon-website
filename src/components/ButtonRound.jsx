import React from 'react'

const ButtonRound = ({ text, isHighlight }) => {
    const buttonColour = isHighlight ? 'bg-accent text-base hover-bg-invert' : 'bg-base text-invert hover-bg-accent hover-text-base';
    return (
        <div className=''>
        <div className={`cursor-pointer rounded-full afacad font-semibold text-[20px] pt-2 pb-2 pl-7 pr-7 ${buttonColour} hover:scale-105 transition-all duration-150 ease-in-out`}>
            <p>{text}</p>
        </div>
        </div>
    )
}

export default ButtonRound

