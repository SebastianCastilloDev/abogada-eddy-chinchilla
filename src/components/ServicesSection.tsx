import React from "react";
import { SERVICE_CATEGORIES, ServiceCategory } from "./servicesData";
import { Card, CardContent } from "@/components/ui/card";

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
        {SERVICE_CATEGORIES.map((cat: ServiceCategory) => (
          <ServiceCard key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
