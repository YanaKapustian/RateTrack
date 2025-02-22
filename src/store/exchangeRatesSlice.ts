import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ExchangeRatesResponse, fixerApi} from '../api/fixerApi';
import {syncStorage} from '../utils/storage';

interface ExchangeRatesState {
  rates: Record<string, number>;
  lastUpdated: number | null;
}

const initialState: ExchangeRatesState = {
  rates: {},
  lastUpdated: null,
};

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      fixerApi.endpoints.getExchangeRates.matchFulfilled,
      (state, action: PayloadAction<ExchangeRatesResponse>) => {
        state.rates = action.payload.rates;
        state.lastUpdated = action.payload.timestamp;

        syncStorage.setItem(
          'exchangeRates',
          JSON.stringify(action.payload.rates),
        );
        syncStorage.setItem(
          'lastUpdated',
          JSON.stringify(action.payload.timestamp),
        );
      },
    );
  },
});

export default exchangeRatesSlice.reducer;
