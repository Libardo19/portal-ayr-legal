// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { X, Scale, Home, Users, HardHat } from "lucide-react";

// type Servicio = {
//   id: number;
//   titulo: string;
//   descripcionCorta: string;
//   descripcionLarga: string;
//   tipo: "svg" | "icon";
//   icono?: string;
//   Icon?: React.ElementType;
// };

// const SERVICIOS: Servicio[] = [
//   {
//     id: 1,
//     tipo: "svg",
//     icono: "/iconos/administrativo.svg",
//     titulo: "Derecho Administrativo",
//     descripcionCorta: "Recursos, tutelas y procesos ante entidades públicas",
//     descripcionLarga:
//       "Representamos a personas naturales y jurídicas en acciones de tutela, derechos de petición, recursos gubernativos, nulidades y restablecimiento del derecho. Defendemos sus intereses frente a decisiones de entidades públicas y gubernamentales en todo el territorio nacional.",
//   },
//   {
//     id: 2,
//     tipo: "svg",
//     icono: "/iconos/civil.svg",
//     titulo: "Derecho Civil",
//     descripcionCorta: "Contratos, sucesiones y responsabilidad civil",
//     descripcionLarga:
//       "Asesoramos en la redacción, revisión y litigio de contratos civiles y comerciales, procesos sucesorales, liquidación de sociedades conyugales, responsabilidad civil extracontractual y demás asuntos del derecho privado. Garantizamos claridad jurídica y protección de su patrimonio.",
//   },
//   {
//     id: 3,
//     tipo: "icon",
//     Icon: Scale,
//     titulo: "Derecho Penal",
//     descripcionCorta: "Defensa técnica garantizando el debido proceso",
//     descripcionLarga:
//       "Brindamos defensa técnica penal en todas las etapas del proceso: investigación, imputación, acusación y juicio oral. Garantizamos el respeto al debido proceso y los derechos fundamentales del procesado, con especial énfasis en delitos relacionados con tierras, urbanismo y medio ambiente.",
//   },
//   {
//     id: 4,
//     tipo: "icon",
//     Icon: HardHat,
//     titulo: "Derecho Laboral y SST",
//     descripcionCorta: "Asesoría laboral y seguridad y salud en el trabajo",
//     descripcionLarga:
//       "Asesoramos a empleadores y trabajadores en contratación laboral, despidos, liquidaciones y acoso laboral. Diseñamos e implementamos Sistemas de Gestión de Seguridad y Salud en el Trabajo (SG-SST) para empresas de todos los sectores.",
//   },
//   {
//     id: 5,
//     tipo: "icon",
//     Icon: Home,
//     titulo: "Amparos Policivos",
//     descripcionCorta: "Protección inmediata de posesión y tenencia",
//     descripcionLarga:
//       "Tramitamos querellas policivas para la protección inmediata de la posesión, mera tenencia y ocupación de bienes inmuebles ante perturbaciones o despojos. Actuamos con rapidez ante inspecciones de policía y alcaldías para restablecer el orden jurídico sobre su predio.",
//   },
//   {
//     id: 6,
//     tipo: "icon",
//     Icon: Users,
//     titulo: "Derecho de Familia",
//     descripcionCorta: "Custodia, alimentos y procesos de familia",
//     descripcionLarga:
//       "Acompañamos a nuestros clientes en procesos de divorcio, custodia y visitas, fijación y ejecución de alimentos, adopción, investigación e impugnación de paternidad y liquidación de sociedad conyugal. Ofrecemos un servicio humano, confidencial y orientado a la protección del núcleo familiar.",
//   },
// ];

// function IconoServicio({ servicio, size = 48, iconColor = "#C8A75D" }: { servicio: Servicio; size?: number; iconColor?: string }) {
//   if (servicio.tipo === "svg" && servicio.icono) {
//     return (
//       <Image
//         src={servicio.icono}
//         alt={servicio.titulo}
//         width={size}
//         height={size}
//         className="transition-transform duration-300 group-hover:scale-110"
//       />
//     );
//   }
//   if (servicio.tipo === "icon" && servicio.Icon) {
//     const Icon = servicio.Icon;
//     return (
//       <Icon
//         size={size}
//         color={iconColor}
//         strokeWidth={1.5}
//         className="transition-transform duration-300 group-hover:scale-110"
//       />
//     );
//   }
//   return null;
// }

