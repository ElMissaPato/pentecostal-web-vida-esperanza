
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const DeclaracionDeFe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Header with overlay */}
        <div className="relative bg-gray-900 py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Book className="h-16 w-16 text-primary-light mx-auto mb-4" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Declaración de Fe</h1>
              <p className="text-xl text-gray-300">
                Nuestras creencias fundamentadas en las Sagradas Escrituras
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Fundamentos de Nuestra Fe
            </h2>

            <div className="mb-10 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="italic text-lg text-gray-700">
                "Las Sagradas Escrituras constituyen nuestra suficiente regla de fe y conducta. En ellas fundamentamos nuestra creencia en Dios. Por lo tanto, las declaraciones de verdades fundamentales que siguen, extraídas del Libro Sagrado "La Biblia", son tenidas por base de nuestra fe y comunión cristiana."
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="seccion-a">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  Las Sagradas Escrituras
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-4 px-2">
                  <p className="mb-4">
                    La Biblia, los sesenta y seis libros del Antiguo y Nuevo Testamento, son verdaderamente inspirados por Dios, sin error en sus escritos originales y que son la autoridad suprema y final de fe y conducta.
                  </p>
                  <p>
                    Entendemos por inspiración la influencia que Dios, Espíritu Santo, ejerció sobre cada escritor de las Sagradas Escrituras sin impedir la participación del intelecto humano en la comunicación de la verdad sagrada.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seccion-b1">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  El Dios único y verdadero
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-4 px-2">
                  <p>
                    Se ha revelado como el Todopoderoso Creador del Universo, quien al manifestarse como "Yo Soy", es en sí mismo el Eterno. En su revelación, al ser una UNIDAD de personas, se presenta como UNO, aunque existe eternamente en tres personas, a saber: el Padre, el Hijo y el Espíritu Santo, una TRINIDAD.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seccion-b2">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  La Adorable Deidad
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-4 px-2">
                  <p>
                    Esta grandiosa y misericordiosa Deidad está compuesta por tres personas, de ahí que hablemos de Tres Personas distintas y un solo Dios verdadero. Tanto el vocablo trinidad como personas no se encuentran en las Sagradas Escrituras, pero son términos que están implícitos en ella y que la Iglesia Cristiana los adoptó para definir su conocimiento de Dios, y los mismos guardan armonía con la Palabra de Dios.
                  </p>
                  <p className="mt-4">
                    Cuando hablamos de la Trinidad nos estamos refiriendo a la composición de la Deidad en tres personas. Por persona significamos subsistencia, indicando que Dios es en tres subsistencias, revelado en las Escrituras como Padre, Hijo y Espíritu Santo. Por subsistencia, significamos la forma propia de ser de Dios. Así pues, Dios es en tres formas propias, cada una en particular poseyendo los atributos que definen la personalidad, a saber: pensamiento, voluntad y sentimiento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seccion-b3">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  Distinción y relación en la Deidad
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-4 px-2">
                  <p>
                    En el Nuevo Testamento encontramos la encarnación del Hijo en Jesús de Nazareth y la Escritura afirma que ese milagro es obra y gracia del Espíritu Santo. Evidenciando esto, que Dios es uno, pero también trino, dándose en la relación de Padre, Hijo y Espíritu Santo, como puede comprobarse en el bautismo de nuestro Señor Jesucristo.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seccion-b4">
                <AccordionTrigger className="text-xl font-semibold py-4">
                  El Padre
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-4 px-2">
                  <p>
                    Padre (Pater) - Designa la primera persona de la Trinidad. Nombre que describe a Dios como el originador de todas las cosas y aún de los seres humanos. El Hacedor se da a conocer en una relación de amor para con sus hijos, los hombres. Esta expresión paternal de amor en Dios llega a su plenitud al entregar a Jesucristo su Hijo al sacrificio en la cruz para la salvación del hombre, constituyendo a aquellos que mediante la fe le acepten, en "hijos de Dios".
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeclaracionDeFe;
