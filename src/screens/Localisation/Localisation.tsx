import { View, Text, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../../hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CarretLeft } from '../../theme/assets/svg';
const Localisation = ({ navigation }: any) => {
  const { Common, Fonts, Gutters, Layout, Colors, Images } = useTheme();

  return (
    <View style={[Layout.fullSize]}>
      <ImageBackground source={Images.maps} style={[Layout.fullHeight]}>
        <View
          style={[
            Layout.dflex,
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.smallMargin,
          ]}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CarretLeft fillColor="black" />
          </TouchableOpacity>
        </View>
        <View
          style={[
            Layout.flexGrow,
            Layout.justifyContentEnd,
            Gutters.largeBMargin,
          ]}
        >
          <View style={[Gutters.smallHMargin]}>
            <View style={[Gutters.smallTMargin]}>
              <Text style={[Fonts.textCenter, Fonts.textMeduimBlack]}>
                Enable location
              </Text>
            </View>

            <View style={[Gutters.smallHMargin]}>
              <Text style={[Fonts.textCenter, Fonts.textRegularGray]}>
                It will allow us to show restaurants around you.
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  Gutters.smallMargin,
                  Common.button.rounded,
                  Common.backgroundSecond,
                ]}
              >
                <Text style={[Fonts.textRegularWhite, Fonts.textCenter]}>
                  Allow location
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Localisation-not-allowed')}
              >
                <Text style={[Fonts.textRegularGray, Fonts.textCenter]}>
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Localisation;
