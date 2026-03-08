import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiciosJuridicos from './components/ServiciosJuridicos';

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Header />
      <Navbar />
      <Hero />
      <About />
      <ServiciosJuridicos />
    </main>
  );
}