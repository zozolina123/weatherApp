import { REQUEST_WEATHER, RECEIVE_WEATHER, TOGGLE_UNIT, ADD_LOCATION, REMOVE_LOCATION } from "./actionTypes"
import { getLocationWeatherData, getCurrentLocationWeatherData } from "../utils/weatherAPI"

export const requestWeather = (location : String, placeId: String) => ({
    type: REQUEST_WEATHER,
    location,
    placeId
})

export const receiveWeather = (response: any, location: String) => ({
    type: RECEIVE_WEATHER,
    response,
    location
})

export const toggleUnit = () => ({
    type: TOGGLE_UNIT
})

export function fetchWeather (location: String, placeId: String) {
    return (dispatch:any) =>{
        dispatch(requestWeather(location));
        if(location == 'current'){
            return getCurrentLocationWeatherData().then( response => dispatch(receiveWeather(response, location)));
        }
        return getLocationWeatherData(placeId).then( response => dispatch(receiveWeather(response, location)));
    }
}

export const addLocation = (location: String, placeId: String) => ({
    type: ADD_LOCATION,
    location,
    placeId
})

export const removeLocation = (location: String) => ({
    type: REMOVE_LOCATION,
    location
})