'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import {
  WHATSAPP_BASE,
  WA_ASESORIA,
  WA_PROTOCOLOS,
} from '../libs/contacto';

const SERVICIOS = [
  {
    id: '01',
    titulo: 'Derecho Administrativo',
    descripcion: 'Recursos, tutelas y procesos ante entidades públicas. Representamos a personas naturales y jurídicas en acciones de tutela, derechos de petición, recursos gubernativos, nulidades y restablecimiento del derecho.',
    ref: 'SEC-ADM.2024',
    waMsg: encodeURIComponent('Hola, necesito asesoría en Derecho Administrativo con A&R Abogados e Ingenieros.'),
  },
  {
    id: '02',
    titulo: 'Derecho Civil',
    descripcion: 'Contratos, sucesiones y responsabilidad civil. Asesoramos en redacción, revisión y litigio de contratos civiles y comerciales, procesos sucesorales, liquidación de sociedades conyugales y responsabilidad civil.',
    ref: 'SEC-CIV.2024',
    waMsg: encodeURIComponent('Hola, necesito asesoría en Derecho Civil con A&R Abogados e Ingenieros.'),
  },
  {
    id: '03',
    titulo: 'Derecho Penal',
    descripcion: 'Defensa técnica garantizando el debido proceso. Brindamos defensa penal en todas las etapas: investigación, imputación, acusación y juicio oral. Especial énfasis en delitos relacionados con tierras y urbanismo.',
    ref: 'SEC-PEN.2024',
    waMsg: encodeURIComponent('Hola, necesito asesoría en Derecho Penal con A&R Abogados e Ingenieros.'),
  },
  {
    id: '04',
    titulo: 'Derecho Laboral y SST',
    descripcion: 'Asesoría laboral y seguridad y salud en el trabajo. Contratación, despidos, liquidaciones, acoso laboral y diseño de Sistemas de Gestión de Seguridad y Salud en el Trabajo.',
    ref: 'SEC-LAB.2024',
    waMsg: encodeURIComponent('Hola, necesito asesoría en Derecho Laboral o SST con A&R Abogados e Ingenieros.'),
  },
  {
    id: '05',
    titulo: 'Amparos Policivos',
    descripcion: 'Protección inmediata de posesión y tenencia. Tramitamos querellas policivas para proteger la posesión, mera tenencia y ocupación de bienes inmuebles ante perturbaciones o despojos.',
    ref: 'SEC-POL.2024',
    waMsg: encodeURIComponent('Hola, necesito asesoría en Amparos Policivos con A&R Abogados e Ingenieros.'),
  },
  {
    id: '06',
    titulo: 'Derecho de Familia',
    descripcion: 'Custodia, alimentos y procesos de familia. Acompañamiento en divorcios, custodia y visitas, fijación de alimentos, adopciones e investigación de paternidad.',
    ref: 'SEC-FAM.2024',
    waMsg: encodeURIComponent('Hola, necesito asesoría en Derecho de Familia con A&R Abogados e Ingenieros.'),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.1, 0.25, 1] } },
};

function ServicioItem({
  servicio,
  isOpen,
  onToggle,
}: {
  servicio: typeof SERVICIOS[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative cursor-pointer transition-colors duration-200 ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.025]'}`}
      onClick={onToggle}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#C8A75D] transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />

      <div className="px-6 md:px-8 py-5 md:py-6 border-b border-white/[0.06]">
        <div className="flex items-center gap-4">
          <span className={`font-mono text-xl md:text-2xl shrink-0 transition-colors duration-200 ${isOpen ? 'text-[#C8A75D]' : 'text-white/20 group-hover:text-[#C8A75D]/50'}`}>
            {servicio.id}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className={`font-serif text-base md:text-lg transition-colors duration-200 ${isOpen ? 'text-[#C8A75D]' : 'text-white group-hover:text-[#C8A75D]'}`}>
                {servicio.titulo}
              </h3>
              <span className="font-mono text-[8px] text-[#C8A75D] tracking-widest uppercase hidden sm:inline">
                {servicio.ref}
              </span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className={`shrink-0 transition-colors duration-200 ${isOpen ? 'text-[#C8A75D]' : 'text-white/30 group-hover:text-[#C8A75D]/60'}`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="text-sm text-white/65 leading-relaxed mt-3 pl-10 md:pl-12 pr-6">
                {servicio.descripcion}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ServiciosJuridicosSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      id="juridico"
      className="relative bg-[#0c1427] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(197,198,205,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(197,198,205,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #0a1628 0%, rgba(10,22,40,0.5) 40%, transparent 100%)' }}
      />

      <div
        className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.2) 60%, transparent 100%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 md:mb-14 max-w-2xl"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8A75D] block mb-5">
            Ámbito Legal de Actuación
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight mb-5">
            Áreas de defensa jurídica del territorio
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            En la intersección del derecho y la ingeniería topográfica, operamos con precisión
            cartográfica para blindar la propiedad privada y la gestión institucional de la tierra.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="border-t border-white/[0.06]"
        >
          {SERVICIOS.map((servicio) => (
            <ServicioItem
              key={servicio.id}
              servicio={servicio}
              isOpen={openId === servicio.id}
              onToggle={() => setOpenId(prev => prev === servicio.id ? null : servicio.id)}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-20 w-full h-12 border-t border-white/[0.05] flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C8A75D] rounded-full animate-pulse" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">
            Sistema Activo: Verificación Registral en Tiempo Real
          </span>
        </div>
        <div className="font-mono text-[8px] text-white/15 uppercase tracking-tighter hidden sm:block">
          A&R LEGAL & ENGINEERING // ISO 9001:2015
        </div>
      </div>
    </section>
  );
}