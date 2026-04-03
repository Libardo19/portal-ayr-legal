import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiciosJuridicos from './components/ServiciosJuridicos';
import Header from './components/Header';

export default function HomePage() {
  return (
    <main className="bg-[#0B1120]">
      <Navbar />
      <Hero />
      <About />
      <ServiciosJuridicos />
      <Header/>
    </main>
  );
}