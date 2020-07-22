import React, { Component } from 'react';
import * as Inter from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import 'react-native-gesture-handler';
import AppNavigation from './src/components/navigation/AppNavigation';
import {Provider} from 'react-redux';

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
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    )
  }
}

export default App
