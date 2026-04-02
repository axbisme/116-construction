import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import { projects } from '@/data/projects';

const remodelingProject = projects.find((project) => project.spotlight === 'remodeling');
const outdoorProject = projects.find((project) => project.spotlight === 'outdoor');

const cards = [
  {
    title: 'Remodeling for everyday living',
    description:
      'Kitchens, baths, and connected living spaces that feel brighter, calmer, and easier to use.',
    imageSrc: remodelingProject?.coverImage ?? '/images/placeholders/project-generic.svg',
    href: remodelingProject ? `/projects/${remodelingProject.slug}` : '/projects',
  },
  {
    title: 'Outdoor builds with regional character',
    description:
      'Porches, sheds, barns, and exterior structures that make sense for the home, the property, and how the family uses it.',
    imageSrc: outdoorProject?.coverImage ?? '/images/placeholders/project-generic.svg',
    href: outdoorProject ? `/projects/${outdoorProject.slug}` : '/projects',
  },
];

const WorkHighlights = () => (
  <section className="py-20 md:py-24">
    <Container className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Design direction</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">Ground the brand in spaces people actually want to come home to.</h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-muted md:justify-self-end md:text-lg">
          For this audience, the strongest visual cue is not “luxury for luxury’s sake.” It is warmth, order, comfort, and craftsmanship—paired with outdoor spaces that feel inviting and useful in the South.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="group relative isolate overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
            <div className="relative aspect-[5/4] sm:aspect-[16/10]">
              <Image src={card.imageSrc} alt={card.title} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <h3 className="text-3xl font-semibold leading-tight">{card.title}</h3>
              <p className="mt-3 max-w-lg text-base leading-7 text-white/85">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonLink href="/projects">View All Projects</ButtonLink>
      </div>
    </Container>
  </section>
);

export default WorkHighlights;
