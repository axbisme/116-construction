import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/types';

const ProjectCard = ({ project, compact = false }: { project: IProject; compact?: boolean }) => (
  <article className="group overflow-hidden rounded-[1.9rem] border border-border bg-white shadow-card transition-transform duration-200 hover:-translate-y-1">
    <Link href={`/projects/${project.slug}`} className="block">
      <div className={`relative overflow-hidden bg-soft ${compact ? 'aspect-[6/5]' : 'aspect-[16/11]'}`}>
        <Image src={project.coverImage} alt={project.title} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <span>{project.category}</span>
          <span className="text-border">•</span>
          <span className="text-muted">{project.location}</span>
        </div>
        <h3 className="text-[1.75rem] font-semibold leading-tight text-foreground">{project.title}</h3>
        <p className="text-base leading-7 text-muted">{project.summary}</p>
        <span className="inline-flex items-center text-sm font-semibold text-primary">
          View project details <span className="ml-2">→</span>
        </span>
      </div>
    </Link>
  </article>
);

export default ProjectCard;
