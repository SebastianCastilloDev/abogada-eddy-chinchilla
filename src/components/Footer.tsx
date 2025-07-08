import React from "react";

const Footer = ({ name }: { name: string }) => (
  <footer className="py-6 bg-gray-800 text-gray-400 text-center text-sm">
    © {new Date().getFullYear()} {name}. Todos los derechos reservados.
  </footer>
);

export default Footer;
