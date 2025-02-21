import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {COLORS} from '../../constants/colors';

export const Star = ({color = COLORS.black, ...props}: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56963 1.18329C7.84187 1.05349 8.15814 1.05349 8.43038 1.18329C8.66573 1.2955 8.79548 1.49032 8.86092 1.5972C8.92857 1.7077 8.99801 1.84846 9.0657 1.98565C9.06915 1.99266 9.07261 1.99966 9.07605 2.00664L10.5028 4.89716L13.7175 5.36704C13.8689 5.38912 14.0241 5.41179 14.1501 5.44207C14.2719 5.47137 14.4972 5.53474 14.6765 5.72397C14.8839 5.94288 14.9814 6.24368 14.9419 6.54264C14.9078 6.80106 14.7626 6.98456 14.6811 7.07978C14.5969 7.1782 14.4845 7.28766 14.3749 7.39434L12.0497 9.6591L12.5983 12.8579C12.6242 13.0087 12.6508 13.1635 12.661 13.2927C12.6709 13.4176 12.6805 13.6516 12.556 13.8807C12.412 14.1458 12.1561 14.3317 11.8595 14.3867C11.6031 14.4342 11.3836 14.3528 11.2679 14.3047C11.1482 14.2551 11.0092 14.182 10.8738 14.1107L8.00001 12.5994L5.12623 14.1107C4.99079 14.182 4.85184 14.2551 4.73215 14.3047C4.61639 14.3528 4.39687 14.4342 4.14046 14.3867C3.84388 14.3317 3.58796 14.1458 3.44399 13.8807C3.31953 13.6516 3.32909 13.4176 3.33898 13.2927C3.34921 13.1635 3.37578 13.0088 3.40168 12.8579L3.95032 9.6591L1.64188 7.41067C1.63631 7.40524 1.63072 7.39981 1.62513 7.39436C1.51555 7.28768 1.40312 7.17821 1.31891 7.07978C1.23744 6.98456 1.09221 6.80107 1.05808 6.54264C1.0186 6.24369 1.11614 5.94288 1.32353 5.72397C1.50281 5.53474 1.72808 5.47137 1.84992 5.44207C1.97587 5.41179 2.13114 5.38912 2.28247 5.36704C2.2902 5.36591 2.29791 5.36478 2.30561 5.36366L5.49716 4.89716L6.92396 2.00664C6.9274 1.99966 6.93086 1.99266 6.93431 1.98565C7.002 1.84846 7.07144 1.7077 7.13909 1.5972C7.20453 1.49032 7.33429 1.2955 7.56963 1.18329ZM8.00001 2.83902L6.66178 5.55012C6.65922 5.5553 6.65631 5.56134 6.65303 5.56812C6.62126 5.63389 6.55549 5.77007 6.45118 5.88234C6.36314 5.9771 6.25754 6.05388 6.14025 6.10843C6.00129 6.17305 5.85147 6.19363 5.77912 6.20358C5.77165 6.2046 5.76501 6.20552 5.75929 6.20635L2.76561 6.64392L4.93087 8.75288C4.93502 8.75692 4.93987 8.76157 4.94532 8.76679C4.99815 8.81737 5.10755 8.9221 5.1822 9.05617C5.24521 9.16935 5.28563 9.29368 5.30123 9.42226C5.3197 9.5746 5.29282 9.72365 5.27983 9.79563C5.27849 9.80305 5.2773 9.80966 5.27632 9.81537L4.76546 12.794L7.44146 11.3867C7.44659 11.384 7.4525 11.3808 7.45915 11.3772C7.52358 11.3427 7.65699 11.271 7.80756 11.2415C7.93465 11.2166 8.06537 11.2166 8.19246 11.2415C8.34302 11.271 8.47643 11.3427 8.54086 11.3772C8.54751 11.3808 8.55342 11.384 8.55855 11.3867L11.2346 12.794L10.7237 9.81537C10.7227 9.80966 10.7215 9.80305 10.7202 9.79562C10.7072 9.72364 10.6803 9.5746 10.6988 9.42226C10.7144 9.29368 10.7548 9.16935 10.8178 9.05617C10.8925 8.9221 11.0019 8.81737 11.0547 8.76679C11.0601 8.76157 11.065 8.75692 11.0691 8.75288L13.2344 6.64392L10.2407 6.20635C10.235 6.20552 10.2284 6.2046 10.2209 6.20358C10.1485 6.19363 9.99872 6.17305 9.85976 6.10843C9.74247 6.05388 9.63687 5.9771 9.54883 5.88234C9.44452 5.77007 9.37875 5.63389 9.34698 5.56813C9.34371 5.56134 9.34079 5.5553 9.33823 5.55012L8.00001 2.83902Z"
        fill={color}
      />
    </Svg>
  );
};
