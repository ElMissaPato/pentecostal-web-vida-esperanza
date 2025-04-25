
export interface Asociacion {
  id: string;
  nombre: string;
  descripcion: string;
}

export const asociaciones: Asociacion[] = [
  {
    id: "heraldos",
    nombre: "Heraldos de Cristo",
    descripcion: "La asociación de Caballeros llamada \"Heraldos de Cristo\", ha sido el estandarte en el mundo entero. El rol del hombre de Dios se caracteriza por el buen dentro de una sociedad que necesita de Cristo. Llevamos el evangelio a esos jefes de hogar que ansían conocer y seguir a su creador."
  },
  {
    id: "mensajeras",
    nombre: "Mensajeras del Señor",
    descripcion: "La asociación de Damas llamada \"Mensajeras del Señor\", se ha dado a la tarea de ganar mujeres para Cristo. En estos tiempos siempre se ha buscado brindarles un apoyo emocional, psicológico y espiritual, de esta manera contribuimos a una sociedad llena de mujeres de Dios."
  },
  {
    id: "embajadores",
    nombre: "Embajadores de Cristo",
    descripcion: "La asociación de Jóvenes llamada \"Embajadores de Cristo – AJEC\", ha sido de gran importancia en el crecimiento espiritual en las vidas de muchos necesitados. La juventud realiza actividades de integración, musicales y enseñanza bíblica que ayudan al nuevo creyente."
  },
  {
    id: "joyas",
    nombre: "Joyas de Cristo",
    descripcion: "La asociación de Niños llamados \"Joyas de Cristo\", son parte del semillero de la iglesia de Cristo en la tierra. Cada niño es formado bajo los principios y enseñanza de nuestro Señor Jesús. Protegemos la niñez para así ser parte del cambio de nuestra sociedad. Su alegría son nuestra mayor riqueza."
  }
];
