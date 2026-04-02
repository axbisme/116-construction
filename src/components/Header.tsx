'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiBars3, HiOutlinePhone, HiOutlineXMark } from 'react-icons/hi2';
import clsx from 'clsx';
import Container from './Container';
import Logo from './shared/Logo';
import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[color:rgba(36,29,24,0.92)] text-white">
        <Container className="flex min-h-10 items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
          <p>{siteDetails.regionLabel}</p>
          <a href={`tel:${siteDetails.phoneHref}`} className="inline-flex items-center gap-2 text-white transition hover:text-white/80">
            <HiOutlinePhone className="h-3.5 w-3.5" /> {siteDetails.phoneDisplay}
          </a>
        </Container>
      </div>
      <div className="border-b border-border/80 bg-[color:rgba(248,245,240,0.88)] backdrop-blur-xl">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <Logo priority />
            <div className="hidden items-center gap-8 lg:flex">
              <ul className="flex items-center gap-8">
                {menuItems.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.url}
                      className={clsx(
                        'text-sm font-semibold tracking-[0.08em] transition-colors',
                        pathname === item.url ? 'text-primary' : 'text-foreground hover:text-primary',
                      )}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={siteDetails.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_22px_40px_-24px_rgba(122,37,32,0.75)] transition hover:bg-primary-accent"
              >
                {siteDetails.primaryCta.label}
              </Link>
            </div>
            <button
              onClick={() => setIsOpen((v) => !v)}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground lg:hidden"
              aria-label="Toggle navigation"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <HiOutlineXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
            </button>
          </nav>
        </Container>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div id="mobile-menu" className="border-b border-border bg-[color:rgba(248,245,240,0.98)] lg:hidden">
          <Container className="py-5">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      'block rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.08em] transition-colors',
                      pathname === item.url ? 'bg-white text-primary' : 'text-foreground hover:bg-white hover:text-primary',
                    )}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteDetails.primaryCta.href}
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-primary-accent"
                >
                  {siteDetails.primaryCta.label}
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
