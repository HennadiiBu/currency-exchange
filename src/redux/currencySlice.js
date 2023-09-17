import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },

  extraReducers: {},
});

export const { setBaseCurrency } = currencySlice.actions;
