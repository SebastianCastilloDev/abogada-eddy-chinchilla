import React from "react";
import { LAWYER } from "./lawyerData";

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

export default Header;
