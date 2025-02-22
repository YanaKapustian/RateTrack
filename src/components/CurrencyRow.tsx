import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Star} from '../assets/svg/Star';
import {StarFilled} from '../assets/svg/StarFilled';
import {BASE_CURRENCY} from '../screens/FavoritesScreen';
import {COLORS} from '../constants/colors';

interface CurrencyRowProps {
  currency: string;
  rate: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const CurrencyRow = ({
  currency,
  rate,
  isFavorite,
  onToggleFavorite,
}: CurrencyRowProps) => {
  return (
    <View style={styles.currencyRow}>
      <Text style={styles.currencyText}>
        1 {BASE_CURRENCY} = {rate} {currency}
      </Text>
      <TouchableOpacity onPress={onToggleFavorite}>
        {isFavorite ? <StarFilled /> : <Star />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  currencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  currencyText: {
    fontSize: 16,
  },
});
