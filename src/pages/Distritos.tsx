
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { distritos } from "../data/distritos";
import { Users, Church } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-serif text-primary">Distritos</h1>
          </div>
          
          <div className="grid gap-8">
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
                  <ScrollArea className="h-[300px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {distrito.iglesias.map((iglesia, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-100 transition-all duration-200"
                        >
                          <div className="flex items-start gap-2">
                            <Church className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
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
                  </ScrollArea>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Distritos;
