
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">404</h1>
        <p className="text-2xl md:text-3xl mb-8 font-light">
          Página no encontrada
        </p>
        <p className="text-lg text-gray-300 mb-10">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
          <Link to="/">
            Volver al Inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
