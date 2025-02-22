import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {FIXER_API_KEY} from '@env';

const FIXER_API_KEY = '';

export interface ExchangeRatesResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    [currency: string]: number;
  };
}

export const fixerApi = createApi({
  reducerPath: 'fixerApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://data.fixer.io/api/'}),
  endpoints: builder => ({
    getExchangeRates: builder.query({
      query: () => `latest?access_key=${FIXER_API_KEY}`,
    }),
  }),
});

export const {useGetExchangeRatesQuery} = fixerApi;
