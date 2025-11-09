import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-6 py-6 bg-base text-invert">
      <div className="flex justify-between">
        
        <ul className="space-y-1 text-left">
          <li className="font-semibold">Site Map</li>
          <li>
            <a href="https://cannon.skule.ca/home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="https://cannon.skule.ca/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="https://cannon.skule.ca/issues" className="hover:underline">
              Issues
            </a>
          </li>
          <li>
            <a href="https://cannon.skule.ca/contact" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>

        <ul className="space-y-1 text-right">
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Seven-dimensional_cross_product"
              className="hover:underline font-semibold"
            >
              Join Us
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nrakhshan/cannon-website"
              className="hover:underline font-semibold"
            >
              Report an issue
            </a>
          </li>
        </ul>

      </div>

      <p className="text-center text-sm py-3">
        © 2025 The Cannon. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
