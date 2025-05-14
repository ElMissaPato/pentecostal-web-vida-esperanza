
export interface Iglesia {
  nombre: string;
  tipo: 'Iglesia Organizada' | 'Misión' | 'Campo Blanco';
  ubicacion: string;
  direccion?: string;
}

export interface Pastor {
  id: string;
  nombre: string;
  grado: string;
  iglesias: Iglesia[];
  distrito: string;
  contacto: {
    telefono?: string;
    correo?: string;
    direccionCasa?: string;
  };
  biografia?: string;
  foto?: string;
}

export const pastores: Pastor[] = [
  // DISTRITO MADERA CHIH.
  {
    id: "mayra-maldonado",
    nombre: "Mayra Cristina Maldonado Peinado",
    grado: "3",
    iglesias: [
      {
        nombre: "Monte Horeb",
        tipo: "Misión",
        ubicacion: "Ranchería el Norte, madera chihuahua"
      }
    ],
    distrito: "DISTRITO MADERA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "cruz-barraza",
    nombre: "Cruz Barraza Acosta",
    grado: "Ordenado",
    iglesias: [
      {
        nombre: "Príncipe de paz",
        tipo: "Iglesia Organizada",
        ubicacion: "Largo Maderal, Chihuahua"
      }
    ],
    distrito: "DISTRITO MADERA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "leopoldo-gonzales",
    nombre: "Leopoldo Gonzales Maldonado",
    grado: "3",
    iglesias: [
      {
        nombre: "Eben-ezer",
        tipo: "Iglesia Organizada",
        ubicacion: "c.9ª e Iturbide Madera Chihuahua"
      }
    ],
    distrito: "DISTRITO MADERA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "cita-fimbres",
    nombre: "Cita Fimbres Yáñez",
    grado: "3",
    iglesias: [
      {
        nombre: "La Hermosa",
        tipo: "Misión",
        ubicacion: "Mesa de tres Ríos Sonora"
      }
    ],
    distrito: "DISTRITO MADERA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "socorro-hernandez",
    nombre: "Socorro Hernández Oros",
    grado: "4",
    iglesias: [
      {
        nombre: "El Sinaí",
        tipo: "Iglesia Organizada",
        ubicacion: "Ciénega Blanca Temosachi, Chihuahua"
      },
      {
        nombre: "Misión Yahveh",
        tipo: "Misión",
        ubicacion: "Ciénega Blanca Temosachi, Chihuahua"
      }
    ],
    distrito: "DISTRITO MADERA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "miguel-pena",
    nombre: "Miguel Peña Ortiz",
    grado: "3",
    iglesias: [
      {
        nombre: "Nueva Vida",
        tipo: "Misión",
        ubicacion: "Independencia, Col. Nicolas Bravo"
      }
    ],
    distrito: "DISTRITO MADERA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  // DISTRITO JUAREZ CHIH.
  {
    id: "angel-garibay",
    nombre: "Ángel Garibay Orozco",
    grado: "Ordenado",
    iglesias: [
      {
        nombre: "Centro familiar Cristiano Elim",
        tipo: "Iglesia Organizada",
        ubicacion: "Victoria y Sánchez S/N Palomas Ascensión Chih."
      }
    ],
    distrito: "DISTRITO JUAREZ CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "virginia-ponce",
    nombre: "Virginia Ponce Leos",
    grado: "3",
    iglesias: [
      {
        nombre: "El Rey ya viene",
        tipo: "Iglesia Organizada",
        ubicacion: "Maple y Sinaloa # 1425 Felipe ángeles Juárez Chih"
      }
    ],
    distrito: "DISTRITO JUAREZ CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "refugio-valenciano",
    nombre: "Refugio valenciano",
    grado: "6",
    iglesias: [
      {
        nombre: "Genesis",
        tipo: "Misión",
        ubicacion: "José Antúnez Pedroza #4051 col. Villa Esperanza"
      }
    ],
    distrito: "DISTRITO JUAREZ CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  // DISTRITO CHIHUAHUA CHIH.
  {
    id: "jesus-arturo-perez",
    nombre: "Jesús Arturo Perez Domínguez",
    grado: "4",
    iglesias: [
      {
        nombre: "Fuente de agua Viva",
        tipo: "Iglesia Organizada",
        ubicacion: "Punta el mulato # 9716 col. Punta oriente Chihuahua. Chih"
      }
    ],
    distrito: "DISTRITO CHIHUAHUA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "alejandro-pacheco",
    nombre: "Alejandro Pacheco Bustamante",
    grado: "4",
    iglesias: [
      {
        nombre: "La Verdad",
        tipo: "Iglesia Organizada",
        ubicacion: "c.5ª # 911 Col. Villa Juárez Chihuahua"
      }
    ],
    distrito: "DISTRITO CHIHUAHUA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "ana-patricia-venzor",
    nombre: "Ana Patricia Venzor Coronado",
    grado: "2",
    iglesias: [
      {
        nombre: "La Verdad",
        tipo: "Iglesia Organizada",
        ubicacion: "c.5ª # 911 Col. Villa Juárez Chihuahua"
      }
    ],
    distrito: "DISTRITO CHIHUAHUA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "isabel-cristina-morales",
    nombre: "Isabel Cristina Morales Gonzales",
    grado: "Ordenado",
    iglesias: [
      {
        nombre: "Betania",
        tipo: "Iglesia Organizada",
        ubicacion: "c.43 # 15711 Col. Nuevo Triunfo Chihuahua"
      }
    ],
    distrito: "DISTRITO CHIHUAHUA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "maria-cecilia-dias",
    nombre: "María Cecilia Días Contreras",
    grado: "3",
    iglesias: [
      {
        nombre: "Betania",
        tipo: "Iglesia Organizada",
        ubicacion: "c.43 # 15711 Col. Nuevo Triunfo Chihuahua"
      }
    ],
    distrito: "DISTRITO CHIHUAHUA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  // Agregamos los ministros según la imagen compartida
  {
    id: "marcelo-martinez",
    nombre: "Marcelo Martínez",
    grado: "Ordenado",
    iglesias: [
      {
        nombre: "Manantial de vida",
        tipo: "Iglesia Organizada",
        ubicacion: "Puerto del Toro Saucillo Chihuahua"
      }
    ],
    distrito: "DISTRITO DELICIAS SAUCILLO.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "karen-reyes",
    nombre: "Karen Guadalupe Reyes Gutiérrez",
    grado: "3",
    iglesias: [
      {
        nombre: "Jesucristo es nuestro refugio",
        tipo: "Misión",
        ubicacion: "c. Calixto Contreras #14 col. Lucio Cabañas"
      }
    ],
    distrito: "DISTRITO DURANGO.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "lorenza-arana",
    nombre: "Lorenza Arana Erives",
    grado: "3",
    iglesias: [
      {
        nombre: "Betania",
        tipo: "Iglesia Organizada",
        ubicacion: "c.43 # 15711 Col. Nuevo Triunfo Chihuahua"
      }
    ],
    distrito: "DISTRITO CHIHUAHUA CHIH.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  },
  {
    id: "ricardo-rodriguez",
    nombre: "Ricardo Noel Rodríguez Figueroa",
    grado: "3",
    iglesias: [
      {
        nombre: "Pueblo de Dios",
        tipo: "Iglesia Organizada",
        ubicacion: "Salome Canales #3 Col. Centro Juan Aldama Zac."
      }
    ],
    distrito: "DISTRITO JUAN ALDAMA ZAC.",
    contacto: {
      telefono: "",
      correo: "",
      direccionCasa: ""
    }
  }
  // Aquí puedes seguir agregando más pastores según la imagen compartida
];

export const obtenerPresbiteros = () => {
  const presbiteros = [
    { id: "mayra-maldonado", nombre: "Mayra Maldonado", distrito: "DISTRITO MADERA CHIH." },
    { id: "angel-garibay", nombre: "Angel Garibay", distrito: "DISTRITO JUAREZ CHIH." },
    { id: "arturo-perez", nombre: "Arturo Perez", distrito: "DISTRITO CHIHUAHUA CHIH." },
    { id: "daniel-delgado", nombre: "Daniel Delgado", distrito: "DISTRITO DELICIAS SAUCILLO." },
    { id: "roberto-aros", nombre: "Roberto Aros", distrito: "DISTRITO DURANGO." },
    { id: "camila-arzola", nombre: "Camila Arzola", distrito: "DISTRITO JUAN ALDAMA ZAC." },
    { id: "ernesto-moreno", nombre: "Ernesto Moreno", distrito: "DISTRITO SIERRA TARAHUMARA." },
  ];
  return presbiteros;
};

// Función para obtener todos los distritos
export const obtenerDistritos = () => {
  const distritos = [
    "DISTRITO MADERA CHIH.",
    "DISTRITO JUAREZ CHIH.",
    "DISTRITO CHIHUAHUA CHIH.",
    "DISTRITO DELICIAS SAUCILLO.",
    "DISTRITO DURANGO.",
    "DISTRITO JUAN ALDAMA ZAC.",
    "DISTRITO SIERRA TARAHUMARA."
  ];
  return distritos;
};

// Función para obtener todos los pastores de un distrito específico
export const obtenerPastoresPorDistrito = (distrito: string) => {
  return pastores.filter(pastor => pastor.distrito === distrito);
};