// export default function ServiciosJuridicos() {
//   const [selected, setSelected] = useState<number | null>(null);
//   const servicioActivo = SERVICIOS.find((s) => s.id === selected);

//   return (
//     <section id="juridico" className="bg-[#f8f8f8] py-16 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: "#C8A75D" }}>
//             Servicios Jurídicos
//           </p>
//           <h2 className="text-[#102131] text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto">
//             Asesoría legal especializada para defender su territorio
//           </h2>
//           <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
//             Contamos con abogados especializados en múltiples áreas del derecho
//             para brindarle una defensa integral y técnica.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//           {SERVICIOS.map((servicio) => {
//             const isActive = selected === servicio.id;
//             return (
//               <button
//                 key={servicio.id}
//                 onClick={() => setSelected(isActive ? null : servicio.id)}
//                 className={`group flex flex-col items-center text-center gap-3 p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer bg-white ${
//                   isActive
//                     ? "border-[#C8A75D] shadow-lg"
//                     : "border-transparent shadow-sm hover:border-[#C8A75D]/50 hover:shadow-md"
//                 }`}
//               >
//                 <div className={`p-3 rounded-xl transition-all duration-300 ${
//                   isActive ? "bg-[#C8A75D]/15" : "bg-[#C8A75D]/10 group-hover:bg-[#C8A75D]/20"
//                 }`}>
//                   <IconoServicio servicio={servicio} size={48} />
//                 </div>
//                 <p className="text-[#102131] font-bold text-sm leading-tight">
//                   {servicio.titulo}
//                 </p>
//                 <p className="text-gray-400 text-xs leading-snug hidden md:block">
//                   {servicio.descripcionCorta}
//                 </p>
//                 <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#C8A75D" }}>
//                   {isActive ? "Cerrar ↑" : "Ver más →"}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Panel desktop */}
//         {servicioActivo && (
//           <div className="hidden md:flex rounded-2xl p-8 items-start gap-6" style={{ backgroundColor: "#102131" }}>
//             <div className="shrink-0 p-3 rounded-xl" style={{ backgroundColor: "#C8A75D" }}>
//               <IconoServicio servicio={servicioActivo} size={36} iconColor="#102131" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-white text-xl font-bold mb-3">{servicioActivo.titulo}</h3>
//               <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
//                 {servicioActivo.descripcionLarga}
//               </p>
//               <button
//                 className="mt-6 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition duration-300 hover:opacity-90"
//                 style={{ backgroundColor: "#C8A75D", color: "#102131" }}
//               >
//                 Solicitar asesoría →
//               </button>
//             </div>
//             <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white transition shrink-0">
//               <X size={20} />
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Modal móvil — drawer desde abajo */}
//       {servicioActivo && (
//         <div
//           className="md:hidden fixed inset-0 z-50 flex items-end justify-center"
//           style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
//           onClick={() => setSelected(null)}
//         >
//           <div
//             className="w-full rounded-t-2xl p-6 pb-10"
//             style={{ backgroundColor: "#102131" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-6" />
//             <div className="flex items-start gap-4 mb-4">
//               <div className="shrink-0 p-3 rounded-xl" style={{ backgroundColor: "#C8A75D" }}>
//                 <IconoServicio servicio={servicioActivo} size={28} iconColor="#102131" />
//               </div>
//               <h3 className="text-white text-lg font-bold leading-tight flex-1">
//                 {servicioActivo.titulo}
//               </h3>
//               <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white transition">
//                 <X size={20} />
//               </button>
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed mb-6">
//               {servicioActivo.descripcionLarga}
//             </p>
//             <button
//               className="w-full text-sm font-bold uppercase tracking-widest py-4 rounded-xl transition duration-300 hover:opacity-90"
//               style={{ backgroundColor: "#C8A75D", color: "#102131" }}
//             >
//               Solicitar asesoría →
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }