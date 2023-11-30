import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';

const SplashScreen = ({ navigation, route }: any) => {
  const { Fonts, Gutters, Layout } = useTheme();
  const zoneName = route.params?.zoneName;

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    navigation.navigate('MapExperience', { zoneName: zoneName });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, { backgroundColor: '#22211F' }]}>
      <View
        style={[Layout.center, Gutters.largeTMargin, Gutters.largeTPadding]}
      >
        <Brand />
      </View>
      <View style={[Layout.center, Gutters.largePadding]}>
        <Text style={[Fonts.textRegularWhite]}>{zoneName}</Text>
        <Text style={[Fonts.textSmall, Gutters.smallMargin]}>
          LOADING RESTAURANTS…
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
