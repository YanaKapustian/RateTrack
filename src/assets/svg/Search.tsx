import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../constants/colors';

export const Search = ({color = COLORS.black}: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 22L7.99989 16M5.66667 10.1667C5.66667 14.677 9.32301 18.3333 13.8333 18.3333C18.3437 18.3333 22 14.677 22 10.1667C22 5.65634 18.3437 2 13.8333 2C9.32301 2 5.66667 5.65634 5.66667 10.1667Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
