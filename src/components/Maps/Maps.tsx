import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Maps = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'Maps-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'Maps-img'}
        style={Layout.fill}
        source={Images.maps}
        resizeMode={mode}
      />
    </View>
  );
};

Maps.defaultProps = {
  height: 10,
  width: 10,
  mode: 'center',
};

export default Maps;
