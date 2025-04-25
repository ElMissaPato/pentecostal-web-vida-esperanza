
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book, ChevronDown, ChevronRight } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { declaracionDeFe } from "../data/declaracionDeFe";

const DeclaracionDeFe = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderSection = (sectionKey: string, sectionData: any, depth = 0) => {
    // Skip 'texto' keys as they are rendered with their parent
    if (sectionKey === 'texto') return null;

    const isObject = typeof sectionData === 'object' && sectionData !== null;
    const hasNestedContent = isObject && Object.keys(sectionData).some(key => key !== 'texto');
    
    const contentClass = depth === 0 
      ? "mb-8 glass-card" 
      : depth === 1 
        ? "mb-4 pl-4 border-l-2 border-primary/20" 
        : "mb-2 pl-4 border-l border-gray-200";
    
    const titleClass = depth === 0 
      ? "text-2xl font-serif font-bold mb-3 text-primary" 
      : depth === 1 
        ? "text-xl font-medium mb-2 text-gray-800" 
        : "text-lg font-medium mb-1 text-gray-700";
    
    return (
      <div key={sectionKey} className={contentClass}>
        {/* Section header */}
        <div 
          className={`flex items-center justify-between cursor-pointer py-3 px-5 ${hasNestedContent ? 'hover:bg-gray-50' : ''}`}
          onClick={() => hasNestedContent && handleSectionClick(`${sectionKey}-${depth}`)}
        >
          <h3 className={titleClass}>{sectionKey}</h3>
          {hasNestedContent && (
            activeSection === `${sectionKey}-${depth}` 
              ? <ChevronDown className="h-5 w-5 text-primary" /> 
              : <ChevronRight className="h-5 w-5 text-gray-400" />
          )}
        </div>
        
        {/* Section text if available */}
        {isObject && sectionData.texto && (
          <div className="px-5 py-3 text-gray-600 bg-gray-50/50 border-t border-gray-100">
            <p>{sectionData.texto}</p>
          </div>
        )}
        
        {/* Nested sections */}
        {isObject && hasNestedContent && activeSection === `${sectionKey}-${depth}` && (
          <div className="p-4">
            {Object.entries(sectionData)
              .filter(([key]) => key !== 'texto')
              .map(([key, value]) => renderSection(key, value, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Header with overlay */}
        <div className="relative bg-gradient-to-r from-primary to-secondary py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Declaración de Fe</h1>
              <p className="text-xl text-white/90 font-light">
                Nuestras creencias fundamentadas en las Sagradas Escrituras
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text heading-underline heading-underline-center">
              Fundamentos de Nuestra Fe
            </h2>

            <div className="mb-10 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
              <p className="italic text-lg text-gray-700">
                "Las Sagradas Escrituras constituyen nuestra suficiente regla de fe y conducta. En ellas fundamentamos nuestra creencia en Dios. Por lo tanto, las declaraciones de verdades fundamentales que siguen, extraídas del Libro Sagrado "La Biblia", son tenidas por base de nuestra fe y comunión cristiana."
              </p>
            </div>

            <div className="space-y-6">
              {Object.entries(declaracionDeFe).map(([key, value]) => renderSection(key, value))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeclaracionDeFe;
