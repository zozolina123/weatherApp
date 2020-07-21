import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { IWeather } from '../interfaces/IWeatherContainer';
import {getFutureHours} from '../utils/dateTimeUtils';
import WeatherCard from './WeatherCard';


interface Props {
    locationName: String;
    localWeather: IWeather | null;
  };

const HourlyWeather = (props: Props) => {
    const hoursArray = getFutureHours();
    const hourlyWeather = props.localWeather?.hourly;
    const hourlyWeatherList = hourlyWeather?.slice(0,24).map((weather,index) => {
        return (
            <WeatherCard
            key={index}
            hour={hoursArray[index]}
                {...weather}
            />
        )
    });
    return (
        <View style={styles.hourlyWeather}>
            <ScrollView horizontal={true} scrollEnabled={true}>
                    {hourlyWeatherList}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    hourlyWeather: {
      maxWidth: 500,
      paddingTop: 20,
      paddingBottom: 20
    },
  });

export default HourlyWeather