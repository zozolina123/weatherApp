import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';

const WeatherScreen = () => {
    return (
        <ImageBackground 
        style={styles.image}
        source={{uri: 'https://torange.biz/photofxnew/1/HD/mirror-macro-blurring-top-bottom-sky-clear-1049.jpg'}}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <WeatherContainer/>
          </View>
        </ImageBackground>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });

  export default WeatherScreen