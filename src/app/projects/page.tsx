import Container from '@/components/Container';
import PageHero from '@/components/shared/PageHero';
import ProjectCard from '@/components/shared/ProjectCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="A project gallery built to grow with the business." description="Every project card and detail page is powered by a single data source. Add images, add a new object, and publish." imageSrc="/images/placeholders/project-generic.svg" />
      <section className="py-20 md:py-24">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Portfolio" title="Featured remodels, porches, sheds, barns, and more." description="The placeholders make it obvious where completed project photography should go once the real images are ready." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </Container>
      </section>
    </>
  );
}
