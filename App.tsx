import React, { Component } from 'react';
import WeatherContainer from './src/containers/WeatherContainer/WeatherContainer';
import * as Inter from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { View, ImageBackground, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      Inter_100Thin: Inter.Inter_100Thin,
      Inter_200ExtraLight: Inter.Inter_200ExtraLight,
      Inter_300Light: Inter.Inter_300Light,
      Inter_400Regular: Inter.Inter_400Regular,
      Inter_500Medium: Inter.Inter_500Medium,
      Inter_600SemiBold: Inter.Inter_600SemiBold,
      Inter_700Bold: Inter.Inter_700Bold,
      Inter_800ExtraBold: Inter.Inter_800ExtraBold,
      Inter_900Black: Inter.Inter_900Black
    });
    this.setState({ fontLoaded: true });
  };

  render() {
    if(!this.state.fontLoaded) {
      <AppLoading>Loading Fonts</AppLoading>
    }
    return(
      <ImageBackground 
        style={styles.image}
        source={{uri: 'https://torange.biz/photofxnew/1/HD/mirror-macro-blurring-top-bottom-sky-clear-1049.jpg'}}
        >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingBottom: 40}}>
        <WeatherContainer/>
      </View>
      </ImageBackground>
    )
  }
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

export default App
