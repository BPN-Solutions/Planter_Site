import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/OurStory';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'About Us | Planter Business',
  description: 'Learn about our story, mission, and the team bringing beautiful seasonal planters to Detroit-area homes.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <AboutHero />
        <OurStory />
        <Values />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
