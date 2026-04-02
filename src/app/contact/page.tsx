import Image from 'next/image';
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';
import Container from '@/components/Container';
import ContactForm from '@/components/contact/ContactForm';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { siteDetails } from '@/data/siteDetails';

const contactDetails = [
  { title: 'Call', value: siteDetails.phoneDisplay, href: `tel:${siteDetails.phoneHref}`, icon: HiOutlinePhone },
  { title: 'Email', value: siteDetails.email, href: `mailto:${siteDetails.email}`, icon: HiOutlineEnvelope },
  { title: 'Service Area', value: siteDetails.serviceArea, href: undefined, icon: HiOutlineMapPin },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch about your next project." description="Call, email, or use the simple contact form below. The form opens a drafted email to the owner so the site works right away without extra service setup." imageSrc="/images/placeholders/contact-banner.svg" />
      <section className="py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-border bg-white p-8 shadow-card">
              <SectionHeading eyebrow="Request an estimate" title="Multiple ways to reach the owner." description="These blocks can stay even if the form later moves to a dedicated email service like Resend or Formspree." align="left" />
              <div className="mt-8 space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = <div className="flex items-start gap-4 rounded-[1.25rem] bg-soft p-5 ring-1 ring-border"><div className="rounded-full bg-white p-3 text-primary ring-1 ring-border"><Icon className="h-5 w-5" /></div><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{detail.title}</p><p className="mt-2 text-base leading-7 text-muted">{detail.value}</p></div></div>;
                  return detail.href ? <a key={detail.title} href={detail.href} className="block transition hover:-translate-y-0.5">{content}</a> : <div key={detail.title}>{content}</div>;
                })}
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-card"><Image src="/images/placeholders/she-shed.svg" alt="Project placeholder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
