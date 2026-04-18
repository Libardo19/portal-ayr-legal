'use client';

import { WHATSAPP_BASE, WA_DIAGNOSTICO } from '../libs/contacto';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative bg-white text-[#0c1427]"> {/* ✅ id agregado */}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(12,20,39,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(12,20,39,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-8 pt-20 pb-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-[#0c1427]/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#0c1427] stroke-[1.5]">
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#0c1427] uppercase">A&R</span>
                <span className="block font-mono text-[9px] tracking-widest text-[#45474c] uppercase">Abogados e Ingenieros</span>
              </div>
            </div>
            <p className="text-[13px] text-[#45474c] leading-relaxed font-light">
              Derecho e ingeniería al servicio del territorio. Defensa técnica y jurídica con precisión probatoria.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 border border-[#0c1427]/15 flex items-center justify-center hover:border-[#0c1427]/50 transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#45474c] stroke-[1.5]">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href={`${WHATSAPP_BASE}?text=${WA_DIAGNOSTICO}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#0c1427]/15 flex items-center justify-center hover:border-[#0c1427]/50 transition-colors" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#45474c] stroke-[1.5]">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 border border-[#0c1427]/15 flex items-center justify-center hover:border-[#0c1427]/50 transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#45474c] stroke-[1.5]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios Jurídicos */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#45474c] mb-5">Servicios Jurídicos</h4>
            <ul className="space-y-2.5">
              {['Derecho Civil', 'Derecho Penal', 'Derecho Laboral y SST', 'Amparos Policivos', 'Derecho de Familia', 'Derecho Comercial'].map((item) => (
                <li key={item}>
                  <a href="#juridico" className="text-[13px] text-[#45474c] hover:text-[#0c1427] transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingeniería & Avalúos */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#45474c] mb-5">Ingeniería & Avalúos</h4>
            <ul className="space-y-2.5">
              {['Geotecnia y Suelos', 'Gestión Ambiental', 'Infraestructura Vial', 'Peritajes Técnicos', 'Avalúos Judiciales', 'Avalúos Comerciales'].map((item) => (
                <li key={item}>
                  <a href="#ingenieria" className="text-[13px] text-[#45474c] hover:text-[#0c1427] transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#45474c] mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#45474c] stroke-[1.5] mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                <a href="tel:+573174685371" className="text-[13px] text-[#45474c] hover:text-[#0c1427] transition-colors font-light">
                  +57 317 468 5371
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#45474c] stroke-[1.5] mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:arabogadoseingenieros@gmail.com" className="text-[13px] text-[#45474c] hover:text-[#0c1427] transition-colors font-light break-all">
                  arabogadoseingenieros@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#45474c] stroke-[1.5] mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[13px] text-[#45474c] font-light">
                  Valledupar, Cesar<br />Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0c1427]/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-[#75777d] uppercase tracking-widest">
            © {currentYear} A&R Abogados e Ingenieros · Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[10px] text-[#75777d] hover:text-[#0c1427] transition-colors uppercase tracking-widest">
              Política de Privacidad
            </a>
            <a href="#" className="font-mono text-[10px] text-[#75777d] hover:text-[#0c1427] transition-colors uppercase tracking-widest">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}