import React from "react";
import { LAWYER } from "./lawyerData";

const Hero = () => (
  <section className="relative">
    {/* Hero Image */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/assets/hero-law.jpg"
      alt="Abogada asesorando a un cliente"
      className="w-full h-[55vh] object-cover object-center"
    />
    {/* Overlay con opacidad */}
    <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
      <h2
        className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
      >
        {LAWYER.tagline}
      </h2>
      <p
        className="max-w-2xl text-lg md:text-xl mb-2 drop-shadow"
      >
        Defensa, representación y asesoría jurídica con más de 10 años de
        experiencia.
      </p>
      <a 
        href="#servicios"
        className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg"
      >
        Conoce Nuestros Servicios
      </a>
    </div>
  </section>
);

export default Hero;
