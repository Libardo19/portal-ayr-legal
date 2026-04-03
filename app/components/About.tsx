'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HardHat, FileCheck, Map, ShieldCheck, Briefcase } from 'lucide-react';

const PILLARS = [
  {
    Icon: Scale,
    title: 'Derecho & Ingeniería',
    desc: 'La única firma interdisciplinaria en Valledupar que combina asesoría jurídica con soporte técnico de ingeniería.',
  },
  {
    Icon: Map,
    title: 'Valledupar, Cesar',
    desc: 'Conocemos el territorio, sus conflictos prediales y su gente. Presencia local con capacidad técnica nacional.',
  },
  {
    Icon: ShieldCheck,
    title: 'Defensa Integral',
    desc: 'Un solo equipo para su caso: abogados y geólogos trabajando juntos desde el diagnóstico hasta la solución.',
  },
];

const EXPERTISE_CARDS = [
  {
    Icon: Scale,
    title: 'Derecho Especializado',
    desc: 'Abogados expertos en Derecho de Tierras, Administrativo y SST. Gestión de servidumbres y conflictos prediales.',
  },
  {
    Icon: HardHat,
    title: 'Ingeniería & Geología',
    desc: 'Especialistas en Gestión Ambiental, estudios de suelos, geotecnia y soporte técnico para proyectos viales.',
  },
  {
    Icon: Map,
    title: 'Topografía de Precisión',
    desc: 'Levantamientos topográficos, definición de linderos y verificación técnica para procesos judiciales.',
  },
  {
    Icon: FileCheck,
    title: 'Avalúos Certificados',
    desc: 'Ingeniería de avalúos en 13 categorías. Fines judiciales, comerciales y financieros.',
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative w-full bg-[#0B1120] text-slate-200 py-20 overflow-hidden"
    >
      {/* Glows decorativos */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Cabecera ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="font-semibold tracking-widest text-sm uppercase mb-2 block" style={{ color: 'var(--ayr-gold)' }}>
            La Firma
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Derecho e Ingeniería,{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, var(--ayr-gold), #EAD2AC)' }}
            >
              al servicio de su territorio.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A&R Abogados e Ingenieros S.A.S es una firma interdisciplinaria fundada por dos
            profesionales especializados que integran el derecho y la ingeniería para la defensa
            del territorio, conflictos prediales y proyectos de infraestructura.
          </p>
        </motion.div>

        {/* ── Grid narrativa + tarjetas ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          {/* Columna izquierda: Narrativa */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white border-l-4 pl-4" style={{ borderColor: 'var(--ayr-gold)' }}>
              Interdisciplinariedad Real
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Somos una firma que integra derecho, ingeniería, gestión ambiental, topografía y avalúos.
              Nuestro enfoque es <strong>preventivo, estratégico y probatorio</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed text-justify">
              Abordamos conflictos territoriales y proyectos de infraestructura entendiendo que la tierra
              no es solo un bien jurídico, sino un elemento técnico, ambiental y económico que requiere
              un análisis especializado.
            </p>

            <div className="pt-4">
              <ul className="space-y-3">
                {['Defensa Jurídica del Territorio', 'Ingeniería Aplicada a Proyectos', 'Gestión Predial y Ambiental'].map(
                  (item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-white">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(201,169,97,0.2)' }}
                      >
                        <ShieldCheck size={14} style={{ color: 'var(--ayr-gold)' }} />
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contacto"
                className="font-bold py-3 px-8 rounded-lg transition duration-300 uppercase text-sm tracking-wider hover:opacity-90"
                style={{ backgroundColor: 'var(--ayr-gold)', color: 'var(--ayr-blue-dark)' }}
              >
                Solicitar Consulta
              </a>
              <a
                href="#juridico"
                className="font-bold py-3 px-8 rounded-lg transition duration-300 uppercase text-sm tracking-wider"
                style={{
                  border: '1.5px solid rgba(201,169,97,0.4)',
                  color: 'var(--ayr-gold)',
                  background: 'rgba(201,169,97,0.08)',
                }}
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>

          {/* Columna derecha: ExpertiseCards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPERTISE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl transition-colors duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                whileHover={{ borderColor: 'rgba(201,169,97,0.4)' } as any}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: 'var(--ayr-gold)' }}>
                  <card.Icon size={28} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

       

      </div>
    </section>
  );
}