import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand, Partners } from 'Ona/src/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Welcome = ({ navigation }: any) => {
  const { Common, Fonts, Gutters, Layout, Images, AppStyles } = useTheme();

  return (
    <View style={[Layout.fill]}>
      <View style={[Layout.fullSize, AppStyles.container]}>
        <ImageBackground source={Images.onBoarding} style={[Layout.fullSize]} />
      </View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor:
            'linear-gradient(180deg, rgba(34, 33, 31, 0.30) 0%, rgba(34, 33, 31, 0.90) 54.65%, rgba(34, 33, 31, 0.95) 91.18%)',
        }}
      />
      <View style={[Layout.absolute, Layout.colCenter]}>
        <View
          style={[Gutters.smallMargin, Gutters.largeTMargin, Layout.center]}
        >
          <View style={[Gutters.largeTMargin, Gutters.regularLMargin]}>
            <Brand />
          </View>
          <View
            style={[Gutters.smallLMargin, Gutters.largeTMargin, Layout.center]}
          >
            <Text
              style={[
                Fonts.textCenter,
                Fonts.textRegular,
                Gutters.smallLMargin,
              ]}
            >
              The Guide with the restaurants that chefs love
            </Text>

            <TouchableOpacity
              style={[
                Gutters.regularTMargin,
                Common.button.rounded,
                Gutters.largeHPadding,
              ]}
              onPress={() => navigation.navigate('Localisation')}
            >
              <Text style={[Fonts.textRegularBlack, Fonts.textCenter,{ fontWeight : '100'}]}>
                Explore the guide
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Gutters.smallTMargin]}>
            <Partners />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
