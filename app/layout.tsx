import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A&R Abogados e Ingenieros | Valledupar, Cesar",
  description: "Firma especializada en derecho territorial e ingeniería predial. Defensa jurídica, avalúos técnicos y gestión ambiental en Valledupar, Colombia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}