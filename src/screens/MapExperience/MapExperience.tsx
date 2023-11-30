import { View, Text } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useTheme } from '../../hooks';
import { LogoBlack, MenuIcon, Bell, Search } from 'Ona/src/theme/assets/svg';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { selectRestaurantsByZone } from '../../store/Restaurants/restaurantsSlice';

const MapExperience = ({ navigation, route }: any) => {
  const zoneName = route.params?.zoneName;
  const { Common, Fonts, Gutters, Layout, Colors, Images } = useTheme();
  const snapPoints = useMemo(() => ['20%', '50%', '75%', '100%'], []);
  const BottomSheetRef = useRef(null);

  const handleSheetChange = useCallback((index: any) => {
    console.log(index);
  }, []);
  const restaurants = useSelector((state: any) =>
    selectRestaurantsByZone(state, zoneName),
  );
  return (
    <View style={[Layout.fill]}>
      <BottomSheet
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        
      >
        <View style={[Layout.fill]}>
          <Text style={[Fonts.textRegularWhite, { color: '#C38351' }]}>
            {restaurants.length} Restaurants
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default MapExperience;
