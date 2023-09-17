import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (crd, thunkApi) => {
    try {
      const data = await getUserInfo(crd);
      console.log(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
