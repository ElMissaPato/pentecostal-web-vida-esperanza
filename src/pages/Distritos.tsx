
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { distritos } from "../data/distritos";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MapComponent from "../components/MapComponent";

const Distritos = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  
  const distritosArray = Object.keys(distritos).map((key) => ({
    nombre: key,
    presbitero: distritos[key].Presbitero,
    iglesias: distritos[key].Churchs,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Header with overlay */}
        <div className="relative bg-gray-900 py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="h-16 w-16 text-primary-light mx-auto mb-4" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Distritos</h1>
              <p className="text-xl text-gray-300">
                Conoce los distritos de la Región Nor-Centro
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Tabs defaultValue="mapa" className="mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="mapa">Mapa</TabsTrigger>
                <TabsTrigger value="lista">Lista de Distritos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mapa" className="pt-4">
                <div className="mb-6">
                  <label htmlFor="distrito-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Seleccionar Distrito:
                  </label>
                  <select
                    id="distrito-select"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full max-w-xs p-2 border border-gray-300 rounded-md shadow-sm"
                  >
                    <option value="">Todos los Distritos</option>
                    {Object.keys(distritos).map((nombre) => (
                      <option key={nombre} value={nombre}>{nombre}</option>
                    ))}
                  </select>
                </div>
                
                <MapComponent selectedDistrict={selectedDistrict} />
              </TabsContent>
              
              <TabsContent value="lista" className="space-y-8 pt-4">
                {distritosArray.map((distrito) => (
                  <Card key={distrito.nombre} className="overflow-hidden">
                    <div className="h-2 bg-primary"></div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{distrito.nombre}</h3>
                      <p className="text-lg mb-4">
                        <span className="font-medium">Presbítero:</span> {distrito.presbitero}
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3">Iglesias en este distrito:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {distrito.iglesias.map((iglesia, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-md">
                            <h5 className="font-bold text-primary">{iglesia.Name}</h5>
                            <p><span className="font-medium">Pastor:</span> {iglesia.Pastor}</p>
                            <p><span className="font-medium">Tipo:</span> {iglesia.Type}</p>
                            <p className="text-sm text-gray-600">{iglesia.Location}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Distritos;
