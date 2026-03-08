import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A&R Abogados e Ingenieros S.A.S",
  description:
    "Firma interdisciplinaria que integra asesoría jurídica especializada y servicios técnicos de ingeniería para la defensa del territorio, conflictos prediales y proyectos de infraestructura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}