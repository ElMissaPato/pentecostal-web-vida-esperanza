
import React from "react";
import { Button } from "@/components/ui/button";
import { Church } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center py-20">
        <div className="mb-6 flex items-center justify-center">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Church size={48} className="text-white" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-6 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight drop-shadow-lg">
            Iglesia de Dios <span className="text-amber-300 font-display">Pentecostal</span>
          </h1>

          <h2 className="text-3xl md:text-4xl text-white/90 font-light leading-tight font-display">
            Movimiento Internacional
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto font-serif">
            Más de 100,000 cristianos gritándole al mundo que mientras haya vida, hay esperanza.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-amber-500/30 transition-all duration-300 border-2 border-amber-400"
            >
              <a href="/quienes-somos">Conócenos</a>
            </Button>
            
            <Button 
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/80 text-white hover:text-white rounded-full px-8 py-6 text-lg shadow-lg transition-all duration-300"
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
