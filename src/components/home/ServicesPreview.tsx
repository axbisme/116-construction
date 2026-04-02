import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import SectionHeading from '@/components/shared/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/data/services';

const ServicesPreview = () => (
  <section className="py-20 md:py-24">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="Services"
            title="The kind of projects homeowners in this region ask for most."
            description="The mix leans toward the projects families actually live with every day: kitchens, baths, welcoming porches, practical outdoor structures, and updates that make a home feel more useful and more personal."
            align="left"
          />
          <div className="mt-8 rounded-[1.75rem] border border-border bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Built for easy updates</p>
            <p className="mt-3 text-base leading-7 text-muted">All services are pulled from a single data file, so changing titles, photos, or descriptions later will not require layout rewrites.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center lg:justify-start">
        <ButtonLink href="/services">View All Services</ButtonLink>
      </div>
    </Container>
  </section>
);

export default ServicesPreview;
