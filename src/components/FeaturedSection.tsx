
import React from "react";
import { Church, Users, Book, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Quiénes Somos",
    description: "Somos una comunidad de fe con presencia en toda Latinoamérica.",
    icon: Church,
    color: "from-indigo-500 to-purple-500",
    link: "/quienes-somos",
  },
  {
    title: "Distritos",
    description: "Conoce los diferentes distritos que componen nuestra región.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    link: "/distritos",
  },
  {
    title: "Declaración de Fe",
    description: "Nuestra creencia fundamentada en las Sagradas Escrituras.",
    icon: Book,
    color: "from-pink-500 to-orange-500",
    link: "/declaracion-de-fe",
  },
  {
    title: "Nuestras Iglesias",
    description: "Encuentra una iglesia cerca de ti y únete a nuestra familia.",
    icon: Info,
    color: "from-orange-500 to-yellow-500",
    link: "/iglesias",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Vida y Esperanza</h2>
          <p className="text-gray-600 text-lg">
            Descubre cómo la Iglesia de Dios Pentecostal Movimiento Internacional
            está impactando vidas a través de la fe y la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="block hover-scale group"
            >
              <Card className="h-full border-none shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                      <feature.icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
