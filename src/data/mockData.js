// Dados baseados nas planilhas fornecidas
export const cityData = {
  fortaleza: {
    name: "Fortaleza",
    period: "Fev/25 - Jun/25",
    totalAccess: 179,
    dailyData: [
      { date: "Feb 24", visits: 5 },
      { date: "Mar 3", visits: 6 },
      { date: "Mar 10", visits: 3 },
      { date: "Mar 17", visits: 2 },
      { date: "Mar 24", visits: 10 },
      { date: "Mar 31", visits: 8 },
      { date: "Apr 7", visits: 3 },
      { date: "Apr 14", visits: 5 },
      { date: "Apr 21", visits: 7 },
      { date: "Apr 28", visits: 9 },
      { date: "May 5", visits: 8 },
      { date: "May 12", visits: 15 },
      { date: "May 19", visits: 13 },
      { date: "May 26", visits: 9 },
      { date: "Jun 2", visits: 12 },
      { date: "Jun 9", visits: 14 },
      { date: "Jun 16", visits: 8 }
    ],
    resources: [
      { name: "audio_guide", value: 112 },
      { name: "sign_language", value: 65 },
      { name: "audio_description", value: 29 }
    ],
    artworks: [
      { name: "A Onça Canta...", value: 19 },
      { name: "Alfabeto Sertanejo", value: 18 },
      { name: "Viola Girada", value: 17 },
      { name: "Texto Instituci...", value: 10 },
      { name: "Sala Especial...", value: 10 },
      { name: "Texto Curador...", value: 10 },
      { name: "A Acauham - A...", value: 9 },
      { name: "Manuel Dantã...", value: 9 }
    ],
    cities: [
      { name: "Fortaleza", value: 119 },
      { name: "São Paulo", value: 34 },
      { name: "Santa Luzia", value: 19 },
      { name: "Curitiba", value: 13 },
      { name: "Natal", value: 6 },
      { name: "Franco da Rocha", value: 4 },
      { name: "Tamboril", value: 3 },
      { name: "Murfreesboro", value: 2 }
    ]
  },
  natal: {
    name: "Natal",
    period: "Nov/24 - Fev/25",
    totalAccess: 616,
    dailyData: [
      { date: "Oct 28", visits: 5 },
      { date: "Nov 4", visits: 30 },
      { date: "Nov 11", visits: 42 },
      { date: "Nov 18", visits: 18 },
      { date: "Nov 25", visits: 32 },
      { date: "Dec 2", visits: 15 },
      { date: "Dec 9", visits: 8 },
      { date: "Dec 16", visits: 12 },
      { date: "Dec 23", visits: 18 },
      { date: "Dec 30", visits: 15 },
      { date: "Jan 6", visits: 25 },
      { date: "Jan 13", visits: 28 },
      { date: "Jan 20", visits: 25 },
      { date: "Jan 27", visits: 38 },
      { date: "Feb 3", visits: 18 }
    ],
    resources: [
      { name: "audio_guide", value: 575 },
      { name: "audio_description", value: 110 },
      { name: "sign_language", value: 107 }
    ],
    artworks: [
      { name: "Miguel dos Santos", value: 103 },
      { name: "A Onça Canta...", value: 66 },
      { name: "Estandartes", value: 60 },
      { name: "Sala Especial...", value: 55 },
      { name: "Musica e Dança", value: 52 },
      { name: "Artes plásticas", value: 46 },
      { name: "Figurinos - A...", value: 38 },
      { name: "A Acauham - A...", value: 36 }
    ],
    cities: [
      { name: "Natal", value: 314 },
      { name: "(none)", value: 109 },
      { name: "Fortaleza", value: 115 },
      { name: "Recife", value: 96 },
      { name: "São Paulo", value: 68 },
      { name: "Rio de Janeiro", value: 11 },
      { name: "Salvador", value: 8 },
      { name: "Montevideo", value: 3 }
    ]
  },
  salvador: {
    name: "Salvador",
    period: "Jul/24 - Out/24",
    totalAccess: 352,
    dailyData: [
      { date: "Jul 22", visits: 3 },
      { date: "Jul 29", visits: 12 },
      { date: "Aug 5", visits: 8 },
      { date: "Aug 12", visits: 6 },
      { date: "Aug 19", visits: 37 },
      { date: "Aug 26", visits: 15 },
      { date: "Sep 2", visits: 8 },
      { date: "Sep 9", visits: 19 },
      { date: "Sep 16", visits: 10 },
      { date: "Sep 23", visits: 12 },
      { date: "Sep 30", visits: 22 },
      { date: "Oct 7", visits: 18 },
      { date: "Oct 14", visits: 17 },
      { date: "Oct 21", visits: 14 },
      { date: "Oct 28", visits: 8 }
    ],
    resources: [
      { name: "audio_guide", value: 371 },
      { name: "audio_description", value: 36 },
      { name: "sign_language", value: 10 }
    ],
    artworks: [
      { name: "Sala Especial...", value: 37 },
      { name: "Musica e Dança", value: 35 },
      { name: "A Onça Canta...", value: 35 },
      { name: "Estandartes", value: 33 },
      { name: "Miguel dos Santos", value: 30 },
      { name: "Texto Instituci...", value: 29 },
      { name: "Alfabeto Sertanejo", value: 28 },
      { name: "Manuel Dantã...", value: 26 }
    ],
    cities: [
      { name: "Salvador", value: 213 },
      { name: "São Paulo", value: 59 },
      { name: "Maceió", value: 29 },
      { name: "(none)", value: 26 },
      { name: "Fortaleza", value: 25 },
      { name: "Rio de Janeiro", value: 20 },
      { name: "Florianópolis", value: 13 },
      { name: "Aracaju", value: 9 }
    ]
  }
};

// Função para calcular dados unificados
export const getUnifiedData = () => {
  const cities = Object.values(cityData);
  
  // Total de acessos unificado
  const totalAccess = cities.reduce((sum, city) => sum + city.totalAccess, 0);
  
  // Dados diários unificados - combinando todas as datas
  const allDates = new Set();
  cities.forEach(city => {
    city.dailyData.forEach(day => allDates.add(day.date));
  });
  
  const dailyData = Array.from(allDates).sort().map(date => {
    const totalVisits = cities.reduce((sum, city) => {
      const dayData = city.dailyData.find(d => d.date === date);
      return sum + (dayData ? dayData.visits : 0);
    }, 0);
    return { date, visits: totalVisits };
  });
  
  // Recursos unificados
  const resourceMap = new Map();
  cities.forEach(city => {
    city.resources.forEach(resource => {
      const current = resourceMap.get(resource.name) || 0;
      resourceMap.set(resource.name, current + resource.value);
    });
  });
  const resources = Array.from(resourceMap.entries()).map(([name, value]) => ({ name, value }));
  
  // Obras unificadas
  const artworkMap = new Map();
  cities.forEach(city => {
    city.artworks.forEach(artwork => {
      const current = artworkMap.get(artwork.name) || 0;
      artworkMap.set(artwork.name, current + artwork.value);
    });
  });
  const artworks = Array.from(artworkMap.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);
  
  // Cidades unificadas
  const cityMap = new Map();
  cities.forEach(city => {
    city.cities.forEach(cityEntry => {
      const current = cityMap.get(cityEntry.name) || 0;
      cityMap.set(cityEntry.name, current + cityEntry.value);
    });
  });
  const unifiedCities = Array.from(cityMap.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);
  
  return {
    name: "Todas as Cidades",
    period: "Jul/24 - Jun/25",
    totalAccess,
    dailyData,
    resources,
    artworks,
    cities: unifiedCities
  };
}; 