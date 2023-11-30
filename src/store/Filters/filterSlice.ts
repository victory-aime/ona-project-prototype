import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialFilter = [
  {
    id: 'fil1',
    filter: 'Vegetarian',
  },
  {
    id: 'fil2',
    filter: 'Vegan',
  },
  {
    id: 'fil3',
    filter: 'Pescetarian',
  },
  {
    id: 'fil4',
    filter: 'Allergy-friendly',
  },
  {
    id: 'fil5',
    filter: 'Dairy-free',
  },
  {
    id: 'fil6',
    filter: 'Gluten-free',
  },
  {
    id: 'fil7',
    filter: 'Terrace',
  },
  {
    id: 'fil8',
    filter: 'Open on Sunday',
  },
  {
    id: 'fil9',
    filter: 'Open on Monday',
  },
  {
    id: 'fil10',
    filter: 'Open after 10pm',
  },
];
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    fetchAllFilter: (
      state,
      action: PayloadAction<{ initialFilter: any[] }>,
    ) => {
      return action.payload.initialFilter;
    },
  },
});

export const { fetchAllFilter } = filterSlice.actions;
export default filterSlice.reducer;
