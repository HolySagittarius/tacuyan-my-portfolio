'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (name && email && message) setSent(true);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="text-4xl font-bold text-[#ccd6f6] mb-16">Get In Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#8892b0] mb-10">I'm open to new opportunities. My inbox is always open!</p>
        {sent ? (
          <div className="bg-[#112240] rounded-lg p-10"><p className="text-[#64ffda]">✓ Message sent! I'll get back to you soon.</p></div>
        ) : (
          <div className="bg-[#112240] rounded-lg p-8 text-left space-y-5">
            <input type="text" placeholder="Your Name" className="w-full bg-[#112240] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6]" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" className="w-full bg-[#112240] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6]" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea rows={5} placeholder="Your Message" className="w-full bg-[#112240] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6]" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={handleSubmit}>Send Message</Button>
          </div>
        )}
        <div className="mt-10 space-y-3">
          <a href="mailto:herohenrydaveb.tacuyan@gmail.com" className="block text-[#64ffda]">herohenrydaveb.tacuyan@gmail.com</a>
          <a href="tel:+639186814217" className="block text-[#64ffda]">+63 918 681 4217</a>
        </div>
      </div>
    </section>
  );
}