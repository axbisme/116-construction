import Container from '@/components/Container';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Remodeling, outdoor living, and custom structures for local homeowners." description="This page is generated from the services data file, which keeps updates easy whenever offerings change or more photos are ready." imageSrc="/images/placeholders/outdoor-build.svg" />
      <section className="py-20 md:py-24">
        <Container className="space-y-12">
          <SectionHeading eyebrow="What 116 Construction handles" title="Clear service categories that are easy to update later." description="Replace the placeholder images one by one as new photography becomes available. The rest of the layout is already wired up." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="space-y-4">
                <ServiceCard service={service} />
                <div className="rounded-[1.5rem] border border-border bg-white p-6 shadow-card">
                  <p className="text-base leading-7 text-muted">{service.description}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-foreground">{service.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3"><span className="mt-1 text-primary">•</span><span>{bullet}</span></li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
