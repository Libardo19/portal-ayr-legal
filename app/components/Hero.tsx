'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showForm, setShowForm] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const rotatingPhrases = [
    "Conflictos prediales con sustento técnico",
    "Proyectos viales con respaldo jurídico",
    "Peritajes que hablan en tribunales",
    "Topografía que define derechos"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/imagenes/heroback.jpg')",
            filter: 'brightness(0.5) contrast(1.1)'
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 70%, rgba(10, 35, 66, 0.7) 0%, transparent 60%),
              radial-gradient(circle at 70% 30%, rgba(6, 24, 41, 0.6) 0%, transparent 60%),
              linear-gradient(135deg, rgba(10, 35, 66, 0.75) 0%, rgba(22, 58, 95, 0.6) 100%)
            `
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="blur-soft">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            </filter>
          </defs>
          <path 
            d="M0,280 Q250,230 500,280 T1000,280 Q1300,300 1600,280 T1920,280" 
            stroke="var(--ayr-gold)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.4"
            filter="url(#blur-soft)"
          />
          <path 
            d="M0,480 Q300,430 600,480 T1200,480 Q1500,500 1800,480 T1920,480" 
            stroke="var(--ayr-gold)" 
            strokeWidth="1.5" 
            fill="none"
            opacity="0.3"
            filter="url(#blur-soft)"
          />
          <path 
            d="M0,680 Q350,630 700,680 T1400,680 Q1700,700 1920,680" 
            stroke="var(--ayr-gold)" 
            strokeWidth="1" 
            fill="none"
            opacity="0.2"
            filter="url(#blur-soft)"
          />
        </svg>

        <motion.div
          animate={{ 
            y: [-12, 12, -12],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[12%] w-[2px] h-28"
          style={{ 
            background: 'linear-gradient(to bottom, transparent, var(--ayr-gold), transparent)'
          }}
        />
        <motion.div
          animate={{ 
            y: [12, -12, 12],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[18%] w-[2px] h-36"
          style={{ 
            background: 'linear-gradient(to bottom, transparent, var(--ayr-gold), transparent)'
          }}
        />

        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full"
          style={{ background: 'var(--ayr-gold)' }}
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full"
          style={{ background: 'var(--ayr-gold)' }}
        />
      </motion.div>

      {/* Contenido Principal */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda - Contenido */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.08]"
            >
              <span className="text-white block mb-3" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}>
                Ingeniería de Precisión
              </span>
              <span 
                className="block"
                style={{ 
                  color: 'var(--ayr-gold)',
                  textShadow: '0 4px 30px rgba(201, 169, 97, 0.5)'
                }}
              >
                para una Defensa Legal Sólida
              </span>
            </motion.h1>

            {/* Frases rotativas */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-10 h-20 flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.5 }}
                  className="text-xl lg:text-2xl text-slate-200 leading-relaxed"
                  style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)' }}
                >
                  {rotatingPhrases[currentPhrase]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* CTA Principal */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                onClick={() => setShowForm(!showForm)}
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 rounded-2xl font-semibold text-lg overflow-hidden backdrop-blur-sm inline-flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 169, 97, 0.95) 0%, rgba(201, 169, 97, 0.85) 100%)',
                  boxShadow: '0 20px 60px rgba(201, 169, 97, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                  color: 'var(--ayr-blue-dark)'
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Cuéntanos tu caso</span>
                <motion.svg 
                  className="w-5 h-5"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
                
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)'
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Columna Derecha - Mini Formulario Flotante */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
                  className="absolute lg:relative w-full max-w-md p-8 rounded-3xl backdrop-blur-xl"
                  style={{
                    background: 'rgba(10, 35, 66, 0.85)',
                    border: '1px solid rgba(201, 169, 97, 0.3)',
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Contacto Rápido</h3>
                    <p className="text-sm text-slate-300">Te responderemos en breve</p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-amber-600"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(201, 169, 97, 0.2)'
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-400 outline-none transition-all duration-300 focus:ring-2"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(201, 169, 97, 0.2)'
                      }}
                    />
                    <textarea
                      placeholder="Cuéntanos brevemente tu situación"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-400 outline-none transition-all duration-300 focus:ring-2 resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(201, 169, 97, 0.2)'
                      }}
                    />
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl font-semibold transition-all duration-300"
                      style={{
                        background: 'var(--ayr-gold)',
                        color: 'var(--ayr-blue-dark)'
                      }}
                    >
                      Enviar Consulta
                    </motion.button>
                  </div>

                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicadores visuales decorativos */}
            {!showForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="hidden lg:flex flex-col gap-8"
              >
                {['Derecho', 'Ingeniería', 'Topografía'].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (idx * 0.2) }}
                    whileHover={{ x: -8, scale: 1.05 }}
                    className="flex items-center gap-4 cursor-default"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      className="w-3 h-3 rounded-full"
                      style={{ background: 'var(--ayr-gold)' }}
                    />
                    <span className="text-lg font-semibold tracking-wide" style={{ color: 'var(--ayr-gold)' }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <ArrowDown 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" 
              style={{ color: 'var(--ayr-gold)' }}
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Transición progresiva hacia siguiente sección */}
      <div 
        className="absolute bottom-0 left-0 w-full h-64 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #f7f9fb 0%, rgba(247, 249, 251, 0.6) 30%, rgba(247, 249, 251, 0.2) 60%, transparent 100%)'
        }}
      />
      
      {/* Overlay de profundidad - crea sensación de capa inferior */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(12, 20, 39, 0.08) 0%, transparent 100%)'
        }}
      />
    </section>
  );
}