import React, { Fragment } from 'react';
import { fontSize } from '../styles/fontSize';
import {  Text, Image, View, StyleSheet } from 'react-native';
import { IWeather } from '../interfaces/IWeatherContainer';

interface Props {
    locationName: String;
    localWeather: IWeather;
  };


const CurrentWeather = (props: Props) => {
    return(
        <View style={styles.container}>
              <Text style={fontSize.large}>{props.locationName}</Text>
              <Image
                  style={{
                    width: 66,
                    height: 58,
                  }}
                  source={{
                    uri: 'http://openweathermap.org/img/wn/'+props.localWeather.current.weather[0].icon+'@2x.png',
                  }}
              />
              <Text style={fontSize.xlarge}>{props.localWeather.current.temp}&deg;</Text>
              <Text style={fontSize.mini}>{props.localWeather.daily[0].temp.max}&deg;/{props.localWeather.daily[0].temp.min}&deg;</Text>
              <Text style={[fontSize.small,{ textTransform: 'capitalize'}]}>{props.localWeather.current.weather[0].description}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)'
  }
})

export default CurrentWeather