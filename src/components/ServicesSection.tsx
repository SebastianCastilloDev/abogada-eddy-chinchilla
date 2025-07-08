import React from "react";
import { SERVICE_CATEGORIES, ServiceCategory } from "./servicesData";

interface ServiceCardProps {
  icon: string;
  title: string;
  services: string[];
}

const ServiceCard = ({ icon, title, services }: ServiceCardProps) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:bg-white/15 group-hover:border-amber-400/30 group-hover:shadow-2xl">
      {/* Icono centrado */}
      <div className="flex justify-center mb-6">
        <span className="text-5xl drop-shadow-lg">{icon}</span>
      </div>
      
      {/* Título */}
      <h3 className="text-2xl text-center font-bold mb-6 bg-gradient-to-br from-white via-amber-100 to-amber-200 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:via-amber-300 group-hover:to-amber-400 transition-all duration-300">
        {title}
      </h3>
      
      {/* Lista de servicios */}
      <div className="space-y-3">
        {services.map((service: string, index: number) => (
          <div 
            key={service}
            className="flex items-start gap-3 group/item opacity-90 hover:opacity-100 transition-all duration-200"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
            <span className="text-gray-200 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-200">
              {service}
            </span>
          </div>
        ))}
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-amber-400/50 to-amber-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
    </div>
  </div>
);

const ServicesSection = () => (
  <section id="servicios" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
    {/* Elementos decorativos de fondo */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/5 to-transparent rounded-full"></div>
    </div>
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 193, 7, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 193, 7, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="inline-block">
          <span className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Servicios Legales Especializados
          </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-br from-white via-amber-100 to-amber-200 bg-clip-text text-transparent leading-tight">
          Áreas de Práctica
        </h2>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="mx-4 w-3 h-3 bg-amber-400 rounded-full"></div>
          <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>
        
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
          Ofrezco asesoría legal integral con más de <span className="text-amber-300 font-semibold">10 años de experiencia</span> en 
          las principales áreas del derecho, brindando soluciones personalizadas y efectivas para cada caso.
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {SERVICE_CATEGORIES.map((cat: ServiceCategory, index: number) => (
          <div 
            key={cat.title}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ServiceCard {...cat} />
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-20">
        <div className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 max-w-2xl">
          <h3 className="text-2xl font-bold mb-4 text-white">
            ¿No encuentras tu caso específico?
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Cada situación legal es única. Contáctame para una consulta personalizada 
            y evaluemos juntos la mejor estrategia para tu caso.
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M8 2v4"/>
              <path d="M16 2v4"/>
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M3 10h18"/>
            </svg>
            Agendar Consulta Gratuita
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
