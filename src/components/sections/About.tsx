'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skills = ['JavaScript/TypeScript', 'React & Next.js', 'Tailwind CSS', 'Git & GitHub', 'Networking', 'Database Design'];

  return (
    <section id="about" className="section-container" ref={ref}>
      <h2 className={`text-4xl font-bold text-[#ccd6f6] mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>About Me</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4">
          <p>Hi! I'm Henry Dave Tacuyan, a Computer Science student at Central Philippine University (started 2023) and an aspiring Full-Stack Developer.</p>
          <p>I specialize in Next.js, React, Tailwind CSS, and TypeScript, with experience in networking and database design.</p>
          <p>Here are some technologies I work with:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {skills.map((skill) => (<li key={skill} className="font-mono text-sm"><span className="text-[#64ffda] mr-2">▹</span>{skill}</li>))}
          </ul>
        </div>
        <div className="w-64 mx-auto">
          <div className="relative rounded overflow-hidden bg-[#64ffda]/20 aspect-square border-2 border-[#64ffda]/30">
            <Image
              src="/images/profile.jpg"
              alt="Henry Dave Tacuyan"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}