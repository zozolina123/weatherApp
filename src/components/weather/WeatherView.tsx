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
import { fetchWeather } from '../../redux/actions';
import { connect } from 'react-redux';
  
interface Props {
    locationName: String;
    localWeather: IWeather;
  };

class WeatherView extends React.Component {

  roundDegrees(nextProps) {
    if(nextProps.state.weatherLocation[this.props.location]?.weather?.localWeather){
      nextProps.state.weatherLocation[this.props.location].weather.localWeather =
        roundDegrees( nextProps.state.weatherLocation[this.props.location].weather.localWeather);
    }
  }

  constructor(props: any) {
    super(props);
    if(!this.props.state.weatherLocation[this.props.location].isFetched) {
      this.props.fetchWeather(this.props.location, this.props.placeId);
    }
  }

  componentWillUpdate(nextProps) {
    this.roundDegrees(nextProps)
  }

  render(){
    return (
      <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              {this.props.state.weatherLocation[this.props.location].weather != null  ? 
              <View>
                <CurrentWeather
                  location={this.props.location}
                  {...this.props.state.weatherLocation[this.props.location].weather}
                  />
                <HourlyWeather
                  {...this.props.state.weatherLocation[this.props.location].weather}
                  />
                <DailyWeather
                    dailyWeather={this.props.state.weatherLocation[this.props.location].weather.localWeather.daily}
                    unit = {this.props.state.unit}
                    />
                <ComfortLevel
                    humidity = {this.props.state.weatherLocation[this.props.location].weather.localWeather.current.humidity}
                    feelsLike = {this.props.state.weatherLocation[this.props.location].weather.localWeather.current.feels_like}
                    uvIndex = {this.props.state.weatherLocation[this.props.location].weather.localWeather.current.uvi}
                    unit = {this.props.state.unit}
                    />
                <WindInfo
                  windDirection={calculateWindDirection(this.props.state.weatherLocation[this.props.location].weather.localWeather.current.wind_deg)}
                  windSpeed={this.props.state.weatherLocation[this.props.location].weather.localWeather.current.wind_speed}
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
    return { state: state.weather };
  };

export default connect(mapStateToProps, {fetchWeather})(WeatherView)
  
