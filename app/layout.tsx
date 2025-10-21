import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sky.ro - Servicii Profesionale cu Drone",
  description: "Ridicăm Viziunea Ta de la Cer la Pământ - Servicii profesionale de fotografie aeriană, topografie, inspecții și cinematografie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}