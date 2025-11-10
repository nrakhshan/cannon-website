import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

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
    <footer className="w-full px-12 pt-12 pb-4 bg-base text-invert afacad">
      <div className="flex justify-between">
        <ul className="space-y-1 text-left">
          <li className="font-semibold">Site Map</li>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/issues" className="hover:underline">Issues</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
        
        <ul className="space-y-1 text-right">
          <li><Link href="https://en.wikipedia.org/wiki/Seven-dimensional_cross_product" className="hover:underline font-semibold">Join Us</Link></li>
          <li><Link href="https://github.com/nrakhshan/cannon-website" className="hover:underline font-semibold">Report an issue</Link></li>
          
          <div className="flex justify-end space-x-4 mt-14">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="w-6 h-6" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="w-6 h-6" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-6 h-6" /></a>
          </div>
        </ul>
      </div>

      <p className="text-center text-sm py-3">
        © 2025 The Cannon. All rights reserved.
      </p>
    </footer>
  )
}

const MobileFooter = () => {
  return (
    <div>

    </div>
  )
}

export default Footer
