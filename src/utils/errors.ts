import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {EXCHANGE_RATE_KEY, syncStorage} from './storage';

export const isFetchBaseQueryError = (
  error: unknown,
): error is FetchBaseQueryError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof error.status === 'string'
  );
};

export const getErrorText = (error: unknown) => {
  if (error && isFetchBaseQueryError(error)) {
    if (error.status === 'FETCH_ERROR') {
      const storedExchangeRates = syncStorage.getItem(EXCHANGE_RATE_KEY);
      if (!storedExchangeRates) {
        return 'Failed to fetch data. Please check your Internet connection';
      } else {
        return 'Showing offline data';
      }
    } else {
      return 'Failed to fetch data. Please try again later';
    }
  }
  return null;
};
