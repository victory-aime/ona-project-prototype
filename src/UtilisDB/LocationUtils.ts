import Geocoder from 'react-native-geocoding'
export const getCityCoordinates = (city: string) => {
  Geocoder.from(city)
    .then(json => {
      var location = json.results[0].geometry.location
      console.log(location)
    })
    .catch(error => console.warn(error))
}
