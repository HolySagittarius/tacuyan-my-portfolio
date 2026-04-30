'use client';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between h-20">
        <a href="#hero" className="font-mono text-[#64ffda] text-xl font-bold">&lt;HDT /&gt;</a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className="font-mono text-sm text-[#ccd6f6] hover:text-[#64ffda]">About</a></li>
          <li><a href="#projects" className="font-mono text-sm text-[#ccd6f6] hover:text-[#64ffda]">Projects</a></li>
          <li><a href="#contact" className="font-mono text-sm text-[#ccd6f6] hover:text-[#64ffda]">Contact</a></li>
        </ul>
        <button className="md:hidden text-[#64ffda]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-[#112240] px-8 pb-8 pt-4 flex flex-col gap-6">
          <a href="#about" className="font-mono text-sm text-[#ccd6f6] hover:text-[#64ffda]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="font-mono text-sm text-[#ccd6f6] hover:text-[#64ffda]" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="font-mono text-sm text-[#ccd6f6] hover:text-[#64ffda]" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}