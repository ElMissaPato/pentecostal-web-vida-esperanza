
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
      },
      {
        "Pastor": "Isabel Cristina Morales Gonzales",
        "Type": "Iglesia Organizada",
        "Location": "c.43 # 15711 Col. Nuevo Triunfo Chihuahua",
        "Name": "Betania",
        "coordinates": {
          lat: 28.6420,
          lng: -106.1150
        }
      },
      {
        "Pastor": "Abraham Beltrán Méndez",
        "Type": "Iglesia Organizada",
        "Location": "c. Tanzanita y Granate Santa Eulalia, Chihuahua",
        "Name": "Sermón del Monte",
        "coordinates": {
          lat: 28.6245,
          lng: -106.0950
        }
      },
      {
        "Pastor": "Jorge Luis López Chaparro",
        "Type": "Iglesia Organizada",
        "Location": "C. Donato Guerra #2209 Col. Obrera, Chihuahua",
        "Name": "Casa de Dios",
        "coordinates": {
          lat: 28.6368,
          lng: -106.0766
        }
      }
    ]
  },
  "DELICIAS SAUCILLO": {
    "Presbitero": "Daniel Delgado",
    "Churchs": [
      {
        "Pastor": "Daniel Delgado Torres",
        "Type": "Iglesia Organizada",
        "Location": "Puerto del Toro Saucillo Chihuahua",
        "Name": "Manantial de Vida",
        "coordinates": {
          lat: 28.0293,
          lng: -105.2985
        }
      },
      {
        "Pastor": "Daniel Delgado Torres",
        "Type": "Campo Blanco",
        "Location": "Pueblito de allende, Chih.",
        "Name": "",
        "coordinates": {
          lat: 28.1200,
          lng: -105.4000
        }
      },
      {
        "Pastor": "Eduardo de la Rosa Hernández",
        "Type": "Misión",
        "Location": "c. Durango y Av. Chihuahua S/N Saucillo Chih",
        "Name": "Casa de Oración",
        "coordinates": {
          lat: 28.0254,
          lng: -105.3029
        }
      }
    ]
  },
  "DURANGO": {
    "Presbitero": "Roberto Aros",
    "Churchs": [
      {
        "Pastor": "Roberto Aros Chávez",
        "Type": "Misión",
        "Location": "Col. Centro Santa María del Oro Durango",
        "Name": "Ríos de agua Viva",
        "coordinates": {
          lat: 25.9444,
          lng: -105.3689
        }
      },
      {
        "Pastor": "Rolando Gutiérrez Larrañaga",
        "Type": "Iglesia Organizada",
        "Location": "Col. San Ignacio Gómez Palacio Durango",
        "Name": "Tabernáculo de reunión",
        "coordinates": {
          lat: 25.5694,
          lng: -103.4878
        }
      }
    ]
  },
  "JUAN ALDAMA ZAC": {
    "Presbitero": "Camila Arzola",
    "Churchs": [
      {
        "Pastor": "Camila Arzola Ramos",
        "Type": "Iglesia Organizada",
        "Location": "Salome Canales #3 Col. Centro Juan Aldama Zac.",
        "Name": "Pueblo de Dios",
        "coordinates": {
          lat: 24.2833,
          lng: -103.4000
        }
      },
      {
        "Pastor": "Miguel Antonio Zúñiga Guzmán",
        "Type": "Iglesia Organizada",
        "Location": "Idelfonso valenciana #29 juan Aldama Zac.",
        "Name": "Eben – Ezer",
        "coordinates": {
          lat: 24.2820,
          lng: -103.3950
        }
      }
    ]
  },
  "SIERRA TARAHUMARA": {
    "Presbitero": "Ernesto Moreno",
    "Churchs": [
      {
        "Pastor": "Ernesto Moreno Castro",
        "Type": "Misión",
        "Location": "Napuchi Municipio de Guachochi chihuahua",
        "Name": "Los Napuchis",
        "coordinates": {
          lat: 26.8203,
          lng: -107.0694
        }
      },
      {
        "Pastor": "Ernesto Moreno Castro",
        "Type": "Campo Blanco",
        "Location": "Samachique, Municipio de Guachochi Chihuahua.",
        "Name": "Samachique",
        "coordinates": {
          lat: 27.2981,
          lng: -107.5469
        }
      },
      {
        "Pastor": "Fabian Gonzalez",
        "Type": "Iglesia Organizada",
        "Location": "Rejogochi municipio de Guachochi chihuahua",
        "Name": "Rejogochi",
        "coordinates": {
          lat: 27.1500,
          lng: -107.2500
        }
      }
    ]
  }
};
