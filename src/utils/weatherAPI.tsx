import React from 'react';
import {reverseGeocoding, getCoordsForPlaceID} from './geocodingAPI';
import * as Location from 'expo-location';

export const getWeatherForGeo = (lat: Number,lon: Number) => {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid=eafe7b63dac818943dddf0993adcc280')
    .then(response => response.json())
} 

export const getCurrentLocationWeatherData = async () => {
    let location = await (await Location.getCurrentPositionAsync({}));
    let localWeather = await getWeatherForGeo(location.coords.latitude, location.coords.longitude);
    let geoLocation = await reverseGeocoding(location.coords.latitude, location.coords.longitude);
    const locationName = geoLocation.results[0].formatted_address;
    return {
        locationName,
        localWeather
    }
}

export const getLocationWeatherData = async (placeId: String) => {
    const geocodingData = await getCoordsForPlaceID(placeId);
    const localWeather = await getWeatherForGeo(geocodingData.results[0].geometry.location.lat, geocodingData.results[0].geometry.location.lng);
    return {localWeather};
}