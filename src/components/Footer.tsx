
import React from "react";
import { Link } from "react-router-dom";
import { Church, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Church className="h-8 w-8 text-secondary" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wide">IDPMI</span>
                <span className="text-xs font-serif tracking-wider uppercase text-secondary/80">
                  Región Nor-Centro
                </span>
              </div>
            </div>
            <p className="text-white/70 mb-4 font-serif">
              Iglesia de Dios Pentecostal Movimiento Internacional
            </p>
            <p className="text-white/70">Región Nor-Centro de México</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 border-b border-white/20 pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Quiénes Somos", path: "/quienes-somos" },
                { name: "Declaración de Fe", path: "/declaracion-de-fe" },
                { name: "Distritos", path: "/distritos" },
                { name: "Iglesias", path: "/iglesias" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-white/70 hover:text-secondary transition-colors text-sm tracking-wide">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 border-b border-white/20 pb-2">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <span className="text-white/70 text-sm">
                  Región Nor-Centro de México
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-1" />
                <a href="mailto:contacto@idpmi-norcentro.org" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  contacto@idpmi-norcentro.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-1" />
                <a href="tel:+52123456789" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  +52 123 456 789
                </a>
              </li>
            </ul>
          </div>

          {/* Scripture */}
          <div>
            <h4 className="text-lg font-serif mb-6 border-b border-white/20 pb-2">Mensaje</h4>
            <div className="bg-primary-dark/50 p-5 border-l-2 border-secondary">
              <p className="text-white/90 mb-4 italic font-serif">
                "Porque hay esperanza para el árbol, si fuere cortado, aún volverá a retoñar, y sus renuevos no faltarán."
              </p>
              <p className="text-secondary font-display text-sm text-right">- Job 14:7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50">
          <p className="text-sm font-serif tracking-wider">&copy; {new Date().getFullYear()} IDPMI Región Nor-Centro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
