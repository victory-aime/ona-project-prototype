import { Dimensions } from 'react-native'

export const Dim = {
  getDimension(dim: number) {
    return (dim * Dimensions.get('window').height) / 844
  },
  getHorizontalDimension(dim: number) {
    return (dim * Dimensions.get('window').width) / 390
  },
}

export const addNavbarDimension = (dim: number) => {
  return dim + Dimensions.get('screen').height - Dimensions.get('window').height
}
