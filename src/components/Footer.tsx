
import React from "react";
import { Link } from "react-router-dom";
import { Church, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Church className="h-8 w-8 text-primary-light" strokeWidth={1.5} />
              <span className="font-serif font-bold text-xl">
                <span className="text-primary-light">IDPMI</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Iglesia de Dios Pentecostal Movimiento Internacional
            </p>
            <p className="text-gray-400">Región Nor-Centro de México</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-light transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="text-gray-400 hover:text-primary-light transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/declaracion-de-fe" className="text-gray-400 hover:text-primary-light transition-colors">
                  Declaración de Fe
                </Link>
              </li>
              <li>
                <Link to="/distritos" className="text-gray-400 hover:text-primary-light transition-colors">
                  Distritos
                </Link>
              </li>
              <li>
                <Link to="/iglesias" className="text-gray-400 hover:text-primary-light transition-colors">
                  Iglesias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-light mt-1" />
                <span className="text-gray-400">
                  Región Nor-Centro de México
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-light mt-1" />
                <a href="mailto:contacto@idpmi-norcentro.org" className="text-gray-400 hover:text-primary-light transition-colors">
                  contacto@idpmi-norcentro.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-light mt-1" />
                <a href="tel:+52123456789" className="text-gray-400 hover:text-primary-light transition-colors">
                  +52 123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/Mensaje */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Mensaje</h4>
            <p className="text-gray-400 mb-4">
              "Porque hay esperanza para el árbol, si fuere cortado, aún volverá a retoñar, y sus renuevos no faltarán."
            </p>
            <p className="text-gray-400 font-semibold">- Job 14:7</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} IDPMI Región Nor-Centro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
