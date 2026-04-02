import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import ProjectCard from '@/components/shared/ProjectCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { featuredProjects } from '@/data/projects';

const FeaturedProjects = () => {
  const [primaryProject, secondaryProject, ...remainingProjects] = featuredProjects;

  return (
    <section className="bg-white py-20 md:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Featured projects"
          title="A warmer, more natural portfolio—less template, more real-home storytelling."
          description="The page structure keeps the portfolio front and center because photos help homeowners imagine themselves in the finished result. Replace the placeholders with real work as soon as images are ready."
        />
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {primaryProject ? <ProjectCard project={primaryProject} /> : null}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
            {secondaryProject ? <ProjectCard project={secondaryProject} compact /> : null}
            <article className="rounded-[1.75rem] border border-border bg-soft p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">What this layout is doing</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-foreground">Balancing beauty, practicality, and trust.</h3>
              <p className="mt-4 text-base leading-7 text-muted">
                Homeowners making larger remodel decisions usually want to see both style and substance. The updated layout gives equal weight to finishes, comfort, usefulness, and the feeling that the company understands how families actually use the space.
              </p>
            </article>
          </div>
        </div>
        {remainingProjects.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        ) : null}
        <div className="flex justify-center">
          <ButtonLink href="/projects" variant="secondary">See the Full Project Gallery</ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
