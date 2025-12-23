import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import MaintenanceHero from '@/components/maintenance/MaintenanceHero';
import MaintenanceServices from '@/components/maintenance/MaintenanceServices';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Plant Maintenance | Planter Business',
  description: 'Expert plant care including watering, pruning, deadheading, and health monitoring for thriving planters.',
};

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <MaintenanceHero />
        <MaintenanceServices />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
