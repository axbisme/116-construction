import Image from 'next/image';
import Link from 'next/link';
import { IService } from '@/types';

const ServiceCard = ({ service }: { service: IService }) => (
  <article className="group overflow-hidden rounded-[1.9rem] border border-border bg-white shadow-card transition-transform duration-200 hover:-translate-y-1">
    <div className="relative aspect-[16/11] overflow-hidden border-b border-border bg-soft">
      <Image src={service.imageSrc} alt={service.title} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
    <div className="space-y-4 p-6 md:p-7">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{service.tagline}</p>
        <h3 className="mt-3 text-[1.75rem] font-semibold leading-tight text-foreground">{service.title}</h3>
        <p className="mt-3 text-base leading-7 text-muted">{service.summary}</p>
      </div>
      <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary-accent">
        Request an estimate <span className="ml-2">→</span>
      </Link>
    </div>
  </article>
);

export default ServiceCard;
