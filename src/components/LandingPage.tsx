"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";

/**
 * Data ----------------------------------------------------------------------
 * Centralized copy keeps the visual components free of hard‑coded strings and
 * makes future updates straightforward (S in SOLID).
 */
const LAWYER = {
  name: "Eddy Chinchilla",
  title: "Abogada",
  tagline: "Soluciones legales a tu alcance",
  phone: "0424-1692372",
  email: "abg.eddychinchilla19@gmail.com",
  instagram: "tu.abogadaeddy",
};

interface ServiceCategory {
  icon: string;
  title: string;
  services: string[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    icon: "👪",
    title: "Lopnna (Familia)",
    services: [
      "Autorizaciones para viajar",
      "Responsabilidad de Crianza",
      "Custodia",
      "Convivencia Familiar",
    ],
  },
  {
    icon: "💼",
    title: "Materia Mercantil",
    services: [
      "Constitución de Compañías",
      "Firmas Personales",
      "Venta de Acciones",
      "Modificación de Junta Directiva",
      "Aumento de Capital",
    ],
  },
  {
    icon: "🏛️",
    title: "Materia Civil",
    services: [
      "Demandas de Divorcio",
      "Partición de Bienes",
      "Capitulaciones Matrimoniales",
      "Títulos Supletorios",
      "Compra y Venta de bienes muebles e inmuebles",
      "Redacción de Poderes",
      "Contratos de Arrendamiento",
    ],
  },
  {
    icon: "⚖️",
    title: "Materia Penal",
    services: [
      "Estafas",
      "Violencia de Género",
      "Accidentes de Tránsito",
      "Lesiones",
      "Audiencias de Presentación",
      "Asistencia Jurídica en Investigación (MP y Órganos Policiales)",
      "Revisión de Medidas",
      "Recursos ante Sala de Casación Penal (TSJ)",
      "Investigación Privada",
      "Antecedentes Penales",
      "Exclusión de SIPOL",
    ],
  },
];

/**
 * UI Components -------------------------------------------------------------
 * Each component adheres to the Single‑Responsibility Principle (SOLID).
 */
const Header = () => (
  <header className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 gap-4">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo.png"
          alt="Logo Eddy Chinchilla"
          className="h-14 w-14 object-contain rounded-full shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            {LAWYER.name}
          </h1>
          <p className="text-sm uppercase tracking-wider">{LAWYER.title}</p>
        </div>
      </div>
      <a 
        href="#contacto"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-black hover:bg-gray-900 text-yellow-400"
      >
        Agenda tu Consulta
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative">
    {/* Hero Image */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/hero-law.jpg"
      alt="Abogada asesorando a un cliente"
      className="w-full h-[55vh] object-cover object-center brightness-75"
    />
    {/* Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
      <h2
        className="text-3xl md:text-5xl font-extrabold mb-4"
      >
        {LAWYER.tagline}
      </h2>
      <p
        className="max-w-2xl text-lg md:text-xl"
      >
        Defensa, representación y asesoría jurídica con más de 10 años de
        experiencia.
      </p>
      <a 
        href="#servicios"
        className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
      >
        Conoce Nuestros Servicios
      </a>
    </div>
  </section>
);

interface ServiceCardProps {
  icon: string;
  title: string;
  services: string[];
}

const ServiceCard = ({ icon, title, services }: ServiceCardProps) => (
  <div
    className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-200"
  >
    <Card className="flex-1 rounded-2xl shadow-lg">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="text-5xl">{icon}</div>
        <h3 className="text-xl font-bold text-yellow-700">{title}</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {services.map((s: string) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);

const ServicesSection = () => (
  <section id="servicios" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
      >
        Áreas de Práctica
      </h2>
      <div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {SERVICE_CATEGORIES.map((cat) => (
          <ServiceCard key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contacto"
    className="py-16 bg-gradient-to-br from-gray-900 to-black text-white"
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Ponte en contacto</h2>
      <p className="max-w-xl mx-auto mb-8 text-lg">
        Agenda tu consulta hoy mismo o comunícate por cualquiera de nuestros
        canales.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {/* Teléfono */}
        <ContactChip icon={<Phone size={20} />} href={`tel:${LAWYER.phone}`}>
          {LAWYER.phone}
        </ContactChip>
        {/* Email */}
        <ContactChip
          icon={<Mail size={20} />}
          href={`mailto:${LAWYER.email}`}
        >
          {LAWYER.email}
        </ContactChip>
        {/* Instagram */}
        <ContactChip
          icon={<Instagram size={20} />}
          href={`https://instagram.com/${LAWYER.instagram}`}
        >
          @{LAWYER.instagram}
        </ContactChip>
      </div>
    </div>
  </section>
);

interface ContactChipProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  href: string;
}

const ContactChip = ({ icon, children, href }: ContactChipProps) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold shadow hover:shadow-lg hover:bg-yellow-600 transition-colors"
  >
    {icon}
    <span>{children}</span>
  </a>
);

const Footer = () => (
  <footer className="py-6 bg-gray-800 text-gray-400 text-center text-sm">
    © {new Date().getFullYear()} {LAWYER.name}. Todos los derechos reservados.
  </footer>
);

/**
 * LandingPage Component ------------------------------------------------------
 * Composition of the smaller building blocks. Each sub‑component can evolve
 * independently (OCP & ISP from SOLID).
 */
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 