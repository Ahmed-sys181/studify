export const transportModes = [
  {
    id: 1,
    type: "Metro",
    icon: "🚇",
    color: "#FF0000",
    description: "Rapide et fiable avec accès 24/7",
    avgDuration: 15,
    cost: 2.4,
    availability: "24/7"
  },
  {
    id: 2,
    type: "Bus",
    icon: "🚌",
    color: "#0066CC",
    description: "Réseau complet couvrant toute la ville",
    avgDuration: 25,
    cost: 2.4,
    availability: "05:00-23:00"
  },
  {
    id: 3,
    type: "Tram",
    icon: "🚊",
    color: "#00AA00",
    description: "Écologique et très ponctuel, confortable",
    avgDuration: 20,
    cost: 2.4,
    availability: "05:30-23:30"
  },
  {
    id: 4,
    type: "Vélo",
    icon: "🚲",
    color: "#FF6B35",
    description: "Gratuit, écologique et bonne activité physique",
    avgDuration: 30,
    cost: 0,
    availability: "H24 (stations partout)"
  },
  {
    id: 5,
    type: "Voiture",
    icon: "🚗",
    color: "#333333",
    description: "Flexible mais cher avec frais de parking",
    avgDuration: 20,
    cost: 4.2,
    availability: "24/7"
  },
  {
    id: 6,
    type: "Train",
    icon: "🚂",
    color: "#9933FF",
    description: "Idéal pour longues distances, rapide et sûr",
    avgDuration: 45,
    cost: 5.1,
    availability: "04:00-01:00"
  }
];

export const routeExamples = [
  {
    from: "Centre-Ville",
    to: "Faculté des Sciences",
    routes: [
      { transport: "Metro", duration: 12, cost: 2.4, frequency: "5min" },
      { transport: "Bus", duration: 25, cost: 2.4, frequency: "10min" },
      { transport: "Vélo", duration: 15, cost: 0, frequency: "N/A" }
    ]
  },
  {
    from: "Quartier Étudiant",
    to: "Faculté de Médecine",
    routes: [
      { transport: "Bus", duration: 8, cost: 2.4, frequency: "8min" },
      { transport: "Vélo", duration: 10, cost: 0, frequency: "N/A" },
      { transport: "Voiture", duration: 6, cost: 4.2, frequency: "N/A" }
    ]
  },
  {
    from: "Banlieue",
    to: "Hyper Centre",
    routes: [
      { transport: "Train", duration: 20, cost: 5.1, frequency: "15min" },
      { transport: "Bus", duration: 35, cost: 2.4, frequency: "20min" },
      { transport: "Voiture", duration: 25, cost: 4.2, frequency: "N/A" }
    ]
  }
];
