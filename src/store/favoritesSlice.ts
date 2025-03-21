import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FAVORITES_KEY, syncStorage} from '../utils/storage';

interface FavoritesState {
  currencies: string[];
}

const loadStoredFavorites = (): string[] => {
  const storedFavorites = syncStorage.getItem(FAVORITES_KEY);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const initialState: FavoritesState = {
  currencies: loadStoredFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      if (state.currencies.includes(action.payload)) {
        state.currencies = state.currencies.filter(
          currency => currency !== action.payload,
        );
      } else {
        state.currencies.push(action.payload);
      }

      syncStorage.setItem(FAVORITES_KEY, JSON.stringify(state.currencies));
    },
  },
});

export const {toggleFavorite} = favoritesSlice.actions;

export const favoritesSelector = (state: {favorites: FavoritesState}) =>
  state.favorites.currencies;

export default favoritesSlice.reducer;
