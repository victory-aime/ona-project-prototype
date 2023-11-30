import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks';

const SignUpEmail = ({ navigation }: any) => {
  const { Common, Fonts, Gutters, Layout, Colors, Images } = useTheme();

  return (
    <View style={[Layout.fill, { backgroundColor: '#F7F6F2' }]}>
      <View
        style={[
          Layout.dflex,
          Layout.row,
          Layout.justifyContentBetween,
          Gutters.smallMargin,
        ]}
      >
        <Text style={{ color: 'red' }}>svg</Text>
      </View>
      <View style={[Gutters.smallTMargin, Gutters.smallLMargin]}>
        <Text style={[Fonts.textLarge, Fonts.textLeft, { color: 'black' }]}>
          Please introduce yourself !
        </Text>
      </View>
      <View style={[Gutters.regularTMargin, Gutters.smallLMargin]}>
        <Text>What is your Full Name?</Text>
        <View style={[Gutters.smallRMargin]}>
          <TextInput
            style={[
              Gutters.smallTMargin,
              Common.button.rounded,
              Common.backgroundPrimary,
              { borderWidth: 1, borderColor: '#C38351' },
            ]}
            placeholder="Full name"
          />
        </View>

        <Text style={[Gutters.smallTMargin]}>What is your Email?</Text>
        <View style={[Gutters.smallRMargin]}>
          <TextInput
            style={[
              Gutters.smallTMargin,
              Common.button.rounded,
              Common.backgroundPrimary,
            ]}
            placeholder="Your Email"
          />
        </View>
      </View>
      <View style={[Gutters.regularTMargin, Gutters.smallLMargin]}>
        <View style={[Layout.row]}>
          <Text>svg</Text>
          <Text style={[Gutters.smallLMargin]}>
            I accept to receive the ONA newsletter
          </Text>
        </View>
      </View>
      <View style={[Layout.dflex]}>
        <View
          style={[
            Gutters.regularTMargin,
            Gutters.smallLMargin,
            Gutters.smallRMargin,
          ]}
        >
          <View style={[]}>
            <TouchableOpacity
              style={[Common.button.rounded, { backgroundColor: 'black' }]}
            >
              <Text
                style={[
                  Fonts.textSmallBlack,
                  Fonts.textCenter,
                  { color: 'white' },
                ]}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpEmail;
