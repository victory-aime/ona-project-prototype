import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialRegions = [
  {
    overall_category: 'AMERICAS',
    zone_category: 'CANADA',
    zone_name: 'Toronto',
    lat: 43.6534817,
    lon: -79.3839347,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'CANADA',
    zone_name: 'Montreal',
    lat: 45.5031824,
    lon: -73.5698065,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'MEXICO',
    zone_name: 'Mexico City',
    lat: 19.4326296,
    lon: -99.1331785,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'MEXICO',
    zone_name: 'Oaxaca',
    lat: 17.0604663,
    lon: -96.7253575,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'MEXICO',
    zone_name: 'Yucatan',
    lat: 43.6805219,
    lon: -91.6887574,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'SOUTH AMERICA',
    zone_name: 'Buenos Aires',
    lat: -34.6075682,
    lon: -58.4370894,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'SOUTH AMERICA',
    zone_name: 'Lima',
    lat: -12.0621065,
    lon: -77.0365256,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'SOUTH AMERICA',
    zone_name: 'Rio',
    lat: -22.9110137,
    lon: -43.2093727,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'SOUTH AMERICA',
    zone_name: 'Sao Paulo',
    lat: -23.5506507,
    lon: -46.6333824,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'USA',
    zone_name: 'Los Angeles',
    lat: 34.0536909,
    lon: -118.242766,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'USA',
    zone_name: 'New York',
    lat: 40.7127281,
    lon: -74.0060152,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'USA',
    zone_name: 'San Francisco',
    lat: 37.7790262,
    lon: -122.419906,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'USA',
    zone_name: 'Chicago',
    lat: 41.8755616,
    lon: -87.6244212,
  },
  {
    overall_category: 'AMERICAS',
    zone_category: 'USA',
    zone_name: 'Miami',
    lat: 25.7741728,
    lon: -80.19362,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'CHINA',
    zone_name: 'Shanghai',
    lat: 31.2322758,
    lon: 121.4692071,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'CHINA',
    zone_name: 'Beijing',
    lat: 39.906217,
    lon: 116.3912757,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'CHINA',
    zone_name: 'Hong Kong',
    lat: 22.2793278,
    lon: 114.1628131,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'JAPAN',
    zone_name: 'Tokyo',
    lat: 35.6828387,
    lon: 139.7594549,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'JAPAN',
    zone_name: 'Kyoto',
    lat: 35.021041,
    lon: 135.7556075,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'SINGAPORE',
    zone_name: 'Singapore',
    lat: 1.2899175,
    lon: 103.8519072,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'SOUTH KOREA',
    zone_name: 'Seoul',
    lat: 37.5666791,
    lon: 126.9782914,
  },
  {
    overall_category: 'ASIA',
    zone_category: 'THAILAND',
    zone_name: 'Bangkok',
    lat: 13.7525438,
    lon: 100.4934734,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'AUSTRIA',
    zone_name: 'Vienna',
    lat: 48.2083537,
    lon: 16.3725042,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'BELGIUM',
    zone_name: 'Brussels',
    lat: 50.8465573,
    lon: 4.351697,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'BRITISH ISLES',
    zone_name: 'London',
    lat: 51.5073219,
    lon: -0.1276474,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'BRITISH ISLES',
    zone_name: 'Manchester',
    lat: 53.4794892,
    lon: -2.2451148,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'BRITISH ISLES',
    zone_name: 'Dublin',
    lat: 53.3497645,
    lon: -6.2602732,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'BRITISH ISLES',
    zone_name: 'Glasgow',
    lat: 55.8609825,
    lon: -4.2488787,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'French Riviera',
    lat: 46.149753,
    lon: -80.53477,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'Paris',
    lat: 48.8534951,
    lon: 2.3483915,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'Southwest',
    lat: 40.1989597,
    lon: -79.5208718,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'Brittany / Normandy',
    lat: 48.634816,
    lon: -4.3826218,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'North',
    lat: 37.879529,
    lon: -122.268914,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'Burgundy / Center',
    lat: 39.8791822,
    lon: -104.9611549,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'Rhône-Alpes',
    lat: 15.55139,
    lon: -92.87333,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'FRANCE',
    zone_name: 'Alsace/Jura',
    lat: 48.8596258,
    lon: 5.6282294,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'GERMANY',
    zone_name: 'Berlin',
    lat: 52.5170365,
    lon: 13.3888599,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'GERMANY',
    zone_name: 'Munich',
    lat: 48.1371079,
    lon: 11.5753822,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'GERMANY',
    zone_name: 'Frankfurt',
    lat: 50.1106444,
    lon: 8.6820917,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'GREECE',
    zone_name: 'Athens',
    lat: 37.9839412,
    lon: 23.7283052,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'GREECE',
    zone_name: 'Greek Islands',
    lat: -2.259285,
    lon: 106.168504,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Milan',
    lat: 45.4641943,
    lon: 9.1896346,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Rome',
    lat: 41.8933203,
    lon: 12.4829321,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Venice',
    lat: 45.4371908,
    lon: 12.3345898,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Turin',
    lat: 45.0677551,
    lon: 7.6824892,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Naples / Amalfi',
    lat: 26.13842,
    lon: -81.76648,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Tuscany',
    lat: 51.1253802,
    lon: -114.2448425,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Sicily',
    lat: 39.5900512,
    lon: -89.4912058,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'ITALY',
    zone_name: 'Puglia',
    lat: 43.5028121,
    lon: 11.8816631,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'NETHERLANDS',
    zone_name: 'Amsterdam',
    lat: 52.3727598,
    lon: 4.8936041,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'PORTUGAL',
    zone_name: 'Lisbon',
    lat: 38.7077507,
    lon: -9.1365919,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'PORTUGAL',
    zone_name: 'Porto',
    lat: 41.1494512,
    lon: -8.6107884,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SCANDINAVIA',
    zone_name: 'Copenhagen',
    lat: 55.6867243,
    lon: 12.5700724,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SCANDINAVIA',
    zone_name: 'Oslo',
    lat: 59.9133301,
    lon: 10.7389701,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SCANDINAVIA',
    zone_name: 'Stockholm',
    lat: 59.3251172,
    lon: 18.0710935,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SPAIN',
    zone_name: 'Barcelona',
    lat: 41.3828939,
    lon: 2.1774322,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SPAIN',
    zone_name: 'Ibiza / Baleares',
    lat: 38.9743901,
    lon: 1.419746318,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SPAIN',
    zone_name: 'Madrid',
    lat: 40.4167047,
    lon: -3.7035825,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SPAIN',
    zone_name: 'Basque Country',
    lat: 28.00971,
    lon: -82.574935,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SPAIN',
    zone_name: 'Andalusia',
    lat: 31.3080607,
    lon: -86.482424,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SWITZERLAND',
    zone_name: 'Zurich',
    lat: 47.3744489,
    lon: 8.5410422,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SWITZERLAND',
    zone_name: 'Geneva',
    lat: 46.2017559,
    lon: 6.1466014,
  },
  {
    overall_category: 'EUROPE',
    zone_category: 'SWITZERLAND',
    zone_name: 'Basel',
    lat: 47.5581077,
    lon: 7.5878261,
  },
  {
    overall_category: 'MIDDLE EAST / AFRICA',
    zone_category: 'EGYPT',
    zone_name: 'Cairo',
    lat: 30.0443879,
    lon: 31.2357257,
  },
  {
    overall_category: 'MIDDLE EAST / AFRICA',
    zone_category: 'ISRAEL',
    zone_name: 'Tel Aviv',
    lat: 32.0852997,
    lon: 34.7818064,
  },
  {
    overall_category: 'MIDDLE EAST / AFRICA',
    zone_category: 'LEBANON',
    zone_name: 'Beirut',
    lat: 33.8959203,
    lon: 35.47843,
  },
  {
    overall_category: 'MIDDLE EAST / AFRICA',
    zone_category: 'MOROCCO',
    zone_name: 'Marrakech',
    lat: 31.6258257,
    lon: -7.9891608,
  },
  {
    overall_category: 'MIDDLE EAST / AFRICA',
    zone_category: 'TURKEY',
    zone_name: 'Istanbul',
    lat: 41.0091982,
    lon: 28.9662187,
  },
  {
    overall_category: 'MIDDLE EAST / AFRICA',
    zone_category: 'TURKEY',
    zone_name: 'Bodrum',
    lat: 37.0343987,
    lon: 27.430651,
  },
];
const regionsSlice = createSlice({
  name: 'regions',
  initialState: initialRegions,
  reducers: {
    fetchAllRegions: (
      state,
      action: PayloadAction<{ initialRegions: any[] }>,
    ) => {
      return action.payload.initialRegions;
    },
  },
});

export const { fetchAllRegions } = regionsSlice.actions;
export default regionsSlice.reducer;
