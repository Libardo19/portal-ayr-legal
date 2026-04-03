'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Inicio',              href: '#inicio' },
  { label: 'La Firma',            href: '#nosotros' },
  { label: 'Servicios Jurídicos', href: '#juridico' },
  { label: 'Ingeniería',          href: '#ingenieria' },
  { label: 'Avalúos',             href: '#avaluos' },
  { label: 'Contacto',            href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('Inicio');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Top Bar scrolling infinito ── */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100'
        }`}
        style={{
          background: 'var(--ayr-blue-dark)',
          borderBottom: '1px solid rgba(201,169,97,0.2)',
        }}
      >
        <div className="relative overflow-hidden py-2.5">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--ayr-blue-dark), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--ayr-blue-dark), transparent)' }} />
          <motion.div
            className="flex gap-10"
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(2)].map((_, ci) => (
              <div key={ci} className="flex gap-8 items-center whitespace-nowrap shrink-0">
                {[
                  '+57 (5) 584 1234',
                  'Valledupar, Cesar',
                  'Lun - Vie: 8:00 - 18:00',
                  'info@ar-abogadoseingenieros.com',
                  'Líderes en Soluciones Legales e Ingeniería desde 2005',
                  'Certificación Global ISO 9001:2015',
                ].map((item, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--ayr-gold)' }} />
                    <span className="text-xs font-medium text-slate-300">{item}</span>
                    {i < arr.length - 1 && <span className="text-slate-600 text-xs ml-4">|</span>}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Navbar principal ── */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'top-0 shadow-2xl' : 'top-10'
        }`}
        style={{
          background: isScrolled
            ? 'rgba(10, 35, 66, 0.97)'
            : 'linear-gradient(to bottom, rgba(10, 35, 66, 0.85) 0%, rgba(10, 35, 66, 0.4) 100%)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(12px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <Link href="#inicio" className="flex items-center gap-3 group">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ background: 'var(--ayr-gold)' }}
                >
                  <span className="text-xs font-black" style={{ color: 'var(--ayr-blue-dark)' }}>
                    A&R
                  </span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-white transition-all duration-300 group-hover:tracking-wide">
                    A&R
                  </div>
                  <div
                    className="text-[9px] tracking-[0.18em] uppercase font-semibold -mt-0.5"
                    style={{ color: 'var(--ayr-gold)' }}
                  >
                    Abogados e Ingenieros
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.6, 0.05, 0.01, 0.9] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActive(item.label)}
                    className={`relative text-sm font-medium tracking-wide py-2 transition-all duration-300 group ${
                      active === item.label ? 'text-[#C9A961]' : 'text-white hover:text-[#C9A961]'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                        active === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ background: 'var(--ayr-gold)' }}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <Link
                  href="#contacto"
                  className="px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300"
                  style={{
                    border: '1.5px solid var(--ayr-gold)',
                    color: 'var(--ayr-gold)',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'var(--ayr-gold)';
                    el.style.color = 'var(--ayr-blue-dark)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.color = 'var(--ayr-gold)';
                  }}
                >
                  Solicitar Asesoría
                </Link>
              </motion.div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                color: mobileMenuOpen ? 'var(--ayr-gold)' : 'white',
                background: mobileMenuOpen ? 'rgba(201, 169, 97, 0.1)' : 'transparent',
              }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay oscuro */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Panel lateral premium */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-[85%] sm:w-[60%] z-[70] lg:hidden flex flex-col"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 24, 41, 0.98) 0%, rgba(10, 35, 66, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(201, 169, 97, 0.2)',
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Header panel */}
            <div
              className="px-6 py-6 border-b flex items-center justify-between"
              style={{ borderColor: 'rgba(201, 169, 97, 0.15)' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-sm"
                  style={{ background: 'var(--ayr-gold)' }}
                >
                  <span className="text-[10px] font-black" style={{ color: 'var(--ayr-blue-dark)' }}>
                    A&R
                  </span>
                </div>
                <div>
                  <div className="text-base font-bold text-white">A&R</div>
                  <div
                    className="text-[7px] tracking-widest uppercase font-semibold -mt-0.5"
                    style={{ color: 'var(--ayr-gold)' }}
                  >
                    Abogados e Ingenieros
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg transition-all duration-300"
                style={{ color: 'var(--ayr-gold)', background: 'rgba(201, 169, 97, 0.1)' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => { setActive(item.label); setMobileMenuOpen(false); }}
                      className="group flex items-center justify-between py-4 px-4 rounded-lg transition-all duration-300 relative overflow-hidden"
                      style={{ color: active === item.label ? 'var(--ayr-gold)' : 'white' }}
                    >
                      <span className="relative z-10 font-medium text-base tracking-wide transition-all duration-300 group-hover:translate-x-2">
                        {item.label}
                      </span>
                      <ArrowRight
                        className="w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 relative z-10"
                        style={{ color: 'var(--ayr-gold)' }}
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(201, 169, 97, 0.08)' }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* CTA fijo abajo */}
            <div
              className="p-6 border-t"
              style={{
                borderColor: 'rgba(201, 169, 97, 0.15)',
                background: 'rgba(6, 24, 41, 0.8)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:opacity-90"
                  style={{
                    background: 'var(--ayr-gold)',
                    color: 'var(--ayr-blue-dark)',
                    boxShadow: '0 10px 30px rgba(201, 169, 97, 0.3)',
                  }}
                >
                  <span>Solicitar Asesoría</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}