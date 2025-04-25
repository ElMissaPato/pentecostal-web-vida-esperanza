
export interface Iglesia {
  Pastor: string;
  Type: string;
  Location: string;
  Name: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Distrito {
  Presbitero: string;
  Churchs: Iglesia[];
}

export interface DistritoMap {
  [key: string]: Distrito;
}

export const distritos: DistritoMap = {
  "CHIHUAHUA CHIH": {
    "Presbitero": "Arturo Perez",
    "Churchs": [
      {
        "Pastor": "Jesús Arturo Perez Domínguez",
        "Type": "Iglesia Organizada",
        "Location": "Punta el mulato # 9716 col. Punta oriente Chihuahua. Chih",
        "Name": "Fuente de agua Viva",
        "coordinates": {
          lat: 28.6353,
          lng: -106.0889
        }
      },
      {
        "Pastor": "Alejandro Pacheco Bustamante",
        "Type": "Iglesia Organizada",
        "Location": "c.5ª # 911 Col. Villa Juárez Chihuahua",
        "Name": "La Verdad",
        "coordinates": {
          lat: 28.6329,
          lng: -106.1202
        }
      }
    ]
  },
  "CIUDAD JUAREZ": {
    "Presbitero": "Samuel Rodriguez",
    "Churchs": [
      {
        "Pastor": "Samuel Rodriguez Flores",
        "Type": "Iglesia Organizada",
        "Location": "Calle Libertad #123 Col. Centro, Ciudad Juárez",
        "Name": "Puerta del Cielo",
        "coordinates": {
          lat: 31.7389,
          lng: -106.4858
        }
      },
      {
        "Pastor": "Roberto Méndez García",
        "Type": "Iglesia Organizada",
        "Location": "Av. Tecnológico #567 Col. Fuentes, Ciudad Juárez",
        "Name": "Monte de Sión",
        "coordinates": {
          lat: 31.7205,
          lng: -106.4596
        }
      }
    ]
  },
  "MONTERREY": {
    "Presbitero": "Juan Martínez",
    "Churchs": [
      {
        "Pastor": "Juan Martínez Rodríguez",
        "Type": "Iglesia Organizada",
        "Location": "Av. Constitución #890 Col. Centro, Monterrey",
        "Name": "Roca Eterna",
        "coordinates": {
          lat: 25.6866,
          lng: -100.3161
        }
      },
      {
        "Pastor": "Carlos Gómez Pérez",
        "Type": "Misión",
        "Location": "Calle Reforma #456 Col. Industrial, Monterrey",
        "Name": "Manantial de Vida",
        "coordinates": {
          lat: 25.7040,
          lng: -100.3211
        }
      }
    ]
  },
  "TORREÓN": {
    "Presbitero": "Raúl Hernández",
    "Churchs": [
      {
        "Pastor": "Raúl Hernández López",
        "Type": "Iglesia Organizada",
        "Location": "Blvd. Independencia #1234 Col. Centro, Torreón",
        "Name": "Faro de Luz",
        "coordinates": {
          lat: 25.5428,
          lng: -103.4068
        }
      },
      {
        "Pastor": "Miguel Torres Sánchez",
        "Type": "Iglesia Organizada",
        "Location": "Calle Morelos #789 Col. Las Margaritas, Torreón",
        "Name": "Gracia y Verdad",
        "coordinates": {
          lat: 25.5350,
          lng: -103.4200
        }
      }
    ]
  }
};
