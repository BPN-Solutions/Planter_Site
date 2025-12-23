import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SeasonalDecorHero from '@/components/seasonal-decor/SeasonalDecorHero';
import OccasionsGrid from '@/components/seasonal-decor/OccasionsGrid';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Seasonal Decor | Planter Business',
  description: 'Special occasion decorations for holidays, life events, and celebrations. One-time professional installations.',
};

export default function SeasonalDecorPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <SeasonalDecorHero />
        <OccasionsGrid />
        <BeforeAfterGallery />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
