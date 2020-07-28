import React, { useMemo } from 'react';
import * as Location from 'expo-location';
import {IWeather} from '../../interfaces/IWeatherContainer'
import WeatherView from '../../components/weather/WeatherView'
import { connect } from 'react-redux';
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
  })();
}

componentDidMount() {
  this.keyValue = 1;
}

componentWillUpdate(nextProps) {
  if(this.props.state.weather?.weatherLocation && nextProps.state.weather?.weatherLocation){
    if (Object.keys(this.props.state.weather.weatherLocation).length 
      !== Object.keys(nextProps.state.weather.weatherLocation).length) {
      this.keyValue = this.keyValue + 1; //Swipper won't rerender unless key is changed
    }
  }
  
}

  render(){
    const windowWidth = Dimensions.get('window').width;
    const nextTitle = windowWidth > 700 ? '>' : '';
    const prevTitle = windowWidth > 700 ? '<' : '';
    const WeatherViewList = Object.keys(this.props.state.weather.weatherLocation).map((key, value) => {
      if(this.props.state.weather.weatherLocation[key].hasOwnProperty('placeId')) {
        return(<WeatherView {...this.props} location={key} placeId={this.props.state.weather.weatherLocation[key].placeId}  />)
      }
      return(<WeatherView {...this.props} location={key}  />)
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
  return { state };
};

export default connect(mapStateToProps)(WeatherContainer)
