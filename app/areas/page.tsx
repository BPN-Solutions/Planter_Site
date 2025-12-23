import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import AreasHero from '@/components/areas/AreasHero';
import ServiceAreaGrid from '@/components/areas/ServiceAreaGrid';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Service Areas | Planter Business',
  description: 'We serve the greater Detroit metropolitan area including Birmingham, Bloomfield Hills, Grosse Pointe, and more.',
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <AreasHero />
        <ServiceAreaGrid />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
