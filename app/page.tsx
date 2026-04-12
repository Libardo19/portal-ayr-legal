import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FirmaSection from './components/FirmaSection';
import ServiciosJuridicosSection from './components/ServiciosJuridicosSection';
import Ingenieria from './components/ingenieria';
import Avaluos from './components/avaluos';
import Header from './components/Header';

export default function HomePage() {
  return (
    <main className="bg-[#0B1120]">
      <Navbar />
      <Hero />
      <FirmaSection />
      <ServiciosJuridicosSection />
      <Ingenieria/>
      <Avaluos/>
      <Header/>
    </main>
  );
}