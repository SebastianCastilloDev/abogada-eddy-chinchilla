import React from "react";
import { LAWYER } from "./lawyerData";

const Header = () => (
  <header className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-6 gap-4">
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
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#inicio" className="text-white hover:text-yellow-300 transition-colors duration-200">
          Inicio
        </a>
        <a href="#sobre-mi" className="text-white hover:text-yellow-300 transition-colors duration-200">
          Sobre Mí
        </a>
        <a href="#servicios" className="text-white hover:text-yellow-300 transition-colors duration-200">
          Servicios
        </a>
        <a href="#contacto" className="text-white hover:text-yellow-300 transition-colors duration-200">
          Contacto
        </a>
      </nav>
      
      <a 
        href="#contacto"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-black hover:bg-gray-900 text-yellow-400 transition-colors duration-200"
      >
        Agenda tu Consulta
      </a>
    </div>
  </header>
);

export default Header;
