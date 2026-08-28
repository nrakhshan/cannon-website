'use client'
import React, { useRef } from 'react'

import members from '../data/members.json'
import Image from 'next/image'

const Profiles = () => {
  const scrollerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const scrollLeft = () => {
    if (!scrollerRef.current) return;

    scrollerRef.current.scrollBy({
      left: -scrollerRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!scrollerRef.current) return;

    scrollerRef.current.scrollBy({
      left: scrollerRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const onPointerDown = (e) => {
    if (!scrollerRef.current) return;

    if (e.target && e.target.closest && e.target.closest('[data-no-drag="true"]')) {
      return;
    }

    isDown.current = true;
    scrollerRef.current.setPointerCapture?.(e.pointerId);
    startX.current = e.clientX;
    startScroll.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.classList.add('grabbing');
  }

  const onPointerMove = (e) => {
    if (!isDown.current || !scrollerRef.current) return;
    const walk = e.clientX - startX.current;
    scrollerRef.current.scrollLeft = startScroll.current - walk;
  }

  const endDrag = (e) => {
    if (!scrollerRef.current) return;
    isDown.current = false;
    try { scrollerRef.current.releasePointerCapture?.(e?.pointerId); } catch { }
    scrollerRef.current.classList.remove('grabbing');
  }

  return (
    <div className=''>
      <div className="flex gap-7 justify-between items-center w-full lg:px-[6%] pt-7 px-[9%] text-[18px]">
        <button
          aria-label="scroll left"
          className="flex-shrink-0 cursor-pointer invert brightness-1"
          onClick={scrollLeft}
        >
          <img src="assets/arrowleft.svg" alt="Left Arrow" />
        </button>

        <div
          ref={scrollerRef}
          className="flex-grow flex pl-5 pr-5 flex-nowrap overflow-x-auto gap-5 justify-start items-start no-scrollbar cursor-grab snap-x snap-mandatory scroll-smooth"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          {members.map((member, index) => (
            <div key={index} className="w-[100%] md:w-[31%] lg:w-[19%] shrink-0 snap-start text-center">
              {member.photo && (<div className="w-full relative overflow-hidden rounded-lg shadow-md" style={{ aspectRatio: '3 / 4' }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  draggable={false}
                  style={{ WebkitUserDrag: 'none' }}
                  priority={false}
                />
              </div>)}
              <h2 className="afacad font-bold text-2xl mt-5">{member.name}</h2>
              <h3 className="afacad text-lg pb-5">{member.role}</h3>
              <p className="cantata italic font-light text-sm whitespace-pre-line">"{member.quote}"</p>
              <p className='afacad mt-5'>- {member.speaker ? `${member.speaker}` : `${member.source}`}{member.source && member.speaker && `, (${member.source})`}</p>
            </div>))}
        </div>

        <button
          aria-label="scroll right"
          className="flex-shrink-0 cursor-pointer invert brightness-1"
          onClick={scrollRight}
        >
          <img src="assets/arrowright.svg" alt="Right Arrow" />
        </button>
      </div>
    </div>
  )
}

export default Profiles