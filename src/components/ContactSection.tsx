import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { LAWYER } from "./lawyerData";
import { formatPhoneNumber } from "./utils";

interface ContactChipProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  href: string;
}

const ContactChip = ({ icon, children, href }: ContactChipProps) => (
  <a
    href={href}
    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
  >
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-lg group-hover:shadow-amber-400/25 transition-all duration-300">
        {icon}
      </div>
      <span className="text-white font-medium text-sm leading-relaxed group-hover:text-amber-300 transition-colors duration-300">
        {children}
      </span>
    </div>
    {/* Sutil efecto de brillo en hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </div>
  </a>
);

const ContactSection = () => (
  <section
    id="contacto"
    className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden"
  >
    {/* Elementos decorativos de fondo */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
          Ponte en contacto
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
          Agenda tu consulta hoy mismo o comunícate por cualquiera de nuestros
          canales. Estoy aquí para brindarte la asesoría legal que necesitas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Teléfono */}
        <ContactChip icon={<Phone size={24} />} href={`tel:${LAWYER.phone.replace(/\s/g, '')}`}>
          <span className="text-xs text-gray-400 mb-1 block">Llámanos</span>
          {formatPhoneNumber(LAWYER.phone)}
        </ContactChip>
        
        {/* WhatsApp */}
        <ContactChip
          icon={
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          }
          href={`https://wa.me/${LAWYER.whatsapp.replace(/[+\s-]/g, '')}?text=Hola%20Abogada%20Eddy,%20me%20gustaría%20agendar%20una%20consulta`}
        >
          <span className="text-xs text-gray-400 mb-1 block">WhatsApp</span>
          {formatPhoneNumber(LAWYER.whatsapp)}
        </ContactChip>
        
        {/* Email */}
        <ContactChip
          icon={<Mail size={24} />}
          href={`mailto:${LAWYER.email}`}
        >
          <span className="text-xs text-gray-400 mb-1 block">Email</span>
          <span className="text-xs">{LAWYER.email}</span>
        </ContactChip>
        
        {/* Instagram */}
        <ContactChip
          icon={<Instagram size={24} />}
          href={`https://instagram.com/${LAWYER.instagram}`}
        >
          <span className="text-xs text-gray-400 mb-1 block">Síguenos</span>
          @{LAWYER.instagram}
        </ContactChip>
      </div>
      
      {/* Call to action adicional */}
      <div className="text-center mt-12">
        <p className="text-gray-400 text-sm mb-4">
          ¿Necesitas una consulta urgente?
        </p>
        <a 
          href={`https://wa.me/${LAWYER.whatsapp.replace(/[+\s-]/g, '')}?text=Hola%20Abogada%20Eddy,%20necesito%20una%20consulta%20urgente`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consulta Inmediata por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
