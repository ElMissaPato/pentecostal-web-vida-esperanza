
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, Mail, MapPin } from "lucide-react";
import { pastores } from "../data/pastores";

const PerfilPastor = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const pastor = pastores.find(p => p.id === id);

  useEffect(() => {
    // Simulamos carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando información...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!pastor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-serif text-primary mb-6">Pastor no encontrado</h1>
            <p className="text-gray-600 mb-8">No pudimos encontrar la información del pastor solicitado.</p>
            <Link to="/distritos">
              <Button variant="secondary">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Volver a distritos
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/distritos" className="inline-block mb-6">
            <Button variant="ghost" className="text-primary">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver a distritos
            </Button>
          </Link>

          <Card className="overflow-hidden mb-8">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-4 border-white shadow-md">
                  {pastor.foto ? (
                    <img src={pastor.foto} alt={pastor.nombre} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-2xl font-serif">
                      {pastor.nombre.split(' ').map(name => name[0]).join('')}
                    </div>
                  )}
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-serif text-primary mb-2">{pastor.nombre}</h1>
                  <p className="text-secondary font-medium mb-3">Grado: {pastor.grado}</p>
                  <p className="text-gray-700">{pastor.distrito}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {pastor.contacto.telefono && (
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <p className="font-medium">{pastor.contacto.telefono}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {pastor.contacto.correo && (
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Correo</p>
                    <p className="font-medium">{pastor.contacto.correo}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {pastor.contacto.direccionCasa && (
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Dirección</p>
                    <p className="font-medium">{pastor.contacto.direccionCasa}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <h2 className="text-2xl font-serif text-primary mb-4">Iglesias</h2>
          <div className="space-y-4 mb-8">
            {pastor.iglesias.map((iglesia, index) => (
              <Card key={index}>
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="font-medium text-lg">{iglesia.nombre}</h3>
                      <p className="text-gray-600 text-sm">{iglesia.tipo}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {iglesia.ubicacion}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {pastor.biografia && (
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-primary mb-4">Biografía</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {pastor.biografia}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PerfilPastor;
