import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (crd, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedBaseCurrency = state.currency.baseCurrency;
    if (persistedBaseCurrency) {
      return thunkAPI.rejectWithValue('Already have base currency');
    }
    try {
      const data = await getUserInfo(crd);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
