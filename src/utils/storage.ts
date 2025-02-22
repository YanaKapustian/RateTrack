import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const EXCHANGE_RATE_KEY = 'exchangeRates';
export const FAVORITES_KEY = 'favorites';
export const LAST_UPDATED_KEY = 'lastUpdated';

export const syncStorage = {
  setItem: (key: string, value: string | number | boolean | ArrayBuffer) =>
    storage.set(key, value),
  getItem: (key: string) => storage.getString(key),
  removeItem: (key: string) => storage.delete(key),
};
