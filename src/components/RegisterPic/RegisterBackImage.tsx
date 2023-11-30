import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const RegisterBackImage = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'RegisterBackImage-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'RegisterBackImage-img'}
        style={Layout.fill}
        source={Images.RegisterBackImage}
        resizeMode={mode}
      />
    </View>
  );
};

RegisterBackImage.defaultProps = {
  height: 80,
  width: 80,
  mode: 'contain',
};

export default RegisterBackImage;
