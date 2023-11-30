import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Partners = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'Partners-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'Partners-img'}
        style={Layout.fill}
        source={Images.partners}
        resizeMode={mode}
      />
    </View>
  );
};

Partners.defaultProps = {
  height: 80,
  width: 80,
  mode: 'contain',
};

export default Partners;
