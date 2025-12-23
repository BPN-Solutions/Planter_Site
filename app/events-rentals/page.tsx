import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import EventsHero from '@/components/events-rentals/EventsHero';
import UseCases from '@/components/events-rentals/UseCases';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Events & Rentals | Planter Business',
  description: 'Short-term planter solutions for parties, corporate events, real estate staging, and vacation rentals.',
};

export default function EventsRentalsPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <EventsHero />
        <UseCases />
        <BeforeAfterGallery />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
