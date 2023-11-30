/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.white,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.textGray400,
    },
    textSmallBlack: {
      fontSize: FontSize.small,
      color: Colors.textBlack,
    },
    textSmallBold: {
      fontSize: FontSize.small,
      color: Colors.textBlack,
      fontWeight: 'bold',
    },
    textSmallWhite: {
      fontSize: FontSize.small,
      color: Colors.textWhite,
      fontWeight: 'bold',
    },
    textMeduimBold: {
      fontSize: FontSize.meduim,
      color: Colors.textBlack,
      fontWeight: 'bold',
    },
    textMeduimBlack: {
      fontSize: FontSize.meduim,
      color: Colors.textBlack,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.textWhite,
      fontWeight: 'bold',
    },
    textRegularWhite: {
      fontSize: FontSize.regular,
      color: Colors.textWhite,
    },
    textRegularGray: {
      fontSize: FontSize.regular,
      color: Colors.textGray200,
    },
    textRegularBlack: {
      fontSize: FontSize.regular,
      color: Colors.textBlack,
      fontWeight: 'bold',
    },
    textRegularmid: {
      fontSize: FontSize.regularmid,
      color: Colors.textWhite,
      fontWeight: '500',
      lineHeight: 32,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.textGray400,
    },
    textLargeWhite: {
      fontSize: FontSize.large,
      color: Colors.textWhite,
    },
    textLargeBold: {
      fontSize: FontSize.large,
      color: Colors.textWhite,
      fontWeight: 'bold',
    },
    textLargeBlack: {
      fontSize: FontSize.large,
      color: Colors.textBlack,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.5,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textBlue: {
      color: Colors.blue,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textLight: {
      color: Colors.textGray200,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
