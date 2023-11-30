import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';
import { CarretLeft } from 'Ona/src/theme/assets/svg';

const Register = ({ navigation }: any) => {
  const { Common, Fonts, Gutters, Layout, Colors, Images } = useTheme();

  return (
    <View style={[Layout.fullSize]}>
      <ImageBackground
        source={Images.RegisterBackImage}
        style={[Layout.fullSize]}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(34, 33, 31, 0.6)',
          }}
        />
        <View
          style={[
            Layout.dflex,
            Layout.row,
            Layout.justifyContentBetween,
            Gutters.smallMargin,
          ]}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Localisation')}>
            <CarretLeft fillColor="black" />
          </TouchableOpacity>
          <Image source={require('../../theme/assets/images/smallLogo.png')} />
          <Text></Text>
        </View>
        <View style={[Layout.dflex, Layout.center, Gutters.regularTMargin]}>
          <Text style={[Fonts.textLargeBold, Fonts.textCenter]}>
            Join us so you can fully experience the Guide
          </Text>
        </View>
        <View
          style={[
            Layout.dflex,
            Layout.col,
            Gutters.largeTMargin,
            Gutters.smallLMargin,
            Gutters.smallRMargin,
          ]}
        >
          <View
            style={[
              {
                borderRadius: 12,
                backgroundColor: Colors.brown,
                padding: 15,
              },
            ]}
          >
            <View style={[Layout.center, Layout.alignItemsCenter]}>
              <Text>vv</Text>
              <Text style={[Fonts.textRegularmid]}>Concierge</Text>
              <Text style={[Fonts.textTiny]}>
                Let us book the best tables in town for you
              </Text>
            </View>
          </View>
          <View
            style={[
              Gutters.smallTMargin,
              {
                borderRadius: 12,
                backgroundColor: Colors.brown,
                padding: 15,
              },
            ]}
          >
            <View style={[Layout.center, Layout.alignItemsCenter]}>
              <Text>vv</Text>
              <Text style={[Fonts.textRegularmid]}>My Wishlist </Text>
              <Text style={[Fonts.textTiny]}>
                Save your favorite restaurants
              </Text>
            </View>
          </View>
        </View>
        <View style={[Layout.dflex]}>
          <View
            style={[
              Gutters.smallTMargin,
              Gutters.smallLMargin,
              Gutters.smallRMargin,
            ]}
          >
            <TouchableOpacity
              style={[
                Gutters.smallLMargin,
                Gutters.smallRMargin,
                Gutters.smallTMargin,
                Common.button.rounded,
              ]}
              onPress={() => navigation.navigate('SignUpEmail')}
            >
              <Text style={[Fonts.textSmallBlack, Fonts.textCenter]}>
                Signup
              </Text>
            </TouchableOpacity>
            <Text
              style={[Fonts.textTiny, Fonts.textCenter, Gutters.smallMargin]}
            >
              By continuing, I accept cgv & cgu
            </Text>

            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Layout.justifyContentCenter,
                Gutters.largeTMargin,
              ]}
            >
              <Text style={[Fonts.textTiny]}>You have an account? </Text>
              <TouchableOpacity>
                <Text style={[Fonts.textTiny, { color: '#C38351' }]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
