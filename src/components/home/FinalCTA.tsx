import Container from '@/components/Container';
import ButtonLink from '@/components/shared/ButtonLink';
import Logo from '@/components/shared/Logo';
import { siteDetails } from '@/data/siteDetails';

const FinalCTA = () => (
  <section className="pb-20 md:pb-24">
    <Container>
      <div className="overflow-hidden rounded-[2.5rem] border border-border bg-[linear-gradient(135deg,#2a211b_0%,#3a2d26_42%,#4b3a32_100%)] px-8 py-10 shadow-card md:px-12 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-[1.5rem] bg-white/95 px-5 py-4 shadow-[0_20px_48px_-28px_rgba(0,0,0,0.6)]">
              <Logo className="w-fit" />
            </div>
            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl">Ready to start a project that feels like it belongs to your home?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
              Reach out for remodeling, porches, barns, she sheds, and custom outdoor structures across South Georgia and the Lowcountry.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="grid gap-4 text-base leading-7 text-white/82 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-white">Phone:</span>
                <br />
                {siteDetails.phoneDisplay}
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>
                <br />
                {siteDetails.email}
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold text-white">Coverage:</span>
                <br />
                {siteDetails.serviceArea}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${siteDetails.phoneHref}`}>Call Now</ButtonLink>
              <ButtonLink href={`mailto:${siteDetails.email}`} variant="secondary">Email the Owner</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default FinalCTA;
