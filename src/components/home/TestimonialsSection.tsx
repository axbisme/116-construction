import Container from '@/components/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => (
  <section className="py-20 md:py-24">
    <Container className="space-y-12">
      <SectionHeading
        eyebrow="Client feedback"
        title="The strongest message for this market is still simple: did the finished space feel worth it?"
        description="These testimonials are written to sound like homeowners talking about comfort, communication, and how the project changed the way they use the home."
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
        {testimonials.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${testimonial.location}`}
            className={index === 0 ? 'rounded-[2rem] border border-border bg-white p-8 shadow-card lg:row-span-2' : 'rounded-[2rem] border border-border bg-white p-8 shadow-card'}
          >
            <div className="flex gap-1 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-5 text-xl leading-9 text-foreground md:text-2xl">“{testimonial.message}”</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              {testimonial.name} · {testimonial.location}
            </p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default TestimonialsSection;
