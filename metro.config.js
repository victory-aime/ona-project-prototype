/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config')
const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts

module.exports = (async () => {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig(undefined)

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      sourceExts:
        process.env.MY_APP_MODE === 'mocked'
          ? [
              'mock.js',
              'mock.ts',
              'mock.json',
              'mock.tsx',
              ...defaultSourceExts,
              'svg',
            ]
          : [...defaultSourceExts, 'svg'],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
    },
  }
})()