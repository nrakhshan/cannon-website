import React, { useRef, useState } from 'react'
import competition from '../data/competition.json'
import Image from 'next/image'

const Winners = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);

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
        try { scrollerRef.current.releasePointerCapture?.(e?.pointerId); } catch { }
        scrollerRef.current.classList.remove('grabbing');
    }

    return (
        <div className='flex'>
            <div className="flex flex-wrap gap-7 justify-between items-center w-full lg:px-[6%] px-[9%] text-[18px]">
                <div className='flex flex-wrap justify-between w-full gap-7'>
                    <div className="flex border-b border-secondary">
                        {competition.categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(index)}
                                className={`afacad px-6 py-3 text-lg font-bold uppercase ${selectedCategory === index
                                    ? "border-b-2 border-secondary"
                                    : "opacity-50"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className='flex invert brightness-1'>
                        <button
                            aria-label="scroll left"
                            className="flex-shrink-0 cursor-pointer"
                            onClick={() => scrollLeft(scrollerRef.current, 310)}
                        >
                            <img src="assets/arrowleft.svg" alt="Left Arrow" />
                        </button>

                        <button
                            aria-label="scroll right"
                            className="flex-shrink-0 cursor-pointer"
                            onClick={() => scrollRight(scrollerRef.current, 310)}
                        >
                            <img src="assets/arrowright.svg" alt="Right Arrow" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollerRef}
                    className="flex-grow flex pl-5 pr-5 flex-nowrap overflow-x-auto gap-5 justify-between items-start no-scrollbar cursor-grab"
                    style={{ touchAction: 'pan-y' }}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onPointerLeave={endDrag}
                >
                    {competition.categories[selectedCategory]?.issues.map((issue) =>
                        issue.submissions.map((submission, index) => (
                            <div key={index} className="w-full sm:w-[100%] md:w-[32%] lg:w-[32%] shrink-0 text-center items-center h-[800px] overflow-scroll">
                                <h3 className="afacad font-semibold text-xl mb-3">{submission.award}</h3>
                                <h2 className="afacad font-bold text-2xl mt-5 uppercase">{submission.title}</h2>
                                <h3 className="afacad text-lg pb-5">Submitted to <p className="italic inline">{issue.name}</p> by <strong>{submission.credit}</strong></h3>
                                {submission.image && (<div className="w-[100%] relative overflow-hidden shadow-md mb-5" style={{ aspectRatio: '4 / 3' }}>
                                    <Image
                                        src={submission.image.file}
                                        alt={submission.image.caption}
                                        fill
                                        className="object-cover"
                                        draggable={false}
                                        style={{ WebkitUserDrag: 'none' }}
                                        priority={false}
                                    />
                                </div>)}
                                <div className="cantata font-light text-sm whitespace-pre-wrap text-left [&_p]:mb-3 [&_h2]:font-bold" dangerouslySetInnerHTML={{ __html: submission.text }} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Winners
