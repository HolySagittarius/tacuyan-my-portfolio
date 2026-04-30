import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <div className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}