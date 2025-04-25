
import React from "react";
import { Button } from "@/components/ui/button";
import { Church } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center py-20">
        <div className="mb-6 flex items-center justify-center">
          <Church size={60} className="text-primary-light" strokeWidth={1.5} />
        </div>

        <div className="space-y-6 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight">
            Iglesia de Dios <span className="text-primary-light">Pentecostal</span>
          </h1>

          <h2 className="text-3xl md:text-4xl text-gray-200 font-light leading-tight">
            Movimiento Internacional
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Más de 100,000 cristianos gritándole al mundo que mientras haya vida, hay esperanza.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              asChild
              className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg shadow-lg hover-scale"
            >
              <a href="/quienes-somos">Conócenos</a>
            </Button>
            
            <Button 
              variant="outline"
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg shadow-lg hover-scale"
            >
              <a href="/iglesias">Nuestras Iglesias</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
