
export interface Asociacion {
  id: string;
  nombre: string;
  descripcion: string;
  mision?: string;
  vision?: string;
  actividades?: string[];
  lider?: string;
  imagen?: string;
}

export const asociaciones: Asociacion[] = [
  {
    id: "heraldos",
    nombre: "Heraldos de Cristo",
    descripcion: "La asociación de Caballeros llamada \"Heraldos de Cristo\", ha sido el estandarte en el mundo entero. El rol del hombre de Dios se caracteriza por el buen dentro de una sociedad que necesita de Cristo. Llevamos el evangelio a esos jefes de hogar que ansían conocer y seguir a su creador.",
    mision: "Fortalecer el liderazgo cristiano masculino en el hogar, la iglesia y la sociedad, equipando a los hombres para ser verdaderos heraldos del mensaje de Cristo.",
    vision: "Ser una comunidad de hombres que reflejen el carácter de Cristo, transformando sus hogares y comunidades a través de un impacto positivo y un testimonio fiel.",
    actividades: [
      "Retiros espirituales para hombres",
      "Talleres de liderazgo familiar",
      "Proyectos de evangelismo dirigidos a hombres",
      "Mentoría para jóvenes varones"
    ]
  },
  {
    id: "mensajeras",
    nombre: "Mensajeras del Señor",
    descripcion: "La asociación de Damas llamada \"Mensajeras del Señor\", se ha dado a la tarea de ganar mujeres para Cristo. En estos tiempos siempre se ha buscado brindarles un apoyo emocional, psicológico y espiritual, de esta manera contribuimos a una sociedad llena de mujeres de Dios.",
    mision: "Ministrar a las necesidades espirituales, emocionales y sociales de las mujeres, equipándolas para ser mensajeras efectivas del amor de Dios en sus diferentes roles.",
    vision: "Formar una red de apoyo para mujeres que buscan crecer en su fe y compartir el mensaje de Cristo en sus esferas de influencia.",
    actividades: [
      "Estudios bíblicos para mujeres",
      "Conferencias sobre temas relevantes",
      "Ministerios de consejería",
      "Proyectos de asistencia social"
    ]
  },
  {
    id: "embajadores",
    nombre: "Embajadores de Cristo",
    descripcion: "La asociación de Jóvenes llamada \"Embajadores de Cristo – AJEC\", ha sido de gran importancia en el crecimiento espiritual en las vidas de muchos necesitados. La juventud realiza actividades de integración, musicales y enseñanza bíblica que ayudan al nuevo creyente.",
    mision: "Cultivar una nueva generación de jóvenes apasionados por Cristo, que representen Sus valores en todos los ámbitos de la sociedad moderna.",
    vision: "Ser un movimiento juvenil que impacte positivamente a la cultura, demostrando que es posible seguir a Cristo con relevancia y autenticidad.",
    actividades: [
      "Eventos musicales y artísticos",
      "Campamentos juveniles",
      "Misiones urbanas",
      "Grupos pequeños de discipulado"
    ]
  },
  {
    id: "joyas",
    nombre: "Joyas de Cristo",
    descripcion: "La asociación de Niños llamados \"Joyas de Cristo\", son parte del semillero de la iglesia de Cristo en la tierra. Cada niño es formado bajo los principios y enseñanza de nuestro Señor Jesús. Protegemos la niñez para así ser parte del cambio de nuestra sociedad. Su alegría son nuestra mayor riqueza.",
    mision: "Sembrar la Palabra de Dios en el corazón de los niños, formando el carácter de Cristo desde temprana edad a través de enseñanzas bíblicas adaptadas a su comprensión.",
    vision: "Crear un ambiente seguro y enriquecedor donde cada niño descubra su valor en Cristo y desarrolle una fe personal que perdure toda la vida.",
    actividades: [
      "Escuela dominical creativa",
      "Clubes bíblicos semanales",
      "Campamentos infantiles",
      "Programas especiales en fechas importantes"
    ]
  }
];
