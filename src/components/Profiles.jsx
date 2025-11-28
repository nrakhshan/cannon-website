'use client'
import React from 'react'
import members from '../data/members.json'
import Image from 'next/image'

const Profiles = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-20 justify-center items-start w-full lg:px-[6%] pt-24 px-[9%] text-[18px]">
        {members.map((member, index) => (
          <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 text-center">
            {/* full-column width image, cropped via object-cover */}
            <div className="w-full relative overflow-hidden rounded-lg shadow-md" style={{ aspectRatio: '3 / 4' }}>
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
            <h2 className="afacad font-bold text-2xl mt-5">{member.name}</h2>
            <h3 className="afacad text-lg pb-5">{member.role}</h3>
            <p className="cantata italic font-light">"{member.quote}"</p> 
            <p className='afacad mt-5'>- {member.speaker ? `${member.speaker}` : `${member.source}`}{member.source && member.speaker && `, (${member.source})`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profiles