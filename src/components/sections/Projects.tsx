'use client';
import Card from '@/components/ui/Card';

const projects = [
  { 
    id: 1, 
    title: 'Personal Portfolio', 
    description: 'My portfolio built with Next.js and Tailwind CSS.', 
    technologies: ['Next.js', 'Tailwind', 'TypeScript'], 
    imageUrl: '/images/projects/project1.png', 
    githubUrl: 'https://github.com/HolySagittarius', 
    liveUrl: 'https://henrydavetacuyan-portfolio.vercel.app' 
  },
  { 
    id: 2, 
    title: 'Healthcare System', 
    description: 'Clinic management system documentation with UML diagrams.', 
    technologies: ['System Analysis', 'UML', 'Documentation'], 
    imageUrl: '/images/projects/project2.jpeg', 
    githubUrl: 'https://github.com/HolySagittarius' 
  },
  { 
    id: 3, 
    title: 'Database Project', 
    description: 'Full database documentation with ERD and normalization.', 
    technologies: ['Database Design', 'SQL', 'ERD'], 
    imageUrl: '/images/projects/project3.png', 
    githubUrl: 'https://github.com/HolySagittarius' 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-4xl font-bold text-[#ccd6f6] mb-16">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => <Card key={project.id} project={project} />)}
      </div>
    </section>
  );
}