import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';
import {IWeather} from '../interfaces/IWeatherContainer'
import CurrentWeather from "./CurrentWeather"
import HourlyWeather from './HourlyWeather'
import DailyWeather from './ForcastWeather';
import ComfortLevel from './ComfortLevel';
import WindInfo from './WindInfo';
import { calculateWindDirection } from '../utils/weatherUtils';
  
interface Props {
    locationName: String;
    localWeather: IWeather | null;
  };

const WeatherView = (props: Props) => {
    return (
          <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              {props.localWeather != null  ? 
              <View>
                <CurrentWeather
                  {...props}
                />
                <HourlyWeather
                  {...props}
                />
                <DailyWeather
                    dailyWeather={props.localWeather.daily}
                />
                <ComfortLevel
                    humidity = {props.localWeather.current.humidity}
                    feelsLike = {props.localWeather.current.feels_like}
                    uvIndex = {props.localWeather.current.uvi}
                />
                <WindInfo
                  windDirection={calculateWindDirection(props.localWeather.current.wind_deg)}
                  windSpeed={props.localWeather.current.wind_speed}
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

const styles = StyleSheet.create({
  scrollView : {
    flexGrow : 1, 
    justifyContent : 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 50
  },
  mainContainer: {
    flex: 1,
  }
  });

export default WeatherView
  
