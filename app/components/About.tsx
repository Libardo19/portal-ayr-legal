import Image from "next/image";
import Link from "next/link";

const PILLARS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: "Derecho & Ingeniería",
    desc: "La única firma interdisciplinaria en Valledupar que combina asesoría jurídica con soporte técnico de ingeniería.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Valledupar, Cesar",
    desc: "Conocemos el territorio, sus conflictos prediales y su gente. Presencia local con capacidad técnica nacional.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Defensa Integral",
    desc: "Un solo equipo para su caso: abogados y geólogos trabajando juntos desde el diagnóstico hasta la solución.",
  },
];

export default function About() {
  return (
    <section id="nosotros">

      {/* ── TOP: Texto izquierda + Foto derecha ── */}
      <div className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[580px]">

          {/* Left — Text */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-16 lg:py-0">
            <p className="font-bold uppercase tracking-widest text-xs mb-4" style={{ color: '#C8A75D' }}>
              La Firma
            </p>
            <h2 className="text-[#102131] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Derecho e Ingeniería,<br />
              al servicio de<br />
              su territorio.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              A&amp;R Abogados e Ingenieros S.A.S es una firma interdisciplinaria
              fundada por dos profesionales especializados que integran el derecho
              y la ingeniería para la defensa del territorio, conflictos prediales
              y proyectos de infraestructura.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contacto"
                className="text-white font-bold py-3 px-8 rounded transition duration-300 uppercase text-sm tracking-wider hover:opacity-90"
                style={{ backgroundColor: '#C8A75D' }}
              >
                Solicitar Consulta
              </Link>
              <Link
                href="#nosotros"
                className="bg-[#102131] hover:bg-[#0d1a26] text-white font-bold py-3 px-8 rounded transition duration-300 uppercase text-sm tracking-wider"
              >
                Conocer la Firma
              </Link>
            </div>
          </div>

          {/* Right — Foto equipo */}
          <div className="flex-1 relative flex items-end justify-center min-h-[420px] lg:min-h-0 overflow-hidden bg-white">
            <div className="relative w-full h-full min-h-[420px]">
              <Image
                src="/imagenes/equipo.png"
                alt="Andersson Acosta y Laura Rangel — Socios Fundadores A&R"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM: Barra de 3 pilares ── */}
      <div className="bg-[#102131]">
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-start gap-3 px-0 md:px-8 py-8 md:py-0 first:pl-0 last:pr-0">
                <div style={{ color: '#C8A75D' }}>
                  {pillar.icon}
                </div>
                <h4 className="text-white font-bold text-base tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}