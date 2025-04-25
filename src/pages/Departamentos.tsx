
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { departamentos } from "../data/departamentos";
import { Card, CardContent } from "@/components/ui/card";

const Departamentos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-serif text-primary mb-12 text-center">Departamentos</h1>
          
          <div className="grid gap-6">
            {departamentos.map((departamento) => (
              <Card key={departamento.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif text-primary">{departamento.nombre}</h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Departamentos;
