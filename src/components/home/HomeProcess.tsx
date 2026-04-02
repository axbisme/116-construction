import Container from '@/components/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteDetails } from '@/data/siteDetails';

const HomeProcess = () => (
  <section className="bg-[linear-gradient(180deg,#f4eee6_0%,#f8f5f0_100%)] py-20 md:py-24">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
        <SectionHeading
          eyebrow="What helps homeowners say yes"
          title="A process that feels organized, personal, and easy to trust."
          description="The layout adds a clear process section because people making remodel decisions often want reassurance as much as inspiration."
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {siteDetails.process.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] border border-border bg-white p-6 shadow-card">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">0{index + 1}</div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{step.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default HomeProcess;
