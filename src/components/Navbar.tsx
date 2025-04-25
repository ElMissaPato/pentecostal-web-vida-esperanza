
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Quiénes Somos", path: "/quienes-somos" },
    { name: "Declaración de Fe", path: "/declaracion-de-fe" },
    { name: "Distritos", path: "/distritos" },
    { name: "Iglesias", path: "/iglesias" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/318718c9-7b11-47a7-8e74-698ed0a56bce.png" 
            alt="IDPMI Logo" 
            className="h-16 w-16 object-contain"
          />
          <div className="flex flex-col">
            <span className={`font-display text-xl md:text-2xl font-semibold tracking-wide ${scrolled ? "text-primary" : "text-white drop-shadow-md"}`}>
              IDPMI
            </span>
            <span className={`text-xs font-serif tracking-widest uppercase ${scrolled ? "text-secondary" : "text-secondary/90 drop-shadow-md"}`}>
              Región Nor-Centro
            </span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-sans text-sm uppercase tracking-wider ${
                scrolled 
                  ? "text-primary hover:text-secondary" 
                  : "text-white hover:text-secondary/90"
              } 
              transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 
              after:bg-secondary hover:after:w-full after:transition-all after:duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? "text-primary" : "text-white"} focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white text-primary shadow-md py-6 px-6 md:hidden animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-sans text-sm uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
