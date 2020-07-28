import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';
import {IWeather} from '../../interfaces/IWeatherContainer'
import CurrentWeather from "./CurrentWeather"
import HourlyWeather from './HourlyWeather'
import DailyWeather from './ForcastWeather';
import ComfortLevel from './ComfortLevel';
import WindInfo from './WindInfo';
import { calculateWindDirection, roundDegrees } from '../../utils/weatherUtils';
import { connect } from 'react-redux';
  
interface Props {
    locationName: String;
    localWeather: IWeather;
  };

class WeatherView extends React.Component {

  render(){
    return (
      <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              {this.props.state.weatherLocation.current.weather != null  ? 
              <View>
                <CurrentWeather
                  {...this.props.state.weatherLocation.current.weather}
                  />
                <HourlyWeather
                  {...this.props.state.weatherLocation.current.weather}
                  />
                <DailyWeather
                    dailyWeather={this.props.state.weatherLocation.current.weather.localWeather.daily}
                    unit = {this.props.state.unit}
                    />
                <ComfortLevel
                    humidity = {this.props.state.weatherLocation.current.weather.localWeather.current.humidity}
                    feelsLike = {this.props.state.weatherLocation.current.weather.localWeather.current.feels_like}
                    uvIndex = {this.props.state.weatherLocation.current.weather.localWeather.current.uvi}
                    unit = {this.props.state.unit}
                    />
                <WindInfo
                  windDirection={calculateWindDirection(this.props.state.weatherLocation.current.weather.localWeather.current.wind_deg)}
                  windSpeed={this.props.state.weatherLocation.current.weather.localWeather.current.wind_speed}
                  />
              </View>
                  :
              <Fragment>
                  <Text>Loading....</Text>
                  <ActivityIndicator size="large" />
              </Fragment>
                }
              <StatusBar style="auto" />
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView : {
    flexGrow : 1, 
    justifyContent : 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 50
  },
  mainContainer: {
    zIndex:100,
    maxWidth: 500,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  }
  });

  const mapStateToProps = (state: any) => {
    if(state.weather.weatherLocation?.current?.weather?.localWeather)
      state.weather.weatherLocation.current.weather.localWeather =
        roundDegrees( state.weather.weatherLocation.current.weather.localWeather);
    return { state: state.weather };
  };

export default connect(mapStateToProps, null)(WeatherView)
  
