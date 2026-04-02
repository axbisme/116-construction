import Link from 'next/link';
import Container from '@/components/Container';
import Logo from '@/components/shared/Logo';
import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';

const Footer = () => (
  <footer className="border-t border-border bg-[#efe6dc] py-16">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.8fr]">
        <div>
          <Logo className="w-fit" />
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">{siteDetails.about.story}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link href={item.url} className="transition hover:text-primary">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
            <p>{siteDetails.serviceArea}</p>
            <p>
              <a href={`tel:${siteDetails.phoneHref}`} className="transition hover:text-primary">
                {siteDetails.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteDetails.email}`} className="transition hover:text-primary">
                {siteDetails.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
