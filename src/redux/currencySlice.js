import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

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

  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.baseCurrency = action.payload;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
