'use client';
import Image from 'next/image';
import { Project } from '@/lib/types';

export default function Card({ project }: { project: Project }) {
  return (
    <div className="bg-[#112240] rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-48 bg-[#233554] overflow-hidden">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-70 hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#ccd6f6] text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-[#8892b0] text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">GitHub</a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">Live Demo</a>}
        </div>
      </div>
    </div>
  );
}