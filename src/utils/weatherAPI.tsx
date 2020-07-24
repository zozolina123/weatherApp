import React from 'react';
import reverseGeocoding from './reverseGeocoding';
import * as Location from 'expo-location';

export const getWeatherForGeo = (lat: Number,lon: Number) => {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid=eafe7b63dac818943dddf0993adcc280')
    .then(response => response.json())
} 

export const getWeatherData = async () => {
    let location = await (await Location.getCurrentPositionAsync({}));
    let localWeather = await getWeatherForGeo(location.coords.latitude, location.coords.longitude);
    let geoLocation = await reverseGeocoding(location.coords.latitude, location.coords.longitude);
    const locationName = geoLocation.results[0].formatted_address;
    return {
        locationName,
        localWeather
    }
}