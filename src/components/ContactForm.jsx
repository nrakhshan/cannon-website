'use client';
import { React, useState}  from 'react'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Send failed');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message: ' + error.message);
    }
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-md">
            <form action="#" className="afacad text-base-left font-normal">
                <div>
                    <label className="block my-2">Name: </label>
                    <input 
                      type="text" 
                      name="name"
                      className="bg-background focus-bg-secondary border border-base rounded-full block w-full p-2.5 pl-5" 
                      required 
                      value={form.name}
                      onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block my-2">Email: </label>
                    <input 
                      type="email" 
                      name="email"
                      className="bg-background focus-bg-secondary border border-base rounded-full block w-full p-2.5 pl-5" 
                      required 
                      value={form.email}
                      onChange={handleChange}
                    />
                </div>
                <div >
                    <label className="block my-2">Message: </label>
                    <textarea 
                      rows="6" 
                      name="message"
                      className="block p-2.5 w-full bg-background focus-bg-secondary rounded-2xl border border-base pl-3" 
                      value={form.message}
                      onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="mt-2 p-2 float-right font-semibold uppercase inline-flex items-center gap-2 group">
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
