import Header from './components/Header';
import CloudLayer from './components/CloudLayer';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import Services from './components/Services';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global Seamless Sky Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-sky-blue via-sky-blue/40 via-50% to-white z-0" />
      
      {/* Fixed Elements */}
      <Header />
      <CloudLayer />

      {/* Scrollable Content */}
      <div className="relative z-20">
        <Hero />
        <FleetSection />
        <Services />
        <Footer />
      </div>
    </main>
  );
}