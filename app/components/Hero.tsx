import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen md:min-h-[600px] flex flex-col md:items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagenes/heroback.jpg"
          alt="Profesional A&R Abogados e Ingenieros"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(16,33,49,0.85) 0%, rgba(16,33,49,0.55) 55%, rgba(16,33,49,0.3) 100%)",
          }}
        />
      </div>

      {/* ── Mobile layout — bottom aligned ── */}
      <div className="relative z-10 flex flex-col flex-grow justify-end px-6 pb-12 pt-20 md:hidden w-full max-w-[375px] mx-auto">
        {/* ISO badge */}
        <div className="mb-6">
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold border-l-2 pl-2" style={{ color: '#C8A75D', borderColor: '#C8A75D' }}>
            Certificación Global ISO 9001:2015
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black uppercase leading-[1.1] mb-8 tracking-tight text-white">
          Tu defensa y{" "}
          <span style={{ color: '#C8A75D' }}>tu tierra,</span>{" "}
          en manos expertas
        </h1>

        {/* Subtitle */}
        <div className="border-l-4 pl-4 mb-10" style={{ borderColor: '#C8A75D' }}>
          <p className="text-lg italic leading-relaxed text-gray-100 font-light">
            Integración del derecho y la ingeniería para la defensa del territorio,
            conflictos prediales y proyectos de infraestructura.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="#juridico"
          className="block w-full text-center text-[#102131] font-black py-5 rounded-md transition-colors duration-300 shadow-xl uppercase tracking-widest text-sm"
          style={{ backgroundColor: '#C8A75D' }}
        >
          Conoce nuestros servicios
        </Link>

        {/* Scroll hint */}
        <div className="mt-12 flex justify-center opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-[#C8A75D] to-transparent" />
        </div>
      </div>

      {/* ── Desktop layout — centered left ── */}
      <div className="relative z-10 hidden md:flex max-w-7xl mx-auto px-4 md:px-10 py-20 w-full items-center min-h-[600px]">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold border-l-2 pl-2" style={{ color: '#C8A75D', borderColor: '#C8A75D' }}>
              Certificación Global ISO 9001:2015
            </span>
          </div>
          <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight uppercase">
            Tu defensa y tu tierra,{" "}
            <span style={{ color: '#C8A75D' }}>en manos expertas</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl italic font-light mb-10 border-l-4 pl-6 leading-relaxed max-w-2xl" style={{ borderColor: '#C8A75D' }}>
            Integración del derecho y la ingeniería para la defensa del
            territorio, conflictos prediales y proyectos de infraestructura.
          </p>
          <Link
            href="#juridico"
            className="inline-block text-[#102131] font-black py-4 px-10 rounded shadow-2xl transition duration-300 hover:-translate-y-1 transform uppercase text-sm tracking-widest"
            style={{ backgroundColor: '#C8A75D' }}
          >
            Conoce Nuestros Servicios
          </Link>
        </div>
      </div>

    </section>
  );
}