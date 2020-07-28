import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';
import {addLocation} from '../../redux/actions'

const GOOGLE_PLACES_API_KEY = 'AIzaSyDUhqTD2-hLXp1_0WfN4QHDddJ8c_nwMxA';

const Example = (props: any) => {
  return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en',
                types: '(cities)'
                }}
                onPress={(data, details = null) => props.addLocation(data)}
                onFail={error => console.error(error)}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                    }}
                requestUrl={{
                url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                useOnPlatform: 'web',
                }} // this in only required for use on the web. See https://git.io/JflFv more for details.
            />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: 500,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8
      
    }
});

export default connect(null, {addLocation})(Example);