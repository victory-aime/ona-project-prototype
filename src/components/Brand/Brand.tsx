import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'brand-img'}
        style={Layout.fullSize}
        source={Images.logo}
        resizeMode={mode}
      />
    </View>
  );
};

Brand.defaultProps = {
  height: 300,
  width: 270,
  mode: 'contain',
};

export default Brand;
