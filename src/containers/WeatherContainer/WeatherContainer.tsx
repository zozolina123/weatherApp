import React from 'react';
import * as Location from 'expo-location';
import {IWeather} from '../../interfaces/IWeatherContainer'
import WeatherView from '../../components/weather/WeatherView'
import { connect } from 'react-redux';
import {fetchWeather} from '../../redux/actions'
import { roundDegrees } from '../../utils/weatherUtils';

interface State {
  locationName: String;
  localWeather: IWeather | null;
};

class WeatherContainer extends React.Component {

constructor(props: any) {
  super(props);
  (async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    this.props.fetchWeather();
  })();
}

  render(){
    return (
      <WeatherView
        {...this.props.state.weather.weatherLocation.current.weather}
        unit={this.props.state.weather.unit}
      />
    );
}
}

const mapStateToProps = (state: any) => {
  if(state.weather.weatherLocation?.current?.weather?.localWeather)
    state.weather.weatherLocation.current.weather.localWeather =
      roundDegrees( state.weather.weatherLocation.current.weather.localWeather);
  return { state };
};

export default connect(mapStateToProps, { fetchWeather })(WeatherContainer)
