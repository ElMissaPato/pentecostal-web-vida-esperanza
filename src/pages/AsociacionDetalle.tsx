
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { asociaciones } from "../data/asociaciones";
import { Card, CardContent } from "@/components/ui/card";

const AsociacionDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const asociacion = asociaciones.find((a) => a.id === id);

  if (!asociacion) {
    return <Navigate to="/asociaciones" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-serif text-primary mb-4 text-center">{asociacion.nombre}</h1>
            <div className="h-1 w-32 bg-secondary mx-auto mb-8"></div>
          </div>

          <Card className="mb-12 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-primary to-secondary"></div>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed mb-6">{asociacion.descripcion}</p>
              
              <h2 className="text-2xl font-serif text-primary mb-4">Misión</h2>
              <p className="text-gray-700 mb-6">
                {asociacion.mision || "Nuestra misión es servir como un instrumento de Dios para edificar vidas y fortalecer la fe de cada creyente a través de actividades, enseñanzas y compañerismo cristiano."}
              </p>

              <h2 className="text-2xl font-serif text-primary mb-4">Visión</h2>
              <p className="text-gray-700 mb-6">
                {asociacion.vision || "Buscamos ser una asociación que impacte positivamente a nuestra comunidad, formando líderes comprometidos con los valores del Reino de Dios y siendo luz en cada área de la sociedad."}
              </p>

              <h2 className="text-2xl font-serif text-primary mb-4">Actividades</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {asociacion.actividades ? (
                  asociacion.actividades.map((actividad, index) => (
                    <li key={index}>{actividad}</li>
                  ))
                ) : (
                  <>
                    <li>Reuniones semanales para estudios bíblicos</li>
                    <li>Actividades de integración y compañerismo</li>
                    <li>Proyectos de servicio comunitario</li>
                    <li>Conferencias y talleres de crecimiento espiritual</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-primary mb-4">¿Quieres formar parte?</h2>
            <p className="text-gray-700 mb-6">
              Si deseas unirte a nuestra asociación o necesitas más información, 
              no dudes en contactarnos a través de cualquiera de nuestros canales oficiales.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AsociacionDetalle;
