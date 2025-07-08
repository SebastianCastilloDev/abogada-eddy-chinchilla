import React from 'react';

// Datos del abogado
const LAWYER = {
  name: "Eddy Chinchilla",
  title: "Abogada",
  tagline: "Soluciones legales a tu alcance",
  phone: "0424-1692372",
  email: "abg.eddychinchilla19@gmail.com",
  instagram: "tu.abogadaeddy",
};

// Componente para insertar datos estructurados JSON-LD en la página
export function LocalBusinessSchema() {
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${LAWYER.title} ${LAWYER.name}`,
    description: 'Servicios legales profesionales en materia civil, mercantil, familia y penal. Más de 10 años de experiencia en asesoría jurídica.',
    url: 'https://abogadaeddychinchilla.com',
    telephone: LAWYER.phone,
    email: LAWYER.email,
    sameAs: [
      `https://instagram.com/${LAWYER.instagram}`,
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VE',
      addressLocality: 'Venezuela',
    },
    openingHours: 'Mo-Fr 08:00-18:00',
    priceRange: '$$',
    serviceType: [
      'Derecho de Familia',
      'Derecho Mercantil',
      'Derecho Civil',
      'Derecho Penal'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Legales',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asesoría en Derecho de Familia',
            description: 'Autorizaciones para viajar, Responsabilidad de Crianza, Custodia, Convivencia Familiar'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asesoría en Materia Mercantil',
            description: 'Constitución de Compañías, Firmas Personales, Venta de Acciones, Modificación de Junta Directiva'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asesoría en Materia Civil',
            description: 'Demandas de Divorcio, Partición de Bienes, Títulos Supletorios, Contratos de Arrendamiento'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asesoría en Materia Penal',
            description: 'Estafas, Violencia de Género, Accidentes de Tránsito, Lesiones, Audiencias de Presentación'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
    />
  );
}

// Componente para datos estructurados de FAQs (preguntas frecuentes)
export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué servicios legales ofrece la Abogada Eddy Chinchilla?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La Abogada Eddy Chinchilla ofrece servicios en materia de Derecho de Familia (LOPNNA), Derecho Mercantil, Derecho Civil y Derecho Penal, incluyendo autorizaciones para viajar, constitución de compañías, demandas de divorcio y asesoría en casos penales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo puedo agendar una consulta legal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puede agendar una consulta legal contactando directamente al número 0424-1692372, enviando un correo electrónico a abg.eddychinchilla19@gmail.com o a través de Instagram @tu.abogadaeddy.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuántos años de experiencia tiene la Abogada Eddy Chinchilla?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La Abogada Eddy Chinchilla cuenta con más de 10 años de experiencia en asesoría jurídica, representación y defensa legal en Venezuela.'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// Componente que reúne todos los esquemas
export function SchemaMarkup() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
    </>
  );
}

export default SchemaMarkup; 