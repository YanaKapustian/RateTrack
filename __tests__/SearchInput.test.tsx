import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchInput} from '../src/components/SearchInput';

describe('SearchInput', () => {
  const mockSetSearchQuery = jest.fn();
  const mockClearInput = jest.fn();

  test('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <SearchInput
        searchQuery=""
        setSearchQuery={mockSetSearchQuery}
        clearInput={mockClearInput}
      />,
    );

    expect(getByPlaceholderText('Search currency...')).toBeTruthy();
  });

  test('updates search query on text input', () => {
    const {getByPlaceholderText} = render(
      <SearchInput
        searchQuery=""
        setSearchQuery={mockSetSearchQuery}
        clearInput={mockClearInput}
      />,
    );

    const input = getByPlaceholderText('Search currency...');
    fireEvent.changeText(input, 'USD');

    expect(mockSetSearchQuery).toHaveBeenCalledWith('USD');
  });

  test('calls clearInput when X button is pressed', () => {
    const {getByText} = render(
      <SearchInput
        searchQuery="USD"
        setSearchQuery={mockSetSearchQuery}
        clearInput={mockClearInput}
      />,
    );

    const clearButton = getByText('X');
    fireEvent.press(clearButton);

    expect(mockClearInput).toHaveBeenCalledTimes(1);
  });
});
