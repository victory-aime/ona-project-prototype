import { Linking } from 'react-native'

export const openLink = (url: string) => async (): Promise<any> => {
  const isAvailable = await Linking.canOpenURL(url)
  if (isAvailable) {
    return Linking.openURL(url)
  } else {
    const error = new Error(`Cannot open link with URL: ${url}`)
    console.log(error)
  }
}
