"use client";
import { React, useState } from 'react';
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

const DesktopNav = () => {
  return (
    <div className='hidden lg:flex fixed w-[100%] items-center justify-between top-10 pr-[5%] pl-[5%]'>
      <Image className="w-15 h-15 " src={Logo} alt="Logo" />
      <Link href="/" className='afacad font-semibold text-[20px] text-base hover-text-accent'>Home</Link>
      <Link href="/about" className='afacad font-semibold text-[20px] text-base hover-text-accent'>About</Link>
      <Link href="/issues" className='afacad font-semibold text-[20px] text-base hover-text-accent'>Issues</Link>
      <Link href="/contact" className='afacad font-semibold text-[20px] text-base hover-text-accent'>Contact Us</Link>
      <ButtonRound text="Subscribe" />
    </div>
  )
}

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? Close : Menu;
  const menuitem = 'afacad pt-5 pb-5 w-full text-center font-semibold text-[20px] text-invert hover-text-accent hover-bg-highlight';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex lg:hidden fixed w-[100%] items-center justify-between top-10 pr-[5%] pl-[5%]'>
      <Image className={`z-50 w-15 h-15 ${isOpen ? 'invert brightness-1' : ''}`} src={Logo} alt="Logo" />
      <Image className="z-50 w-15 h-15 cursor-pointer" src={icon} alt="Menu" onClick={toggleMenu} />
      <div className={`fixed top-0 right-0 h-full w-full bg-base transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out`}>
        <div className='flex flex-col items-center mt-30'>
          <Link href="/" className={menuitem} onClick={toggleMenu}>Home</Link>
          <Link href="/about" className={menuitem} onClick={toggleMenu}>About</Link>
          <Link href="/issues" className={menuitem} onClick={toggleMenu}>Issues</Link>
          <Link href="/contact" className={menuitem} onClick={toggleMenu}>Contact Us</Link>
          <Link href="/" className={menuitem} onClick={toggleMenu}>Subscribe</Link>
          <div className='afacad bottom-[45px] absolute w-full text-center text-sm text-invert'>
            Copyright © 2025 The Cannon
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
