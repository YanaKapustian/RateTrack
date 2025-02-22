import {configureStore} from '@reduxjs/toolkit';
import {fixerApi} from '../api/fixerApi';
import exchangeRatesReducer from './exchangeRatesSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    exchangeRates: exchangeRatesReducer,
    favorites: favoritesReducer,
    [fixerApi.reducerPath]: fixerApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fixerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
