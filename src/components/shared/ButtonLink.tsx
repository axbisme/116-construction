import type { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

const buttonClasses = {
  primary: 'bg-primary text-white shadow-[0_18px_40px_-20px_rgba(139,30,30,0.65)] hover:bg-primary-accent focus-visible:outline-primary',
  secondary: 'border border-border bg-white text-foreground hover:border-primary hover:text-primary focus-visible:outline-primary',
  ghost: 'text-foreground hover:text-primary focus-visible:outline-primary',
};

const ButtonLink = ({ href, children, variant = 'primary', className }: ButtonLinkProps) => (
  <Link
    href={href}
    className={clsx('inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', buttonClasses[variant], className)}
  >
    {children}
  </Link>
);

export default ButtonLink;
