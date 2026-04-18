    "use client";
    import { useEffect, useRef } from "react";

    interface ServiceItem { num: string; icon: React.ReactNode; name: string; desc: string; }
    interface CounterProps { target: number; suffix: string; label: string; delay: number; }
    type BracketKey = "tl" | "tr" | "bl" | "br";

    const services: ServiceItem[] = [
    {
        num: "// 01",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#c9a84c] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M3 21l9-18 9 18M6.5 14h11" /></svg>,
        name: "Geotecnia y Suelos",
        desc: "Caracterización estratigráfica y capacidad portante para obras civiles y defensa territorial.",
    },
    {
        num: "// 02",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#c9a84c] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        name: "Gestión Ambiental",
        desc: "Estudios de impacto, planes de manejo y permisos ante autoridades ambientales.",
    },
    {
        num: "// 03",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#c9a84c] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m-3 13h8m-4-4v8" /></svg>,
        name: "Infraestructura Vial",
        desc: "Diseño, supervisión e interventoría de vías, puentes y obras de ingeniería civil.",
    },
    {
        num: "// 04",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#c9a84c] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
        name: "Peritajes Técnicos",
        desc: "Dictámenes con validez probatoria para litigios de daños, servidumbres y expropiaciones.",
    },
    ];

    const techLabels = ["GEO", "AMB", "VIA"];
    const techCx = [245, 490, 735];

    const bracketPos: Record<BracketKey, string> = {
    tl: "top-8 left-8", tr: "top-8 right-8",
    bl: "bottom-8 left-8", br: "bottom-8 right-8",
    };
    const bracketDelays: Record<BracketKey, { v: number; h: number }> = {
    tl: { v: 0.3, h: 0.5 }, tr: { v: 0.4, h: 0.6 },
    bl: { v: 0.5, h: 0.7 }, br: { v: 0.6, h: 0.8 },
    };

    function useCountUp(ref: React.RefObject<HTMLDivElement | null>, target: number, suffix: string, delay = 0) {
    useEffect(() => {
        const timer = setTimeout(() => {
        const el = ref.current;
        if (!el) return;
        let start = 0;
        const inc = target / (1800 / 16);
        const interval = setInterval(() => {
            start += inc;
            if (start >= target) { start = target; clearInterval(interval); }
            el.textContent = (suffix === "+" ? "+" : "") + Math.floor(start);
        }, 16);
        }, delay);
        return () => clearTimeout(timer);
    }, [ref, target, suffix, delay]);
    }

    function Counter({ target, suffix, label, delay }: CounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    useCountUp(ref, target, suffix, delay);
    return (
        <div className="pr-9 mr-9 border-r border-[#c9a84c]/20 last:border-r-0 last:mr-0 last:pr-0">
        <div ref={ref} className="font-mono text-[34px] font-bold text-[#c9a84c] leading-none">0</div>
        <div className="text-[11px] text-[#4a6a8a] uppercase tracking-[2px] mt-1">{label}</div>
        </div>
    );
    }

    function Brackets() {
    const keys: BracketKey[] = ["tl", "tr", "bl", "br"];
    return (
        <>
        {keys.map((k) => {
            const isTop = k.startsWith("t");
            const isLeft = k.endsWith("l");
            const { v, h } = bracketDelays[k];
            const edge = {
            ...(isTop ? { top: 0 } : { bottom: 0 }),
            ...(isLeft ? { left: 0 } : { right: 0 }),
            };
            return (
            <div key={k} className={`absolute w-9 h-9 z-20 ${bracketPos[k]}`}>
                <div className="absolute bg-[#c9a84c]" style={{ width: "2px", height: 0, ...edge, animation: `growH 0.4s ${v}s forwards` }} />
                <div className="absolute bg-[#c9a84c]" style={{ height: "2px", width: 0, ...edge, animation: `growW 0.4s ${h}s forwards` }} />
            </div>
            );
        })}
        <style>{`@keyframes growH{to{height:36px;}}@keyframes growW{to{width:36px;}}`}</style>
        </>
    );
    }

    export default function Ingenieria() {
    return (
        //  bg-white restaurado, sin overflow-hidden
        <section id="ingenieria" className="relative bg-white">

        {/* Grid overlay */}
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            }}
        />

        {/* Scanlines */}
        <div
            className="absolute inset-0 pointer-events-none z-0 opacity-40"
            style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(10,22,40,0.08) 39px,rgba(10,22,40,0.08) 40px)",
            }}
        />

        <Brackets />

        {/* Hero */}
        <div className="relative z-20 px-14 pt-28 pb-14 max-w-[1120px] mx-auto">
            
            <div className="flex items-center gap-4 mb-10 animate-[fadeUp_0.5s_0.6s_both]">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="font-mono text-[15px] text-[#c9a84c] tracking-[2px] uppercase">Ingeniería · A&amp;R</span>
            
            </div>

            <h2 className="text-[62px] font-bold leading-none animate-[fadeUp_0.7s_0.8s_both]">
            <span className="block text-[#0b1826]">Ingeniería</span>
            <span className="block" style={{ color: "transparent", WebkitTextStroke: "1.5px #c9a84c" }}>de precisión.</span>
            <span className="block text-[#c9a84c]">Sin margen de error.</span>
            </h2>

            <p className="text-[14px] text-[#4a6a8a] leading-[1.7] max-w-[500px] mt-5 animate-[fadeUp_0.6s_1.1s_both]">
            Geotecnia, gestión ambiental e infraestructura al servicio de su defensa. Donde la técnica se convierte en el argumento más sólido de su caso.
            </p>
        </div>

        {/* Tech line SVG */}
        <div className="relative z-20 px-14 max-w-[1120px] mx-auto animate-[fadeUp_0.7s_1.5s_both]">
            <svg width="100%" viewBox="0 0 980 60" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="30" x2="980" y2="30" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
            <circle cx="0" cy="30" r="3" fill="#c9a84c" opacity="0.4" />
            <circle cx="980" cy="30" r="3" fill="#c9a84c" opacity="0.4" />
            {techCx.map((cx, i) => (
                <g key={cx}>
                <circle cx={cx} cy="30" r="5" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                    <animate attributeName="r" values="5;8;5" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </circle>
                <rect x={cx - 25} y="16" width="50" height="28" rx="4" fill="#0a1628" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text x={cx} y="33" textAnchor="middle" fontFamily="Space Mono,monospace" fontSize="9" fill="#c9a84c" letterSpacing="1">
                    {techLabels[i]}
                </text>
                </g>
            ))}
            <circle cx="490" cy="30" r="2" fill="#c9a84c">
                <animateMotion dur="4s" repeatCount="indefinite" path="M-490 0 L490 0" />
            </circle>
            </svg>
        </div>

        {/* Services grid */}
        <div className="relative z-20 max-w-[1120px] mx-auto pb-40">
            <div
            className="grid grid-cols-4"
            style={{
                gap: "1px",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.1)",
                borderRadius: "0 0 16px 16px",
                overflow: "hidden",
            }}
            >
            {services.map((s, i) => (
                <div
                key={i}
                className="bg-[#0a1628] px-7 py-8 cursor-pointer hover:bg-[#0e1e35] transition-colors group"
                style={{ animation: `fadeUp 0.5s ${1.6 + i * 0.15}s both` }}
                >
                <p className="font-mono text-[10px] text-[#C8A75D] tracking-[2px] mb-5">{s.num}</p>
                <div className="mb-4">{s.icon}</div>
                <h4 className="text-[15px] font-semibold text-[#C8A75D] mb-2 leading-snug">{s.name}</h4>
                <p className="text-[12px] text-white leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-1.5 mt-5 text-[10px] font-bold tracking-[2px] uppercase text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#c9a84c] fill-none stroke-2">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
                    </svg>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* ✅ Sombra bottom: va de transparente a #060f1a (color exacto de Avalúos) */}
        <div
            className="absolute bottom-0 left-0 w-full pointer-events-none z-50"
            style={{
            height: "160px",    
            background: "linear-gradient(to bottom, transparent 0%, #060f1a 100%)",
            }}
        />

        <style>{`
            @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
            @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        `}</style>
        </section>
    );
    }