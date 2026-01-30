import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { UIProvider } from "@/context/ui-context";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { BookingModal } from "@/components/ui/booking-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altos de Marquesa | Vive en el Valle de Elqui",
  description: "Exclusivos sitios de 5.000m² con acceso privado. Un entorno privilegiado cercano a La Serena.",
  openGraph: {
    title: "Altos de Marquesa | Vive en el Valle de Elqui",
    description: "Conecta con la naturaleza en un entorno seguro y exclusivo. 18 sitios urbanizados con luz y agua.",
    url: "https://altosdemarquesa.cl",
    siteName: "Altos de Marquesa",
    images: [
      {
        url: "/images/foto_26.jpg",
        width: 1200,
        height: 630,
        alt: "Vistas Altos de Marquesa",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <UIProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <BookingModal />
        </UIProvider>
      </body>
    </html>
  );
}
