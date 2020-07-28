import React, { useMemo } from 'react';
import * as Location from 'expo-location';
import {IWeather} from '../../interfaces/IWeatherContainer'
import WeatherView from '../../components/weather/WeatherView'
import { connect } from 'react-redux';
import {fetchWeather} from '../../redux/actions'
import { roundDegrees } from '../../utils/weatherUtils';
import { View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from "react-native-web-swiper";

interface State {
  locationName: String;
  localWeather: IWeather | null;
};

class WeatherContainer extends React.Component {
  keyValue: any;

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

componentDidMount() {
  this.keyValue = 1;
}

componentWillUpdate(nextProps) {
  console.log(this.props.state.weather?.weatherLocation, nextProps.state.weather?.weatherLocation)
  if (this.props.state.weather?.weatherLocation !== nextProps.state.weather?.weatherLocation) {
    console.log('key value increment')
    this.keyValue = this.keyValue + 1; //Swipper won't rerender unless key is changed
  }
}

  render(){
    const windowWidth = Dimensions.get('window').width;
    const nextTitle = windowWidth > 700 ? '>' : '';
    const prevTitle = windowWidth > 700 ? '<' : '';
    const WeatherViewList = Object.keys(this.props.state.weather.weatherLocation).map((key, value) => {
      return(<WeatherView location={this.props.state.weather.weatherLocation[key]} />)
    })

    return (
      <View style={{flex:1}}>
                  <Swiper
                    key={this.keyValue}
                    from={0}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle,
                      nextTitleStyle: { color: 'rgba(255,255,255,0.5)', fontSize: 60, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 60, fontWeight: '500' }}>
                            {prevTitle}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                      {WeatherViewList}
                  </Swiper>
              </View>
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
