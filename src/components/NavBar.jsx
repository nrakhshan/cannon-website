"use client";
import { React, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/menu.svg';
import Close from '../../public/assets/close.svg';
import Image from 'next/image';
import ButtonRound from './ButtonRound';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
    </div>
  )
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const DesktopNav = () => {
  const linkStyle = "afacad font-semibold text-[20px] text-base hover-text-accent rounded-full px-5 py-2";
  const scrollDirection = useScrollDirection();

  return (
    <div className={`fixed top-0 bg-white z-50 lg:flex w-full items-center justify-between pt-10 pb-5 pr-[5%] pl-[5%] transform transition-transform duration-500 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <Link href="/">
        <Image className="w-15 h-15 " src={Logo} alt="Logo" />
      </Link>
      <Link href="/" className={linkStyle}>Home</Link>
      <Link href="/about" className={linkStyle}>About</Link>
      <Link href="/issues" className={linkStyle}>Issues</Link>
      <Link href="/contact" className={linkStyle}>Contact Us</Link>
      <a href="https://forms.gle/ekY9KS5HYb2CHVTt9" target="_blank" rel="noopener noreferrer">
        <ButtonRound text="Subscribe" />
      </a>
    </div>
  )
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? Close : Menu;
  const menuitem = 'afacad pt-5 pb-5 w-full text-center font-semibold text-[20px] text-invert hover-text-accent hover-bg-highlight';

  // transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubscribe = () => {
    window.open('https://forms.gle/ekY9KS5HYb2CHVTt9', '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  }

  return (
    <div className='z-99 flex lg:hidden fixed w-[100%] items-center justify-between top-10 pr-[5%] pl-[5%]'>
      <Link href="/" className='z-100' onClick={toggleMenu}>
        <Image className={`w-15 h-15 ${isOpen ? 'invert brightness-1' : ''}`} src={Logo} alt="Logo" />
      </Link>
      <Image className="z-50 w-15 h-15 cursor-pointer" src={icon} alt="Menu" onClick={toggleMenu} />
      <motion.div
        variants={{
          initial: {
            x: '100%'
          },
          open: {
            x: '0%'
          },
          close: {
            x: '100%'
          }
        }}
        transition={{
          duration: 0.3,
          ease: "circInOut"
        }}
        initial="initial"
        animate={isOpen ? "open" : "close"}
        className={`fixed top-0 right-0 h-full w-full bg-base`}>
        <div className='flex flex-col items-center mt-30'>
          <Link href="/" className={menuitem} onClick={toggleMenu}>Home</Link>
          <Link href="/about" className={menuitem} onClick={toggleMenu}>About</Link>
          <Link href="/issues" className={menuitem} onClick={toggleMenu}>Issues</Link>
          <Link href="/contact" className={menuitem} onClick={toggleMenu}>Contact Us</Link>
          <Link href="/" className={menuitem} onClick={handleSubscribe}>Subscribe</Link>
          <div className='afacad bottom-[45px] absolute w-full text-center text-sm text-invert'>
            Copyright © 2025 The Cannon
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NavBar
