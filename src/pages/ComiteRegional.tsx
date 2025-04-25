
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { comiteRegional } from "../data/comiteRegional";
import { Card, CardContent } from "@/components/ui/card";
import { UsersRound } from "lucide-react";

const ComiteRegional = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UsersRound className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-serif text-primary">Comité Regional</h1>
          </div>
          
          <div className="grid gap-6">
            {comiteRegional.map((miembro, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-xl font-medium text-primary mb-1">{miembro.nombre}</h2>
                      <p className="text-secondary font-serif">{miembro.cargo}</p>
                    </div>
                  </div>
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

export default ComiteRegional;
