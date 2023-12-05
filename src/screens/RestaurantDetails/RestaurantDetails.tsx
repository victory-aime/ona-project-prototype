import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { MenuIcon, LogoBlack, Bell, Search } from '../../theme/assets/svg';
import { useTheme } from '../../hooks';

const RestaurantDetails = ({ route }: any) => {
  const { restaurantName } = route.params;
  const { Fonts, Gutters, Layout, Colors, Images } = useTheme();
  return (
    <ScrollView contentContainerStyle={[Layout.fill]}>
      <ImageBackground source={Images.FakeImage} style={{ height: '80%' }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor:
              'linear-gradient(180deg, rgba(247, 246, 242, 0.6) 36.25%, rgba(247, 246, 242, 0.00) 100%)',

            top: 0,
            bottom: 700,
          }}
        />

        <View
          style={[
            Layout.dflex,
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.regularTMargin,
            Gutters.smallLMargin,
            Gutters.smallRMargin,
          ]}
        >
          <MenuIcon />
          <LogoBlack />
          <View
            style={{
              backgroundColor: 'black',
              borderRadius: 50,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          ></View>
        </View>
      </ImageBackground>
      <Text>{restaurantName}</Text>
    </ScrollView>
  );
};

export default RestaurantDetails;
