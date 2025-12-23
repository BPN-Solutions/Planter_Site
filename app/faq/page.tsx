import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import FAQHero from '@/components/faq/FAQHero';
import FAQList from '@/components/faq/FAQList';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'FAQ | Planter Business',
  description: 'Frequently asked questions about our planter subscriptions, services, and process.',
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <FAQHero />
        <FAQList />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
