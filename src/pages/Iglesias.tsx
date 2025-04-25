
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { distritos, Iglesia } from "../data/distritos";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import MapComponent from "../components/MapComponent";

const Iglesias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get all churches from all districts
  const todasLasIglesias: (Iglesia & { distrito: string })[] = [];
  Object.entries(distritos).forEach(([distritoNombre, distritoInfo]) => {
    distritoInfo.Churchs.forEach(iglesia => {
      todasLasIglesias.push({
        ...iglesia,
        distrito: distritoNombre
      });
    });
  });
  
  // Filter churches based on search term
  const iglesiasFilteredBusqueda = todasLasIglesias.filter(iglesia => 
    iglesia.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    iglesia.Pastor.toLowerCase().includes(searchTerm.toLowerCase()) || 
    iglesia.Location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    iglesia.distrito.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Header with overlay */}
        <div className="relative bg-gray-900 py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin className="h-16 w-16 text-primary-light mx-auto mb-4" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestras Iglesias</h1>
              <p className="text-xl text-gray-300">
                Encuentra una iglesia cerca de ti
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Mapa de todas las iglesias</h2>
              <MapComponent />
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Directorio de iglesias</h2>
                <div className="w-full max-w-xs">
                  <Input
                    type="text"
                    placeholder="Buscar iglesia o pastor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {iglesiasFilteredBusqueda.length > 0 ? (
                  iglesiasFilteredBusqueda.map((iglesia, index) => (
                    <Card key={index} className="overflow-hidden hover-scale">
                      <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-primary">{iglesia.Name}</h3>
                            <p className="text-gray-600 mb-2">
                              Distrito: {iglesia.distrito}
                            </p>
                            <p><span className="font-medium">Pastor:</span> {iglesia.Pastor}</p>
                            <p><span className="font-medium">Tipo:</span> {iglesia.Type}</p>
                          </div>
                          <div className="flex items-start md:items-center">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                              <p className="text-gray-600">{iglesia.Location}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg text-gray-600">
                      No se encontraron iglesias que coincidan con tu búsqueda.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Iglesias;
