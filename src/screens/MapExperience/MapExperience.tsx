import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTheme } from '../../hooks';
import { LogoBlack, MenuIcon, Bell, Search } from '../../theme/assets/svg';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { DisplayImage } from '../../components/';

const MapExperience = ({ navigation, route }: any) => {
  const zoneName = route.params?.zoneName;
  const { Fonts, Gutters, Layout, Colors, Images } = useTheme();
  const [isOpened, setIsOpened] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [snapPointText, setSnapPointText] = useState('Restaurants');

  const snapPoints = useMemo(
    () => ['10%', '20%', '40%', '60%', '80%', '100%'],
    [],
  );

  // Utilisez le sélecteur pour obtenir tous les restaurants
  const allRestaurants = useSelector((state: any) => state.restaurants);

  // Filtrez les restaurants par zone_name
  const restaurantsInZone = allRestaurants.filter(
    (restaurant: any) => restaurant.zone_name === zoneName,
  );

  useEffect(() => {
    setIsOpened(true);
    bottomSheetRef.current?.present();
  }, [allRestaurants]);

  const handleBellPress = useCallback(() => {
    // Mettez à jour le snapPoint directement à 100%
    bottomSheetRef.current?.snapToIndex(snapPoints.length - 1);
  }, [snapPoints.length]);

  return (
    <>
      <View style={[Layout.fill]}>
        <ImageBackground
          source={Images.mapExperience}
          style={[Layout.fullSize]}
        >
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
            >
              <TouchableOpacity onPress={handleBellPress}>
                <Bell />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              Layout.fill,
              Layout.row,
              Layout.justifyContentAround,
              Gutters.regularTMargin,
              Gutters.smallLMargin,
            ]}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 56,
                width: 61,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1.5,
                borderColor: '#E8E5DF',
              }}
            >
              <Search />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 56,
                width: 80,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1.5,
                borderColor: '#E8E5DF',
              }}
            >
              <Text style={[Fonts.textSmallBlack]}>Chefs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 56,
                width: 100,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1.5,
                borderColor: '#E8E5DF',
              }}
            >
              <View
                style={{
                  backgroundColor: '#C38351',
                  borderRadius: 56,
                  width: 120,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1.5,
                  borderColor: '#E8E5DF',
                  flexDirection: 'row',
                }}
              >
                <Text style={[Fonts.textSmallWhite, { fontWeight: '100' }]}>
                  Cuisine
                </Text>
                <View
                  style={{
                    borderRadius: 50,
                    width: 24,
                    height: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1.5,
                    borderColor: '#E8E5DF',
                    marginRight: 8,
                    marginLeft: 8,
                  }}
                >
                  <Text style={[Fonts.textSmallWhite, { fontWeight: '100' }]}>
                    2
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 56,
                width: 100,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1.5,
                borderColor: '#E8E5DF',
              }}
            >
              <Text style={[Fonts.textSmallBlack]}>Categories</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            handleIndicatorStyle={{
              backgroundColor: '#C38351',
              borderRadius: 99,
            }}
          >
            <Text
              style={[
                Fonts.textRegularMind,
                Fonts.textLeft,
                Gutters.smallLMargin,
              ]}
            >
              {restaurantsInZone.length} {snapPointText}
            </Text>
            <BottomSheetScrollView>
              <DisplayImage
                data={restaurantsInZone.map((restaurant: any) => ({
                  text: restaurant.name,
                }))}
                navigation={navigation}
              />
            </BottomSheetScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </>
  );
};

export default MapExperience;
