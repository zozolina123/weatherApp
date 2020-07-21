import React from 'react';
import * as Location from 'expo-location';
import getWeatherForGeo from '../../utils/weatherAPI';
import reverseGeocoding from '../../utils/reverseGeocoding';
import {IWeather} from '../../interfaces/IWeatherContainer'
import WeatherView from '../../components/WeatherView'
import {roundDegrees} from '../../utils/weatherUtils';

interface State {
  locationName: String;
  localWeather: IWeather | null;
};

class WeatherContainer extends React.Component {

  state: State = {
    locationName: '',
    localWeather: null
  }

constructor(props: Readonly<{}>) {
  super(props);
  (async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }

    let location = await (await Location.getCurrentPositionAsync({}));
    let localWeather = await getWeatherForGeo(location.coords.latitude, location.coords.longitude);
    let geoLocation = await reverseGeocoding(location.coords.latitude, location.coords.longitude);
    const locationName = geoLocation.results[0].formatted_address;
    this.setState({
      locationName,
      localWeather: roundDegrees(localWeather)
    });
  })();
}

  render(){
    return (
      <WeatherView
        {...this.state}
      />
    );
}
}
export default WeatherContainer
