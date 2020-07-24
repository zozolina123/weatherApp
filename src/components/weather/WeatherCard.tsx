import React from 'react';
import { IHourlyWeather } from '../../interfaces/IWeatherContainer';
import { TouchableHighlight, Text, Image, View, StyleSheet } from 'react-native';
import { fontSize } from '../../styles/fontSize';

const WeatherCard = (props: IHourlyWeather) => {
    return(
    <TouchableHighlight>
        <View style={styles.weatherCard}>
            <Text style={fontSize.mini} >{props.hour}:00</Text>
            <Image
                    style={{
                        width: 33,
                        height: 29,
                        }}
                        source={{
                        uri: 'http://openweathermap.org/img/wn/'+props.weather[0].icon+'@2x.png',
                        }}
                />
            <Text style={fontSize.mini}>{props.temp}&deg;{props.unit}</Text>
        </View>
    </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    weatherCard: {
      flex: 1,
      alignItems: 'center',
      margin: 10
    },
  });

export default WeatherCard;