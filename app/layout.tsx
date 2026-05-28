import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharma Packers & Movers | Safe & Reliable Relocation Services Across India",
  description:
    "Sharma Packers & Movers offers professional, affordable, and safe packing and moving services for home relocation, office shifting, car transport, and more across India.",
  keywords:
    "packers and movers, home relocation, office shifting, car transport, bike transport, warehouse storage, India movers",
  openGraph: {
    title: "Sharma Packers & Movers | Safe Relocation Services",
    description:
      "Professional packers & movers with 15+ years of experience. Serving 500+ cities across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
