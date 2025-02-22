import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {syncStorage} from '../utils/storage';
import {CurrencyRow} from '../components/CurrencyRow';
import {useGetExchangeRatesQuery} from '../api/fixerApi';
import {favoritesSelector, toggleFavorite} from '../store/favoritesSlice';
import {useDispatch, useSelector} from 'react-redux';

export const BASE_CURRENCY = 'EUR';

export const FavoritesScreen = () => {
  const {error} = useGetExchangeRatesQuery({}, {skip: true});

  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);

  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {},
  );
  const [errorText, setErrorText] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const storedExchangeRates = syncStorage.getItem('exchangeRates');
    const storedLastUpdated = syncStorage.getItem('lastUpdated');

    if (storedExchangeRates) {
      setExchangeRates(JSON.parse(storedExchangeRates).rates);
    }

    if (storedLastUpdated) {
      setLastUpdated(storedLastUpdated);
    }

    if (!storedExchangeRates) {
      setErrorText('Failed to fetch data. Showing offline data.');
    }
  }, []);

  const handleToggleFavorite = (currency: string) => {
    dispatch(toggleFavorite(currency));
  };

  const filteredCurrencies = Object.entries(exchangeRates).filter(
    ([currency]) => favorites.includes(currency),
  );

  const renderItem = ({item}: {item: [string, number]}) => {
    const [currency, rate] = item;
    const isFavorite = favorites.includes(currency);

    return (
      <CurrencyRow
        currency={currency}
        rate={rate}
        isFavorite={isFavorite}
        onToggleFavorite={() => handleToggleFavorite(currency)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
        {error && (
          <Text style={styles.error}>
            {errorText} Last updated at: {lastUpdated}
          </Text>
        )}
        {filteredCurrencies.length === 0 && !error && (
          <Text style={styles.noFavoritesText}>
            No favorite currencies added yet.
          </Text>
        )}
        <FlatList
          data={filteredCurrencies}
          keyExtractor={([currency]) => currency}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 20,
    fontSize: 14,
  },
  flatList: {
    paddingHorizontal: 4,
  },
  noFavoritesText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
