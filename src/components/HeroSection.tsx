
import React from "react";
import { Button } from "@/components/ui/button";
import { Church } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center py-20">
        <div className="mb-10 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <Church size={40} className="text-white" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight drop-shadow-lg">
            Iglesia de Dios <span className="text-secondary font-display">Pentecostal</span>
          </h1>

          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
              Movimiento Internacional
            </h2>

            <div className="h-0.5 w-20 bg-secondary my-4"></div>

            <p className="text-xl text-white/90 max-w-2xl mx-auto font-serif">
              Más de 100,000 cristianos gritándole al mundo que mientras haya vida, hay esperanza.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Button 
              asChild
              className="bg-secondary hover:bg-secondary-dark text-white rounded-sm px-8 py-7 text-sm uppercase tracking-wider font-medium shadow-lg hover:shadow-secondary/20 transition-all duration-300 border border-secondary-light"
            >
              <a href="/quienes-somos">Conócenos</a>
            </Button>
            
            <Button 
              variant="outline"
              asChild
              className="bg-transparent hover:bg-white/10 border border-white text-white hover:text-white rounded-sm px-8 py-7 text-sm uppercase tracking-wider font-medium shadow-lg transition-all duration-300"
            >
              <a href="/iglesias">Nuestras Iglesias</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
