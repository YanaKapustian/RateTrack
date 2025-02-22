import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {COLORS} from '../constants/colors';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  clearInput: () => void;
}

export const SearchInput = ({
  searchQuery,
  setSearchQuery,
  clearInput,
}: SearchInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search currency..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCorrect={false}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={clearInput}>
          <Text style={styles.cross}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 18,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  cross: {
    fontSize: 16,
    color: COLORS.darkGreen,
    fontWeight: '500',
  },
});
