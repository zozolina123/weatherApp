import { REQUEST_WEATHER, RECEIVE_WEATHER, TOGGLE_UNIT, ADD_LOCATION } from "./actionTypes"
import { getWeatherData } from "../utils/weatherAPI"

export const requestWeather = (location : any) => ({
    type: REQUEST_WEATHER,
    location
})

export const receiveWeather = (response: any) => ({
    type: RECEIVE_WEATHER,
    response
})

export const toggleUnit = () => ({
    type: TOGGLE_UNIT
})

export function fetchWeather (location: any) {
    return (dispatch:any) =>{
        dispatch(requestWeather(location))
        getWeatherData()
        .then( response => dispatch(receiveWeather(response)));
    }
}

export const addLocation = (location: String) => ({
    type: ADD_LOCATION,
    location
})