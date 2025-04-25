
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { asociaciones } from "../data/asociaciones";
import { Card, CardContent } from "@/components/ui/card";

const Asociaciones = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-serif text-primary mb-12 text-center">Nuestras Asociaciones</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {asociaciones.map((asociacion) => (
              <Link 
                key={asociacion.id}
                to={`/asociaciones/${asociacion.id}`}
                className="hover:transform hover:scale-102 transition-all duration-300"
              >
                <Card className="h-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-serif text-primary mb-4">{asociacion.nombre}</h2>
                    <p className="text-gray-600 leading-relaxed">{asociacion.descripcion}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Asociaciones;
