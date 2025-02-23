import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {EXCHANGE_RATE_KEY, syncStorage} from '../utils/storage';
import {CurrencyRow} from '../components/CurrencyRow';
import {useGetExchangeRatesQuery} from '../api/fixerApi';
import {favoritesSelector, toggleFavorite} from '../store/favoritesSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getErrorText} from '../utils/errors';
import {COLORS} from '../constants/colors';

export const BASE_CURRENCY = 'EUR';

export const FavoritesScreen = () => {
  const {error, isLoading} = useGetExchangeRatesQuery({});

  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);

  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {},
  );
  const [filteredCurrencies, setFilteredCurrencies] = useState<
    [string, number][]
  >([]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleFilteredCurrency = useCallback(() => {
    const updatedFilteredCurrencies = Object.entries(exchangeRates).filter(
      ([currency]) => favorites.includes(currency),
    );
    setFilteredCurrencies(updatedFilteredCurrencies);
  }, [exchangeRates, favorites]);

  useEffect(() => {
    if (Object.keys(exchangeRates).length === 0) {
      const storedExchangeRates = syncStorage.getItem(EXCHANGE_RATE_KEY);

      if (storedExchangeRates) {
        setExchangeRates(JSON.parse(storedExchangeRates));
      }
      handleFilteredCurrency();
    } else {
      handleFilteredCurrency();
    }
  }, [exchangeRates, handleFilteredCurrency]);

  useEffect(() => {
    if (error) {
      const text = getErrorText(error);
      setErrorText(text);
    }
  }, [error]);

  const handleToggleFavorite = (currency: string) => {
    dispatch(toggleFavorite(currency));
  };

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
        {error && <Text style={styles.error}>{errorText}</Text>}
        {filteredCurrencies.length === 0 && !isLoading && (
          <Text style={styles.noFavoritesText}>
            No favorite currencies added yet.
          </Text>
        )}
        {isLoading && <Text style={styles.noFavoritesText}>Loading...</Text>}
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
    color: COLORS.darkGreen,
    marginBottom: 15,
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
