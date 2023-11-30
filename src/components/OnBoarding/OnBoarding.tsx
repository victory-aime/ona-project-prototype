import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const OnBoarding = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'onBoarding-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'onBoarding-img'}
        style={Layout.fill}
        source={Images.onBoarding}
        resizeMode={mode}
      />
    </View>
  );
};

OnBoarding.defaultProps = {
  height: 80,
  width: 80,
  mode: 'contain',
};

export default OnBoarding;
