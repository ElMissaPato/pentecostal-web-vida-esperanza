
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { distritos } from "../data/distritos";
import { Users, Map, ListFilter, Church, Home, ChevronDown } from "lucide-react";
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
        <div className="relative bg-gradient-to-r from-primary to-secondary py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Distritos</h1>
              <p className="text-xl text-white/90 font-light">
                Conoce los distritos de la Región Nor-Centro
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Tabs defaultValue="mapa" className="mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8 bg-gray-100 p-1 rounded-full">
                <TabsTrigger value="mapa" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Map className="w-4 h-4 mr-2" /> Mapa
                </TabsTrigger>
                <TabsTrigger value="lista" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
                  <ListFilter className="w-4 h-4 mr-2" /> Lista de Distritos
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mapa" className="pt-4">
                <div className="mb-6">
                  <div className="glass-card p-4 mb-6">
                    <label htmlFor="distrito-select" className="block text-sm font-medium text-gray-700 mb-2">
                      Seleccionar Distrito:
                    </label>
                    <div className="relative">
                      <select
                        id="distrito-select"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="w-full max-w-xs p-2 pr-8 border border-gray-300 rounded-md shadow-sm appearance-none bg-white"
                      >
                        <option value="">Todos los Distritos</option>
                        {Object.keys(distritos).map((nombre) => (
                          <option key={nombre} value={nombre}>{nombre}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <MapComponent selectedDistrict={selectedDistrict} />
                </div>
              </TabsContent>
              
              <TabsContent value="lista" className="space-y-8 pt-4">
                {distritosArray.map((distrito) => (
                  <Card key={distrito.nombre} className="gradient-border overflow-hidden">
                    <div className="p-6 bg-white rounded-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Church className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-gray-800">{distrito.nombre}</h3>
                          <p className="text-gray-600">
                            <span className="font-medium">Presbítero:</span> {distrito.presbitero}
                          </p>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-3 text-primary">Iglesias en este distrito:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {distrito.iglesias.map((iglesia, index) => (
                          <div 
                            key={index} 
                            className="bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-100 transition-all duration-200"
                          >
                            <div className="flex items-start gap-2">
                              <Home className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                              <div>
                                <h5 className="font-bold text-secondary">{iglesia.Name || "Sin nombre"}</h5>
                                <p><span className="font-medium">Pastor:</span> {iglesia.Pastor}</p>
                                <p><span className="font-medium">Tipo:</span> {iglesia.Type}</p>
                                <p className="text-sm text-gray-600">{iglesia.Location}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
