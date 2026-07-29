import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import PurposeSection from '@/components/PurposeSection';
import ObjectivesSection from '@/components/ObjectivesSection';
import ScopeSection from '@/components/ScopeSection';
import EDTSection from '@/components/EDTSection';
import OrgChartSection from '@/components/OrgChartSection';
import RaciSection from '@/components/RaciSection';
import TimelineSection from '@/components/TimelineSection';
import PowerInterestSection from '@/components/PowerInterestSection';
import BudgetSection from '@/components/BudgetSection';
import RisksSection from '@/components/RisksSection';
import CierreSection from '@/components/CierreSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e]">
      <NavBar />
      <main>
        <HeroSection />
        <PurposeSection />
        <ObjectivesSection />
        <ScopeSection />
        <EDTSection />
        <OrgChartSection />
        <RaciSection />
        <TimelineSection />
        <PowerInterestSection />
        <BudgetSection />
        <RisksSection />
        <CierreSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

