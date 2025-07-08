import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abogada Eddy Chinchilla | Soluciones legales a tu alcance",
  description: "Servicios legales profesionales en materia civil, mercantil, familia y penal. Más de 10 años de experiencia en asesoría jurídica en Venezuela.",
  keywords: "abogada, asesoría legal, servicios jurídicos, derecho civil, derecho penal, derecho mercantil, familia, LOPNNA, Venezuela",
  authors: [{ name: "Eddy Chinchilla" }],
  creator: "Eddy Chinchilla",
  publisher: "Eddy Chinchilla",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/favicon.png" }
    ],
    shortcut: [
      { url: "/favicon.png" }
    ]
  },
  openGraph: {
    title: "Abogada Eddy Chinchilla | Soluciones legales a tu alcance",
    description: "Servicios legales profesionales en materia civil, mercantil, familia y penal. Más de 10 años de experiencia en asesoría jurídica.",
    url: "https://abogadaeddychinchilla.com",
    siteName: "Abogada Eddy Chinchilla",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abogada Eddy Chinchilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogada Eddy Chinchilla | Soluciones legales a tu alcance",
    description: "Servicios legales profesionales en materia civil, mercantil, familia y penal.",
    images: ["/assets/og-image.jpg"],
  },
  alternates: {
    canonical: "https://abogadaeddychinchilla.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
