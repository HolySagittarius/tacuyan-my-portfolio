'use client';
import Button from '@/components/ui/Button';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="hero" className="min-h-screen flex items-center section-container">
      <div>
        <p className="font-mono text-[#64ffda] text-base mb-5">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mb-4">Henry Dave Tacuyan.</h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] mb-8">CS Student & Developer</h2>
        <p className="text-[#8892b0] max-w-xl mb-12 text-lg">I build things for the web using Next.js, React, and TypeScript.</p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => scrollTo('projects')}>View my work</Button>
          <Button variant="outline" onClick={() => scrollTo('contact')}>Contact me</Button>
        </div>
      </div>
    </section>
  );
}