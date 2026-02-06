'use client';
import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-md">
            <form action="#" className="afacad text-base-left font-normal">
                <div>
                    <label className="block my-2">
                        Name: </label>
                    <input type="text" className="bg-background focus-bg-secondary border border-base rounded-full block w-full px-4 py-2.5" required />
                </div>
                <div>
                    <label className="block my-2">
                        Email: </label>
                    <input type="email" className="bg-background focus-bg-secondary border border-base rounded-full block w-full px-4 py-2.5" required />
                </div>
                <div >
                    <label className="block my-2">
                        Message: </label>
                    <textarea rows="6" className="bg-background focus-bg-secondary rounded-2xl border border-base block px-4 py-2.5 w-full" />
                </div>
                <button type="submit" onClick={() => alert("The form doesn't work yet lol pls just email us")} className="mt-2 p-2 float-right font-semibold uppercase inline-flex items-center gap-2 group">
                    <span>Submit</span>
                    <span className="transition-transform duration-200 group-hover:scale-125">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
