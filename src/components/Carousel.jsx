import React, { useRef } from 'react'
import Image from 'next/image'

const Carousel = ({ issues, issue, setIssue, className }) => {
    const scrollerRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const startScroll = useRef(0);

    const scrollLeft = (el, amount = 300) => {
        if (!el) return
        el.scrollBy({ left: -amount, behavior: 'smooth' })
    }

    const scrollRight = (el, amount = 300) => {
        if (!el) return
        el.scrollBy({ left: amount, behavior: 'smooth' })
    }

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
        try { scrollerRef.current.releasePointerCapture?.(e?.pointerId); } catch {}
        scrollerRef.current.classList.remove('grabbing');
    }

    const handleSelect = (idx) => {
      setIssue(idx);
    }

    const handleKeySelect = (e, idx) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect(idx);
      }
    }

return (
    <div className={className}>
        <div className="flex gap-4 justify-between items-center mx-[9%] lg:mx-[6%]">
            <button
                aria-label="scroll left"
                className="flex-shrink-0 cursor-pointer"
                onClick={() => scrollLeft(scrollerRef.current, 310)}
            >
                <img src="assets/arrowleft.svg" alt="Left Arrow" />
            </button>

            <div
                ref={scrollerRef}
                className="flex-grow flex pl-5 pr-5 flex-nowrap overflow-x-auto gap-20 justify-between items-start no-scrollbar cursor-grab"
                style={{ touchAction: 'pan-y' }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerLeave={endDrag}
            >
                {issues.map((issueItem, index) => (
                    <div 
                        key={index} 
                        className={`${issue === index ? 'bg-secondary' : ''} rounded-lg flex-none w-[230px] text-center`}
                        tabIndex={0}
                        data-no-drag="true"
                        onClick={() => handleSelect(index)}
                        onKeyDown={(e) => handleKeySelect(e, index)}
                    >
                        <div
                          role="button"
                          className={`relative overflow-hidden rounded-lg shadow-md aspect-[3/4] cursor-pointer transition-all duration-150`}
                        >
                            <Image
                                src={issueItem.thumbnail}
                                alt={issueItem.name}
                                fill
                                className="object-cover pointer-events-none"
                                draggable={false}
                                style={{ WebkitUserDrag: 'none' }}
                                priority={false}
                            />
                        </div>

                        <h2 className="afacad font-bold text-2xl mt-5">{issueItem.name}</h2>
                        <h3 className="afacad text-lg pb-5">VOL {issueItem.volume}</h3>
                        <h3 className="afacad text-lg pb-5">{issueItem.issue}</h3>
                    </div>
                ))}
            </div>

            <button
                aria-label="scroll right"
                className="flex-shrink-0 cursor-pointer"
                onClick={() => scrollRight(scrollerRef.current, 310)}
            >
                <img src="assets/arrowright.svg" alt="Right Arrow" />
            </button>
        </div>
    </div>
)}

export default Carousel