import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialCuisine = [
  {
    id: 'cui1',
    cuisine: 'African',
  },
  {
    id: 'cui2',
    cuisine: 'Argentinian',
  },
  {
    id: 'cui3',
    cuisine: 'American',
  },
  {
    id: 'cui4',
    cuisine: 'Asian',
  },
  {
    id: 'cui5',
    cuisine: 'Austrian',
  },
  {
    id: 'cui6',
    cuisine: 'Belgian',
  },
  {
    id: 'cui7',
    cuisine: 'Brazilian',
  },
  {
    id: 'cui8',
    cuisine: 'British',
  },
  {
    id: 'cui9',
    cuisine: 'Bistrot/Wine bar',
  },
  {
    id: 'cui10',
    cuisine: 'Carribean',
  },
  {
    id: 'cui11',
    cuisine: 'Chinese',
  },
  {
    id: 'cui12',
    cuisine: 'Eastern European',
  },
  {
    id: 'cui13',
    cuisine: 'French',
  },
  {
    id: 'cui14',
    cuisine: 'Dutch',
  },
  {
    id: 'cui15',
    cuisine: 'German',
  },
  {
    id: 'cui16',
    cuisine: 'Greek',
  },
  {
    id: 'cui17',
    cuisine: 'Indian',
  },
  {
    id: 'cui18',
    cuisine: 'Italian',
  },
  {
    id: 'cui19',
    cuisine: 'Irish',
  },
  {
    id: 'cui20',
    cuisine: 'Japanese',
  },
  {
    id: 'cui21',
    cuisine: 'Korean',
  },
  {
    id: 'cui22',
    cuisine: 'Lebanese',
  },
  {
    id: 'cui23',
    cuisine: 'Portugese',
  },
  {
    id: 'cui24',
    cuisine: 'Mediterranean',
  },
  {
    id: 'cui25',
    cuisine: 'Mexican',
  },
  {
    id: 'cui26',
    cuisine: 'Moroccan',
  },
  {
    id: 'cui27',
    cuisine: 'Middle-Eastern',
  },
  {
    id: 'cui28',
    cuisine: 'Israeli',
  },
  {
    id: 'cui29',
    cuisine: 'Peruvian',
  },
  {
    id: 'cui30',
    cuisine: 'Scandinavian',
  },
  {
    id: 'cui31',
    cuisine: 'Singaporian',
  },
  {
    id: 'cui32',
    cuisine: 'Spanish',
  },
  {
    id: 'cui33',
    cuisine: 'Swiss',
  },
  {
    id: 'cui34',
    cuisine: 'Thai',
  },
  {
    id: 'cui35',
    cuisine: 'Turkish',
  },
];

const cuisineSlice = createSlice({
  name: 'cuisine',
  initialState: initialCuisine,
  reducers: {
    fetchAllCuisine: (
      state,
      action: PayloadAction<{ initialCuisine: any[] }>,
    ) => {
      return action.payload.initialCuisine;
    },
  },
});

export const { fetchAllCuisine } = cuisineSlice.actions;
export default cuisineSlice.reducer;
