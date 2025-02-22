import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const syncStorage = {
  setItem: (key: string, value: string | number | boolean | ArrayBuffer) =>
    storage.set(key, value),
  getItem: (key: string) => storage.getString(key),
  removeItem: (key: string) => storage.delete(key),
};
