import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import PageHero from '@/components/shared/PageHero';
import ProjectGallery from '@/components/shared/ProjectGallery';
import { projects } from '@/data/projects';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} description={`${project.location} · ${project.summary}`} imageSrc={project.coverImage} />
      <section className="py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-border bg-white p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Project scope</p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-muted">{project.scope.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1 text-primary">•</span><span>{item}</span></li>)}</ul>
            <div className="mt-8 flex flex-col gap-3"><ButtonLink href="/contact">Request a Similar Project</ButtonLink><ButtonLink href="/projects" variant="secondary">Back to Projects</ButtonLink></div>
          </div>
          <ProjectGallery title={project.title} images={project.gallery} />
        </Container>
      </section>
    </>
  );
}
