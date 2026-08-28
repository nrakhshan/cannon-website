import Link from 'next/link'
import React from 'react'

import { FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaDiscord, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <DesktopFooter />
      <MobileFooter />
    </div>
  )
}

const DesktopFooter = () => {
  return (
    <div className="hidden lg:flex mt-20 w-full bottom-0">
      <footer className="w-full px-12 pt-12 pb-4 bg-secondary text-invert afacad">
        <div className="flex justify-between">
          <ul className="space-y-1 text-left">
            <li className="font-semibold">Site Map</li>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/issues" className="hover:underline">Issues</Link></li>
            <li><Link href="/creative-competition" className="hover:underline">Creative Competition</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>

          <ul className="space-y-1 text-right">
            <li><Link href="https://docs.google.com/forms/d/1hsw1ttCi_5jtz12LeeikYzfpFJJuLU6CFI7GDITlBWU/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">Join Us</Link></li>
            <li><Link href="https://github.com/nrakhshan/cannon-website" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">Report an issue</Link></li>

            <div className="flex justify-end space-x-4 mt-21">
              <a href="https://instagram.com/thecannonuoft/" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-6 h-6" /></a>
              <a href="https://open.spotify.com/show/4gLMBJ36N0LvOWx89wDbnz" target="_blank" rel="noopener noreferrer"><FaSpotify className="w-6 h-6" /></a>
              <a href="https://linkedin.com/company/the-cannon-uoft/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-6 h-6" /></a>
              <a href="https://discord.gg/FSwwhMqPPe" target="_blank" rel="noopener noreferrer"><FaDiscord className="w-7 h-7 pb-1" /></a>
              <a href="mailto:cannon@skule.ca"><FaEnvelope className="w-6 h-6" /></a>
            </div>
          </ul>
        </div>

        <p className="text-center text-sm py-3">
          © 2026 The Cannon. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

const MobileFooter = () => {
  return (
    <div className="flex lg:hidden mt-20 w-full bottom-0">
      <footer className="w-full pt-9 pb-4 bg-base text-invert afacad">
        <ul className="space-y-1 text-center mb-15">
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://instagram.com/thecannonuoft/" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-6 h-6" /></a>
            <a href="https://open.spotify.com/show/4gLMBJ36N0LvOWx89wDbnz" target="_blank" rel="noopener noreferrer"><FaSpotify className="w-6 h-6" /></a>
            <a href="https://linkedin.com/company/the-cannon-uoft/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-6 h-6" /></a>
            <a href="https://discord.gg/FSwwhMqPPe" target="_blank" rel="noopener noreferrer"><FaDiscord className="w-7 h-7 pb-1" /></a>
            <a href="mailto:cannon@skule.ca"><FaEnvelope className="w-6 h-6" /></a>
          </div>

          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/issues" className="hover:underline">Issues</Link></li>
          <li><Link href="/creative-competition" className="hover:underline">Creative Competition</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          <li><Link href="https://docs.google.com/forms/d/1hsw1ttCi_5jtz12LeeikYzfpFJJuLU6CFI7GDITlBWU/" className="hover:underline">Join Us</Link></li>
          <li><Link href="https://github.com/nrakhshan/cannon-website" className="hover:underline">Report an issue</Link></li>
        </ul>

        <p className="text-center text-sm py-3">
          © 2026 The Cannon. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
