import Image from 'next/image';
import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteDetails } from '@/data/siteDetails';

const values = ['Clear communication from start to finish', 'Work that respects the home and property', 'Thoughtful craftsmanship over flashy promises', 'Simple processes that are easy for homeowners to follow'];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={siteDetails.about.headline} description={siteDetails.about.story} imageSrc="/images/placeholders/owner-placeholder.svg" />
      <section className="py-20 md:py-24">
        <Container className="space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border bg-white shadow-card"><Image src="/images/placeholders/owner-placeholder.svg" alt="Owner or team placeholder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
            <div className="space-y-6 rounded-[2rem] border border-border bg-white p-8 shadow-card md:p-10">
              <SectionHeading eyebrow="Owner-led company" title="A straightforward company story that can be edited later." description="Use this page to introduce the owner, share a little about the company, and clarify the service area. The content lives in simple text blocks, so maintenance stays manageable." align="left" />
              <ul className="space-y-3 text-base leading-7 text-muted">{values.map((value) => <li key={value} className="flex items-start gap-3"><span className="mt-1 text-primary">•</span><span>{value}</span></li>)}</ul>
              <div className="rounded-[1.5rem] bg-soft p-6 ring-1 ring-border"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Service area</p><p className="mt-3 text-base leading-7 text-muted">{siteDetails.serviceArea}</p></div>
              <div className="flex flex-col gap-3 sm:flex-row"><ButtonLink href="/projects">View Projects</ButtonLink><ButtonLink href="/contact" variant="secondary">Contact the Owner</ButtonLink></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
