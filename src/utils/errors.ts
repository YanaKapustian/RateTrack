import {FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {EXCHANGE_RATE_KEY, LAST_UPDATED_KEY, syncStorage} from './storage';
import moment from 'moment';

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
        const storedLastUpdated = syncStorage.getItem(LAST_UPDATED_KEY);
        if (storedLastUpdated) {
          const date = moment.unix(Number(storedLastUpdated)).fromNow();
          return `Showing offline data. Last updated ${date}`;
        } else {
          return 'Showing offline data';
        }
      }
    } else {
      return 'Failed to fetch data. Please try again later';
    }
  }
  return null;
};
