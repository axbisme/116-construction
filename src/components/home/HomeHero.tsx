import Image from 'next/image';
import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import { siteDetails } from '@/data/siteDetails';

const HomeHero = () => (
  <section className="relative overflow-hidden bg-soft pt-36 md:pt-40">
    <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(201,182,154,0.28),transparent_42%),radial-gradient(circle_at_top_right,rgba(122,37,32,0.08),transparent_36%)]" />
    <Container className="relative pb-20 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{siteDetails.hero.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl">
            {siteDetails.hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted md:text-xl">{siteDetails.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects">View Our Work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Request a Quote</ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {siteDetails.hero.supportingPoints.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-border bg-white/80 p-5 shadow-card backdrop-blur-sm">
                <p className="text-sm leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-border/80 bg-white shadow-card lg:min-h-[640px]">
            <Image
              src={siteDetails.hero.imageSrc}
              alt="Primary project placeholder"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,29,24,0.02),rgba(36,29,24,0.18))]" />
          </div>
          <div className="grid gap-5 lg:grid-rows-[0.56fr_0.44fr]">
            <div className="rounded-[2rem] border border-border bg-white p-7 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What homeowners care about</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground">A project that feels considered—not rushed.</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Good remodeling decisions are emotional and practical. The design direction leans warm, calm, and trustworthy so the site feels closer to a well-kept home than a generic contractor template.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-card">
              <Image
                src="/images/placeholders/outdoor-build.svg"
                alt="Outdoor project placeholder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 24vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Outdoor builds</p>
                <p className="mt-2 text-xl font-semibold">Porches, sheds, barns, and backyard spaces that fit the property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default HomeHero;
