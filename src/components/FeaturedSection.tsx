
import React from "react";
import { Church, Users, Book, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Quiénes Somos",
    description: "Somos una comunidad de fe con presencia en toda Latinoamérica.",
    icon: Church,
    color: "border-l-primary",
    link: "/quienes-somos",
  },
  {
    title: "Distritos",
    description: "Conoce los diferentes distritos que componen nuestra región.",
    icon: Users,
    color: "border-l-primary",
    link: "/distritos",
  },
  {
    title: "Declaración de Fe",
    description: "Nuestra creencia fundamentada en las Sagradas Escrituras.",
    icon: Book,
    color: "border-l-primary",
    link: "/declaracion-de-fe",
  },
  {
    title: "Nuestras Iglesias",
    description: "Encuentra una iglesia cerca de ti y únete a nuestra familia.",
    icon: Info,
    color: "border-l-primary",
    link: "/iglesias",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-primary">
            Vida y Esperanza
          </h2>
          <div className="h-0.5 w-20 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Descubre cómo la Iglesia de Dios Pentecostal Movimiento Internacional
            está impactando vidas a través de la fe y la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="block hover-scale group"
            >
              <Card className="h-full border-none shadow-md overflow-hidden">
                <div className={`border-l-4 ${feature.color} h-full`}>
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="w-14 h-14 rounded-sm bg-muted flex items-center justify-center text-primary">
                        <feature.icon size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-center mb-3 group-hover:text-secondary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
