
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, Mail, MapPin, Home, Award } from "lucide-react";
import { pastores } from "../data/pastores";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/distritos" className="inline-block mb-6">
            <Button variant="ghost" className="text-primary">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver a distritos
            </Button>
          </Link>

          {/* Tarjeta de presentación mejorada */}
          <Card className="overflow-hidden mb-8 border-none shadow-lg">
            <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-white">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg">
                    {pastor.foto ? (
                      <img src={pastor.foto} alt={pastor.nombre} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/20 text-white text-3xl font-serif">
                        {pastor.nombre.split(' ').map(name => name[0]).join('').substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-secondary text-white text-sm px-2 py-1 rounded-full shadow-md">
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      <span>Grado {pastor.grado}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-serif mb-2">{pastor.nombre}</h1>
                  <p className="text-white/80 font-medium mb-2">{pastor.distrito}</p>
                  
                  {/* Iglesias integradas */}
                  <div className="mt-3">
                    {pastor.iglesias.map((iglesia, i) => (
                      <div key={i} className="flex items-center text-white/90 mb-1">
                        <Home className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="font-medium">{iglesia.nombre}</span>
                        <span className="text-white/70 text-sm mx-2">•</span>
                        <span className="text-white/70 text-sm">{iglesia.tipo}</span>
                        <span className="text-white/70 text-sm mx-2">•</span>
                        <span className="text-white/70 text-sm truncate">{iglesia.ubicacion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pastor.contacto.telefono && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Teléfono</p>
                      <p className="font-medium">{pastor.contacto.telefono}</p>
                    </div>
                  </div>
                )}

                {pastor.contacto.correo && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Correo</p>
                      <p className="font-medium">{pastor.contacto.correo}</p>
                    </div>
                  </div>
                )}

                {pastor.contacto.direccionCasa && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dirección</p>
                      <p className="font-medium">{pastor.contacto.direccionCasa}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

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
