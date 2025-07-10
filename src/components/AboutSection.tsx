import React from "react";
import { LAWYER } from "./lawyerData";
import Image from "next/image";

const AboutSection = () => (
  <section id="sobre-mi" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
    {/* Elementos decorativos de fondo */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <span className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-400/30 rounded-full text-amber-700 text-sm font-medium mb-6 backdrop-blur-sm">
            Perfil Profesional
          </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-amber-600 bg-clip-text text-transparent leading-tight">
          Sobre Mí
        </h2>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="mx-4 w-3 h-3 bg-amber-400 rounded-full"></div>
          <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                Formación Académica
              </h3>
              <div className="space-y-4">
                {LAWYER.education.map((edu, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {edu}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-2xl">⚖️</span>
                Experiencia
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Con más de <span className="text-amber-600 font-semibold">{LAWYER.experience}</span> en el 
                ejercicio del derecho, he desarrollado una sólida experiencia en diversas áreas legales, 
                brindando asesoría personalizada y soluciones efectivas a mis clientes.
              </p>
            </div>
          </div>
          
          {/* Memberships Section */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <span className="text-2xl">🏛️</span>
                Membresías Profesionales
              </h3>
              <div className="space-y-6">
                {LAWYER.memberships.map((membership, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-36 h-36">
                      <Image
                        src={membership.image}
                        alt={membership.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quote or Mission */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50 rounded-3xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4 text-amber-600">💼</div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  &quot;Mi compromiso es brindar un servicio legal de excelencia, 
                  basado en la confianza, la profesionalidad y el conocimiento profundo del derecho.&quot;
                </blockquote>
                <div className="mt-4 text-amber-700 font-semibold">
                  - {LAWYER.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
