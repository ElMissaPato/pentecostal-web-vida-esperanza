
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Church } from "lucide-react";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Header with overlay */}
        <div className="relative bg-gray-900 py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Church className="h-16 w-16 text-primary-light mx-auto mb-4" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quiénes Somos</h1>
              <p className="text-xl text-gray-300">
                Conoce nuestra historia y misión
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
              Iglesia de Dios Pentecostal Movimiento Internacional
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-lg leading-relaxed">
                La Iglesia de Dios Pentecostal Movimiento Internacional es una de las organizaciones eclesiásticas de carácter pentecostal con mayor trayectoria en la historia latinoamericana.
              </p>
              
              <p className="mb-6 text-lg leading-relaxed">
                Somos más de 100,000 cristianos gritándole al mundo que mientras haya vida, hay esperanza. No sólo contamos con credenciales pastorales. Te invitamos que formes parte de la familia de Dios, donde nuestro fin es llegar a esos corazones que aún no han reconocido a JESUCRISTO como salvador de sus vidas.
              </p>
              
              <div className="my-10 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="italic text-lg text-gray-700">
                  "La Iglesia es la institución del Nuevo Testamento, fundada por Cristo mediante su sacrificio vicario en la cruz del Calvario. La misma está compuesta por aquellos que se constituyen en hijos de Dios al aceptar a Cristo como su Salvador. Como institución divina su permanencia garantizada, a pesar de los ataques del enemigo."
                </p>
              </div>
              
              <p className="mb-6 text-lg leading-relaxed">
                La Iglesia está compuesta por los santos que están en la tierra (la parte visible) y todos aquellos muertos en Cristo desde el Calvario hasta el rapto de los salvados. La Iglesia es, en expresión humana más amplia, una composición étnica de extensión universal.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Nuestra Misión</h3>
              <p className="mb-6 text-lg leading-relaxed">
                Predicar el evangelio de Jesucristo, llevando el mensaje de salvación a todas las naciones, bautizando a los creyentes en el nombre del Padre, del Hijo y del Espíritu Santo, y enseñándoles a guardar las cosas que Cristo ha mandado.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4">Nuestra Visión</h3>
              <p className="mb-6 text-lg leading-relaxed">
                Ser una iglesia que refleje el amor de Cristo, formando discípulos comprometidos que transformen sus comunidades a través del poder del Evangelio, llegando a todas las naciones con el mensaje de esperanza y salvación.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
