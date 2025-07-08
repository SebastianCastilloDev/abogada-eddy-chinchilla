export interface ServiceCategory {
  icon: string;
  title: string;
  services: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
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
