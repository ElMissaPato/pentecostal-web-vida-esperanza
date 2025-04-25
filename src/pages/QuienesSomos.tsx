
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
        <div className="relative bg-gradient-to-r from-primary to-secondary py-20 mb-12">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-cover opacity-20 mix-blend-overlay"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Church className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Quiénes Somos</h1>
              <p className="text-xl text-white/90 font-light">
                Conoce nuestra historia y misión
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 mb-12 animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
              
              <h2 className="text-3xl font-bold mb-8 text-center font-serif heading-underline heading-underline-center">
                Iglesia de Dios Pentecostal Movimiento Internacional
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed">
                  La Iglesia de Dios Pentecostal Movimiento Internacional es una de las organizaciones eclesiásticas de carácter pentecostal con mayor trayectoria en la historia latinoamericana.
                </p>
                
                <p className="mb-6 text-lg leading-relaxed">
                  Somos más de 100,000 cristianos gritándole al mundo que mientras haya vida, hay esperanza. No sólo contamos con credenciales pastorales. Te invitamos que formes parte de la familia de Dios, donde nuestro fin es llegar a esos corazones que aún no han reconocido a JESUCRISTO como salvador de sus vidas.
                </p>
              </div>
              
              <div className="my-10 p-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border-l-4 border-amber-400">
                <p className="italic text-lg text-gray-700 font-serif">
                  "La Iglesia es la institución del Nuevo Testamento, fundada por Cristo mediante su sacrificio vicario en la cruz del Calvario. La misma está compuesta por aquellos que se constituyen en hijos de Dios al aceptar a Cristo como su Salvador. Como institución divina su permanencia garantizada, a pesar de los ataques del enemigo."
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed">
                  La Iglesia está compuesta por los santos que están en la tierra (la parte visible) y todos aquellos muertos en Cristo desde el Calvario hasta el rapto de los salvados. La Iglesia es, en expresión humana más amplia, una composición étnica de extensión universal.
                </p>
              </div>
            </div>

            {/* Mission and Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-fancy animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif text-primary">Nuestra Misión</h3>
                <p className="text-gray-600 text-center">
                  Predicar el evangelio de Jesucristo, llevando el mensaje de salvación a todas las naciones, bautizando a los creyentes en el nombre del Padre, del Hijo y del Espíritu Santo, y enseñándoles a guardar las cosas que Cristo ha mandado.
                </p>
              </div>

              <div className="card-fancy animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.775-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif text-secondary">Nuestra Visión</h3>
                <p className="text-gray-600 text-center">
                  Ser una iglesia que refleje el amor de Cristo, formando discípulos comprometidos que transformen sus comunidades a través del poder del Evangelio, llegando a todas las naciones con el mensaje de esperanza y salvación.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="glass-card p-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-bold mb-6 text-center font-serif gradient-text">Nuestros Valores</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="mb-3 mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Amor</h4>
                  <p className="text-gray-600 text-sm">Amor a Dios y al prójimo como fundamento de nuestra vida cristiana.</p>
                </div>
                
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="mb-3 mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Fe</h4>
                  <p className="text-gray-600 text-sm">Confianza completa en Dios y en su Palabra como guía para nuestra vida.</p>
                </div>
                
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="mb-3 mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">Comunidad</h4>
                  <p className="text-gray-600 text-sm">Unidad y hermandad entre los creyentes para glorificar a Dios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
