import FeaturedProjects from '@/components/home/FeaturedProjects';
import FinalCTA from '@/components/home/FinalCTA';
import HomeHero from '@/components/home/HomeHero';
import HomeProcess from '@/components/home/HomeProcess';
import ServicesPreview from '@/components/home/ServicesPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrustBar from '@/components/home/TrustBar';
import WorkHighlights from '@/components/home/WorkHighlights';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <ServicesPreview />
      <FeaturedProjects />
      <WorkHighlights />
      <HomeProcess />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
