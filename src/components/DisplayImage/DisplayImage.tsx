import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks';
import { Like } from '../../theme/assets/svg';

const DisplayImage = ({ data, navigation }: any) => {
  const { Fonts, Layout, Images, Gutters } = useTheme();

  const defaultImage = Images.FakeImage;

  return (
    <View
      style={[
        Layout.row,
        Layout.alignItemsStart,
        Layout.justifyContentAround,
        Layout.flexWrap,
        Gutters.tinyTMargin,
      ]}
    >
      {data.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={{ marginBottom: 10 }}
          onPress={() =>
            navigation.navigate('RestaurantDetails', {
              restaurantName: item.text,
            })
          }
        >
          <View
            style={[
              Layout.relative,
              {
                borderRadius: 12,
                width: 200,
                height: 250,
                alignSelf: 'flex-start',
              },
            ]}
          >
            <View>
              <Image
                source={defaultImage}
                style={{ borderRadius: 12, ...Layout.fullSize }}
              />

              <View
                style={[
                  Layout.absolute,
                  {
                    top: 10,
                    right: 10,
                  },
                ]}
              >
                <Like fillColor="white" />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={[Fonts.textTinyBlack, Fonts.textLeft]}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DisplayImage;
