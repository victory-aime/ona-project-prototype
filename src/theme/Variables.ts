/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  beige :'#EEEBE6',
  brown : '#C38351',

  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  textWhite: '#FFF',
  textBlack: '#000',
  textBeige: '#F7F6F2',
  textBrown : '#C38351',
  primary: '#fff',
  second :'#22211F',
  blue:'#5E86F4',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  regularmid : 24,
  meduim : 36,
  large: 40,

};

/**
 * Metrics Sizes for padding and margin
 */
const tiny = 10;
const small = tiny * 2; // 20
const meduim = small * 1.8 ; // 36
const regular = tiny * 3; // 30
const large = regular * 3; // 90
export const MetricsSizes = {
  tiny,
  small,
  meduim,
  regular,
  large,
};

export const AppStyles = {
  container: {
    opacity : 0.9,
    backgroundColor:
      'linear-gradient(180deg, rgba(34, 33, 31, 0.90) 0%, rgba(34, 33, 31, 0.50) 54.65%, rgba(34, 33, 31, 0.95) 91.18%)',
  },
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  AppStyles,
};
