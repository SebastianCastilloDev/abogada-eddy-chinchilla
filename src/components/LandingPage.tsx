"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram } from "lucide-react";

/**
 * Utilities ----------------------------------------------------------------------
 */
const formatPhoneNumber = (phone: string) => {
  // Asumimos que el número viene con formato +58 424-1234567
  // Queremos mostrarlo como +58 (424) 169-2372
  if (!phone) return '';
  
  // Eliminar todos los caracteres no numéricos excepto el +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Verificar si tiene el formato esperado
  if (cleaned.startsWith('+58') && cleaned.length === 13) {
    // +58 (424) 169-2372
    return `+58 (${cleaned.substring(3, 6)}) ${cleaned.substring(6, 9)}-${cleaned.substring(9)}`;
  }
  
  // Si no tiene el formato esperado, devolver el número original
  return phone;
};

/**
 * Data ----------------------------------------------------------------------
 * Centralized copy keeps the visual components free of hard‑coded strings and
 * makes future updates straightforward (S in SOLID).
 */
const LAWYER = {
  name: "Eddy Chinchilla",
  title: "Abogada",
  tagline: "Soluciones legales a tu alcance",
  phone: "+58 424-1692372",
  whatsapp: "+58 424-1692372",
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
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
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
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900 relative"
      >
        Áreas de Práctica
        <span className="block w-24 h-1 bg-yellow-600 mx-auto mt-4"></span>
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
      <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap">
        {/* Teléfono */}
        <ContactChip icon={<Phone size={20} />} href={`tel:${LAWYER.phone.replace(/\s/g, '')}`}>
          {formatPhoneNumber(LAWYER.phone)}
        </ContactChip>
        {/* WhatsApp */}
        <ContactChip
          icon={
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          }
          href={`https://wa.me/${LAWYER.whatsapp.replace(/[+\s-]/g, '')}?text=Hola%20Abogada%20Eddy,%20me%20gustaría%20agendar%20una%20consulta`}
        >
          {formatPhoneNumber(LAWYER.whatsapp)}
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

const WhatsAppFloatingButton = () => {
  const [showPulse, setShowPulse] = useState(true);
  const [pulseCount, setPulseCount] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const maxPulses = 4;
  
  useEffect(() => {
    // Desactivar el efecto de rebote después de 1 segundo
    if (isFirstLoad) {
      const bounceTimer = setTimeout(() => {
        setIsFirstLoad(false);
      }, 1000);
      
      return () => clearTimeout(bounceTimer);
    }
  }, [isFirstLoad]);
  
  useEffect(() => {
    // Función para manejar el pulso
    const handlePulse = () => {
      if (pulseCount < maxPulses) {
        setPulseCount(prev => prev + 1);
      } else {
        setShowPulse(false);
        clearInterval(pulseInterval);
      }
    };
    
    // Cada pulso dura aproximadamente 2 segundos en Tailwind por defecto
    const pulseInterval = setInterval(handlePulse, 2000);
    
    // Reiniciar el pulso cuando el usuario regresa a la página
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && pulseCount >= maxPulses) {
        setPulseCount(0);
        setShowPulse(true);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(pulseInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pulseCount]);
  
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href={`https://wa.me/${LAWYER.whatsapp.replace(/[+\s-]/g, '')}?text=Hola%20Abogada%20Eddy,%20me%20gustaría%20agendar%20una%20consulta`}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 relative ${isFirstLoad ? 'animate-bounce' : ''}`}
        aria-label="Contactar por WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {showPulse && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      <div className="absolute bottom-0 right-full mb-3 mr-3 px-3 py-2 bg-white text-green-600 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chatea con nosotros
        <div className="absolute top-full right-3 -mt-1 w-3 h-3 bg-white transform rotate-45"></div>
      </div>
    </div>
  );
};

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
      <WhatsAppFloatingButton />
    </div>
  );
} 