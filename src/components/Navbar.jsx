import React from "react";

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">Mi Logo</div>
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-gray-600">Inicio</a>
          <a href="/about" className="hover:text-gray-600">Acerca de</a>
          <a href="/services" className="hover:text-gray-600">Servicios</a>
          <a href="/contact" className="hover:text-gray-600">Contacto</a>
        </nav>
      </div>
    </div>
  );
}