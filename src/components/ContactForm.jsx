import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className="py-2 px-4 mx-auto max-w-screen-md">
            <form action="#" className="afacad text-base text-left font-normal">
                <div>
                    <label className="block my-2">
                        Name: </label>
                    <input type="text" className="bg-secondary border border-base-300 rounded-full block w-full p-2.5" required />
                </div>
                <div>
                    <label className="block my-2">
                        Email: </label>
                    <input type="email" className="bg-background border border-base-300 rounded-full block w-full p-2.5" required />
                </div>
                <div >
                    <label className="block my-2">
                        Message: </label>
                    <textarea rows="6" className="block p-2.5 w-full bg-background rounded-2xl border border-base-300 " />
                </div>
                <button type="submit" className="mt-2 p-2 float-right font-semibold uppercase inline-flex items-center gap-2 group">
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
