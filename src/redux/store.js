import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { currencySlice } from './currencySlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['baseCurrency'],
};

export const persistedCurrencyReducer = persistReducer(
  persistConfig,
  currencySlice.reducer
);

export const store = configureStore({
  reducer: { currency: persistedCurrencyReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
