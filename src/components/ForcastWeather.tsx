import React, { Fragment } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { IWeather, IDailyWeather } from '../interfaces/IWeatherContainer';
import WeatherCard from './WeatherCard';
import { getFutureWeekDayNames } from '../utils/dateTimeUtils';
import { fontSize } from '../styles/fontSize';


interface Props {
    dailyWeather: IDailyWeather[];
  };

const DailyWeather = (props: Props) => {
    const futureWeekDayNames = getFutureWeekDayNames();
    const dailyWeatherList = props.dailyWeather.map((dailyWeather, index) => {
        return (
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={fontSize.mini}>{futureWeekDayNames[index]}</Text>
            <Image
                    style={{
                        width: 66,
                        height: 58,
                        }}
                        source={{
                        uri: 'http://openweathermap.org/img/wn/'+dailyWeather.weather[0].icon+'@2x.png',
                        }}
                />
            <Text style={fontSize.mini}>{dailyWeather.temp.max}/{dailyWeather.temp.min}</Text>
        </View>
        )
    })
    return(
        <View>
            {dailyWeatherList}
        </View>
    )
}


const styles = StyleSheet.create({
    hourlyWeather: {
      maxWidth: 500
    },
  });

export default DailyWeather