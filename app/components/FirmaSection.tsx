'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  WHATSAPP_BASE,
  WA_DIAGNOSTICO,
  WA_EVALUAR,
} from '../libs/contacto';

function Counter({ value, suffix = '', label, delay = 0 }: { value: number; suffix?: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      >
        <div className="font-serif text-3xl sm:text-4xl text-[#0c1427]">{count}{suffix}</div>
        <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#45474c] mt-1.5">{label}</div>
      </motion.div>
    </div>
  );
}

function CapabilityItem({ title, description, delay }: { title: string; description: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.42, delay, ease: 'easeOut' }}
      className="flex items-start gap-4 sm:gap-6 group"
    >
      <div className="w-[1px] h-10 sm:h-12 bg-[#0c1427] transition-all duration-300 group-hover:h-14 shrink-0 mt-1" />
      <div>
        <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#0c1427] font-bold leading-snug">{title}</h4>
        <p className="text-xs sm:text-sm text-[#45474c] font-light mt-1 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function FirmaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative overflow-hidden bg-[#f7f9fb]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(197,198,205,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(197,198,205,0.12) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-40 sm:h-48 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #0c1427 100%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
        >
          <div className="w-full md:w-[60%] space-y-8 sm:space-y-10">
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#45474c] block">
                Referencia: Institución Técnica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0c1427] leading-tight">
                Derecho e Ingeniería al servicio del territorio
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-[#45474c] font-light leading-relaxed max-w-xl">
                Operamos en la convergencia crítica de la precisión técnica y el rigor legal.
                Nuestra metodología integra cartografía avanzada de ingeniería con la defensa
                jurídica especializada para garantizar la seguridad de la propiedad y el
                desarrollo ordenado del suelo.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 sm:space-y-6">
              <CapabilityItem title="Defensa jurídica del territorio" description="Protección legal integral contra litigios de propiedad y deslinde territorial." delay={0.2} />
              <CapabilityItem title="Ingeniería aplicada a conflictos prediales" description="Análisis multitemporal y levantamientos GNSS de alta precisión para resolución de conflictos." delay={0.32} />
              <CapabilityItem title="Gestión ambiental y avalúos técnicos" description="Determinación técnica de valores comerciales y cumplimiento de normatividad ecológica." delay={0.44} />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-[#c5c6cd]/30 pt-8 sm:pt-10">
              <Counter value={15} suffix="+" label="Años de Trayectoria" delay={0.1} />
              <Counter value={200} suffix="+" label="Proyectos Ejecutados" delay={0.2} />
              <Counter value={500} suffix="+" label="Casos Resueltos" delay={0.3} />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href={`${WHATSAPP_BASE}?text=${WA_DIAGNOSTICO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0c1427] text-white px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#21283c] transition-colors duration-200 shadow-sm w-full sm:w-auto text-center"
              >
                Solicitar diagnóstico predial
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${WA_EVALUAR}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#0c1427] text-[#0c1427] px-6 sm:px-8 py-3.5 sm:py-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#e6e8ea] transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Evaluar mi caso
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-[40%] relative hidden sm:block">
            <div className="relative bg-white border border-[#c5c6cd]/20 p-3 sm:p-4 shadow-xl">
              <div className="aspect-[3/4] bg-[#eceef0] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img alt="Equipo A&R" src="/imagenes/equipo.png" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
                <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,20 Q25,15 50,30 T100,20" fill="none" stroke="#0c1427" strokeWidth="0.1" />
                  <path d="M0,40 Q30,35 60,50 T100,45" fill="none" stroke="#0c1427" strokeWidth="0.1" />
                  <path d="M0,60 Q20,65 45,75 T100,65" fill="none" stroke="#0c1427" strokeWidth="0.1" />
                  <circle cx="65" cy="45" fill="none" r="1.5" stroke="#ba1a1a" strokeWidth="0.2" />
                  <line stroke="#0c1427" strokeDasharray="1,1" strokeWidth="0.05" x1="65" x2="65" y1="0" y2="100" />
                  <line stroke="#0c1427" strokeDasharray="1,1" strokeWidth="0.05" x1="0" x2="100" y1="45" y2="45" />
                </svg>
                <div className="absolute top-3 left-3 bg-[#0c1427] text-white px-2 py-1 font-mono text-[8px] uppercase tracking-tighter">Límite Predial: Sector 04-A</div>
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm border border-[#c5c6cd] p-2 font-mono text-[8px] text-[#0c1427] space-y-0.5">
                  <div>LAT: 10.3910° N</div>
                  <div>LON: 75.4794° W</div>
                  <div className="text-red-600 font-bold mt-1">ZONA EN DISPUTA</div>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-end border-t border-[#c5c6cd]/30 pt-3">
                <div>
                  <span className="font-mono text-[9px] text-[#45474c] block uppercase">Survey Sheet No.</span>
                  <span className="font-mono text-xs font-bold text-[#0c1427]">COD-2024-X-77</span>
                </div>
                <svg className="w-4 h-4 text-[#0c1427]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h20.25m-18-13v5m18-10.5v5.25m-18 5.25v5.25m18-5.25v5.25m-4.5-12.75l3 3m0 0l3-3m-3 3V6.75m0 0L9.75 9m3 3l3 3m-3-3l-3 3" />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-[#0c1427] opacity-15 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-4 top-1/2 -rotate-90 origin-right z-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#75777d] opacity-35 whitespace-nowrap">
          A&R LEGAL & ENGINEERING // PROPERTY RIGHTS
        </span>
      </div>
    </section>
  );
}