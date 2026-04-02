import Image from 'next/image';
import Link from 'next/link';
import { siteDetails } from '@/data/siteDetails';

interface LogoProps { className?: string; priority?: boolean; }

const Logo = ({ className, priority = false }: LogoProps) => (
  <Link href="/" className={`flex items-center ${className ?? ''}`} aria-label={siteDetails.siteName}>
    <Image src={siteDetails.siteLogo} alt={siteDetails.siteName} width={180} height={76} priority={priority} className="h-12 w-auto md:h-14" />
  </Link>
);

export default Logo;
