import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {syncStorage} from '../utils/storage';
import {SearchInput} from '../components/SearchInput';
import {CurrencyRow} from '../components/CurrencyRow';
import {favoritesSelector, toggleFavorite} from '../store/favoritesSlice';
import {useDispatch, useSelector} from 'react-redux';

export const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {},
  );

  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);

  useEffect(() => {
    const storedData = syncStorage.getItem('exchangeRates');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setExchangeRates(parsedData.rates);
    }
  }, []);

  const filteredCurrencies = Object.entries(exchangeRates).filter(
    ([currency]) => currency.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleToggleFavorite = (currency: string) => {
    dispatch(toggleFavorite(currency));
  };

  const clearInput = () => {
    setSearchQuery('');
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
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          clearInput={clearInput}
        />

        <FlatList
          data={filteredCurrencies}
          keyExtractor={([currency]) => currency}
          contentContainerStyle={styles.flatList}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
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
  flatList: {
    paddingHorizontal: 4,
  },
});
