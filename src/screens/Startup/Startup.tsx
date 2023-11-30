import React, { useEffect } from 'react';
import {  ScrollView, Text, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand, Partners } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import { ApplicationScreenProps } from '../../../@types/navigation';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const {  Fonts, Gutters, Layout } = useTheme();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ScrollView
      style={Layout.fullSize}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceAround,
        { backgroundColor: '#000' },
      ]}
    >
      <View>
        <Text style={[Fonts.textRegular]}>WE ARE ONA PRESENT</Text>
      </View>
      <View>
        <Brand />
      </View>

      <View style={[Layout.center, Gutters.smallRMargin]}>
        <Partners />
      </View>
    </ScrollView>
  );
};

export default Startup;
