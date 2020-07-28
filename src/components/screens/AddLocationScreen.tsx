import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';
import {addLocation, removeLocation} from '../../redux/actions'
import { fontSize } from '../../styles/fontSize';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDUhqTD2-hLXp1_0WfN4QHDddJ8c_nwMxA';

const Example = (props: any) => {
    const weatherLocationList = Object.keys(props.state.weather.weatherLocation).map(key => 
    key !== 'current' ? <Text style={fontSize.medium} onPress={() => props.removeLocation({key})}>{key}</Text>
    : null
    )
    console.log(weatherLocationList);
  return (
        <View style={styles.container}>
            <Text style={fontSize.large}>Add location</Text>
            <GooglePlacesAutocomplete
                query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en',
                types: '(cities)'
                }}
                onPress={(data, details = null) => 
                    {props.addLocation(data.description,data.place_id)}}
                onFail={error => console.error(error)}
                styles={{
                    container: {
                        zIndex: 10,
                        overflow: 'visible',
                      },
                      textInputContainer: {
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        height: 50,
                        overflow: 'visible',
                        backgroundColor: 'transparent'
                      },
                      textInput: {
                        fontSize: 22,
                        paddingBottom: 5,
                        flex: 1,
                        height: 40,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        borderRadius: 5,
                      },
                      listView: {
                        position: 'absolute',
                        top: 50,
                        left: 10,
                        right: 10,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        flex: 1,
                        elevation: 3,
                        zIndex: 10
                      },
                      description: {
                        color: '#1faadb'
                      },
                      predefinedPlacesDescription: {
                        color: '#1faadb'
                      }}}
                requestUrl={{
                url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                useOnPlatform: 'web',
                }}
            />
            <Text style={fontSize.large}>Remove location</Text>
            {weatherLocationList.length > 1 ? weatherLocationList : <Text>Add a location first</Text> }
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        maxWidth: 500,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8
      
    }
});

const mapStateToProps = (state: any) => {
    return { state };
  };

export default connect(mapStateToProps, {addLocation, removeLocation})(Example);