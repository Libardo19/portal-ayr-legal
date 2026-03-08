"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Inicio",              href: "#inicio" },
  { label: "La Firma",            href: "#nosotros" },
  { label: "Servicios Jurídicos", href: "#juridico" },
  { label: "Ingeniería",          href: "#ingenieria" },
  { label: "Avalúos",             href: "#avaluos" },
  { label: "Contacto",            href: "#contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("Inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#102131] sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">

        {/* ── Desktop menu ── */}
        <ul className="hidden md:flex items-center overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.label}
              className={i < NAV_ITEMS.length - 1 ? "border-r border-white/10" : ""}
            >
              <Link
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`block py-5 px-5 font-bold text-sm tracking-widest hover:bg-[#0d1a26] transition ${
                  active === item.label ? "text-[#C8A75D]" : "text-white"
                }`}
              >
                {item.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop search ── */}
        <div className="hidden md:flex items-center bg-black/20 px-4 py-2 rounded border border-white/10">
          <input
            className="bg-transparent border-none text-white text-xs focus:outline-none placeholder-gray-400 w-40"
            placeholder="Buscar palabras clave"
            type="text"
          />
          <button className="text-gray-400 hover:text-white transition ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        {/* ── Mobile: Logo + Hamburger ── */}
        <div className="flex md:hidden items-center justify-between w-full py-4">
          {/* Logo mobile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#C8A75D' }}>
              <span className="text-[#102131] font-black text-xs">A&R</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm tracking-widest uppercase">A&R</span>
              <span className="text-gray-400 text-[8px] tracking-tighter uppercase">Abogados e Ingenieros</span>
            </div>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Abrir menú"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              }
            </svg>
          </button>
        </div>

      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1a26] border-t border-white/10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => { setActive(item.label); setMenuOpen(false); }}
              className={`block py-4 px-6 font-bold text-sm tracking-widest border-b border-white/5 transition ${
                active === item.label ? "text-[#C8A75D]" : "text-white"
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}