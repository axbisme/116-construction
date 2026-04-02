import Image from 'next/image';
import Container from '@/components/Container';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
}

const PageHero = ({ eyebrow, title, description, imageSrc }: PageHeroProps) => (
  <section className="border-b border-border bg-soft pt-28 md:pt-36">
    <Container className="pb-16">
      <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col justify-center rounded-[2rem] bg-white px-8 py-10 shadow-card ring-1 ring-border md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{description}</p>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
          <Image src={imageSrc} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </Container>
  </section>
);

export default PageHero;
