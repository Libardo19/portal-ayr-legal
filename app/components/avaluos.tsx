    "use client";
    import { useEffect, useRef } from "react";

    interface CategoryItem { num: string; name: string; tag: string; }
    interface WideCell { icon: React.ReactNode; title: string; desc: string; }
    interface CounterData { target: number; suffix: string; label: string; }
    interface TechNode { cx: number; label: string; }
    interface CounterProps { target: number; suffix: string; label: string; delay: number; }
    type BracketKey = "tl" | "tr" | "bl" | "br";

    const categories: CategoryItem[] = [
    { num: "// 01", name: "Inmuebles Urbanos y Rurales",  tag: "Predial"      },
    { num: "// 02", name: "Maquinaria y Equipos",         tag: "Industrial"   },
    { num: "// 03", name: "Establecimientos de Comercio", tag: "Comercial"    },
    { num: "// 04", name: "Semovientes y Ganado",         tag: "Agropecuario" },
    { num: "// 05", name: "Bienes Muebles",               tag: "Patrimonio"   },
    { num: "// 06", name: "Intangibles y Derechos",       tag: "Financiero"   },
    { num: "// 07", name: "Cosechas y Plantaciones",      tag: "Agrícola"     },
    { num: "// 08", name: "Vehículos y Flota",            tag: "Transporte"   },
    ];

    const wideCells: WideCell[] = [
    {
        icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#c9a84c] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: "Fines Judiciales y Probatorios",
        desc: "Avalúos con validez ante jueces para expropiaciones, sucesiones, liquidaciones y litigios prediales.",
    },
    {
        icon: <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#c9a84c] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        title: "Fines Financieros y Bancarios",
        desc: "Valoración de activos para créditos hipotecarios, garantías bancarias y estados financieros empresariales.",
    },
    ];

    const techNodes: TechNode[] = [
    { cx: 196, label: "INM" },
    { cx: 392, label: "MAQ" },
    { cx: 588, label: "COM" },
    { cx: 784, label: "FIN" },
    ];

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
            const isTop  = k.startsWith("t");
            const isLeft = k.endsWith("l");
            const { v, h } = bracketDelays[k];
            const edge = {
            ...(isTop  ? { top: 0 }  : { bottom: 0 }),
            ...(isLeft ? { left: 0 } : { right: 0 }),
            };
            return (
            <div key={k} className={`absolute w-9 h-9 z-30 ${bracketPos[k]}`}>
                <div className="absolute bg-[#c9a84c]" style={{ width: "2px", height: 0, ...edge, animation: `growH 0.4s ${v}s forwards` }} />
                <div className="absolute bg-[#c9a84c]" style={{ height: "2px", width: 0,  ...edge, animation: `growW 0.4s ${h}s forwards` }} />
            </div>
            );
        })}
        <style>{`@keyframes growH{to{height:36px;}}@keyframes growW{to{width:36px;}}`}</style>
        </>
    );
    }

    export default function Avaluos() {
    return (
        <section id="avaluos" className="bg-[#060f1a] relative">

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(10,22,40,0.8) 39px,rgba(10,22,40,0.8) 40px)" }} />

        <Brackets />

        <div className="relative z-10 px-14 pt-20 pb-14 max-w-[1120px] mx-auto">
           

            <div className="flex items-center gap-4 mb-10 animate-[fadeUp_0.5s_0.6s_both]">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="font-mono text-[15px] text-[#c9a84c] tracking-[2px] uppercase">Avalúos · A&amp;R</span>
            </div>

            <h2 className="text-[62px] font-bold leading-none text-[#e8f0f8] animate-[fadeUp_0.7s_0.8s_both]">
            <span className="block">Cada bien tiene</span>
            <span className="block" style={{ color: "transparent", WebkitTextStroke: "1.5px #c9a84c" }}>un valor exacto.</span>
            <span className="block text-[#c9a84c]">Nosotros lo probamos.</span>
            </h2>

            <p className="text-[14px] text-[#8aaac8] leading-[1.7] max-w-[520px] mt-5 animate-[fadeUp_0.6s_1.1s_both]">
            Ingeniería de avalúos en 13 categorías con validez judicial, comercial y financiera. El informe técnico que respalda su decisión o su defensa.
            </p>
        </div>

        <div className="relative z-10 px-14 max-w-[1120px] mx-auto animate-[fadeUp_0.7s_1.5s_both]">
            <svg width="100%" viewBox="0 0 980 60" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="30" x2="980" y2="30" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
            <circle cx="0" cy="30" r="3" fill="#c9a84c" opacity="0.4" />
            <circle cx="980" cy="30" r="3" fill="#c9a84c" opacity="0.4" />
            {techNodes.map(({ cx, label }, i) => (
                <g key={cx}>
                <circle cx={cx} cy="30" r="5" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                    <animate attributeName="r" values="5;8;5" dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                </circle>
                <rect x={cx - 25} y="16" width="50" height="28" rx="4" fill="#0a1628" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                <text x={cx} y="33" textAnchor="middle" fontFamily="Space Mono,monospace" fontSize="9" fill="#c9a84c" letterSpacing="1">
                    {label}
                </text>
                </g>
            ))}
            <circle cx="196" cy="30" r="2" fill="#c9a84c">
                <animateMotion dur="5s" repeatCount="indefinite" path="M-196 0 L784 0" />
            </circle>
            </svg>
        </div>

        {/* ✅ pb-40 para dar espacio a la sombra bottom */}
        <div className="relative z-10 px-14 max-w-[1120px] mx-auto pb-40">
            <p className="font-mono text-[10px] text-white tracking-[3px] uppercase mb-5">// Categorías de valoración</p>
            <div className="grid grid-cols-4" style={{ gap: "1px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "12px 12px 0 0", overflow: "hidden" }}>
            {categories.map((c, i) => (
                <div key={i} className="bg-[#0a1628] px-5 py-6 cursor-pointer hover:bg-[#0e1e35] transition-colors" style={{ animation: `fadeUp 0.4s ${1.7 + i * 0.1}s both` }}>
                <p className="font-mono text-[9px] text-white tracking-[2px] mb-3">{c.num}</p>
                <p className="text-[13px] font-semibold text-white leading-snug mb-2">{c.name}</p>
                <span className="font-mono text-[9px] text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-1 rounded tracking-[1px]">{c.tag}</span>
                </div>
            ))}
            </div>
            <div className="grid grid-cols-2" style={{ gap: "1px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.1)", borderTop: "none", borderRadius: "0 0 12px 12px", overflow: "hidden", animation: "fadeUp 0.5s 2.5s both" }}>
            {wideCells.map((w, i) => (
                <div key={i} className="bg-[#0e1e35] px-7 py-7 flex items-center gap-5">
                <div className="shrink-0 w-10 h-10 border border-[#c9a84c]/20 rounded-lg flex items-center justify-center">{w.icon}</div>
                <div>
                    <p className="text-[14px] font-semibold text-white mb-1">{w.title}</p>
                    <p className="text-[12px] text-white leading-relaxed">{w.desc}</p>
                </div>
                </div>
            ))}
            </div>

        
        </div>

        {/* ✅ Sombra bottom → fusión hacia el Footer blanco */}
        <div
            className="absolute bottom-0 left-0 w-full pointer-events-none z-50"
            style={{
            height: "160px",
            background: "linear-gradient(to bottom, transparent 0%, #ffffff 100%)",
            }}
        />

        <style>{`
            @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
            @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        `}</style>
        </section>
    );
    }