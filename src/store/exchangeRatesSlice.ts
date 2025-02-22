import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ExchangeRatesResponse, fixerApi} from '../api/fixerApi';
import {EXCHANGE_RATE_KEY, syncStorage} from '../utils/storage';

interface ExchangeRatesState {
  rates: Record<string, number>;
}

const initialState: ExchangeRatesState = {
  rates: {},
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

        syncStorage.setItem(
          EXCHANGE_RATE_KEY,
          JSON.stringify(action.payload.rates),
        );
      },
    );
  },
});

export default exchangeRatesSlice.reducer;
