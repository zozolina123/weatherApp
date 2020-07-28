import { RECEIVE_WEATHER, REQUEST_WEATHER, TOGGLE_UNIT, ADD_LOCATION, REMOVE_LOCATION } from "../actionTypes";
import { converWeatherToUnit } from "../../utils/weatherUtils";


const initialState = {
    unit: 'C',
    weatherLocation: {
        current: {
            isLoading: false,
            isFetched: false,
            weather: null
        }
    }
}

export default function(state = initialState, action: any) {
    const {unit} = state;
    switch (action.type) {
        case REQUEST_WEATHER: 
        {
            return ({
                ...state,
                weatherLocation: {
                    ...state.weatherLocation,
                    [action.location]: {
                        ...state.weatherLocation[action.location],
                        isLoading: true,
                        isFetched: false,
                        weather: null
                    }
                }
            })
        }
        case RECEIVE_WEATHER:
        {
            if(unit == "F") {
                action.response.localWeather = converWeatherToUnit(action.response.localWeather, unit);
            }
            return ({
                ...state,
                weatherLocation: {
                    ...state.weatherLocation,
                    [action.location]: {
                        ...state.weatherLocation[action.location],
                        isLoading: false,
                        isFetched: true,
                        weather: action.response
                    }
                }
            })
        }
        case TOGGLE_UNIT: {
            const unit = state.unit == 'C' ? 'F' : 'C';

            Object.keys(state.weatherLocation).map((key, value) => { 
                state.weatherLocation[key].weather.localWeather = converWeatherToUnit(state.weatherLocation[key].weather.localWeather, unit);
                return state.weatherLocation;
            })

            return({
                ...state,
                unit
            })
        }
        case ADD_LOCATION: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.weatherLocation[action.location] = {
                isLoading: true,
                isFetched: false,
                placeId: action.placeId,
                weather: null
            }
            return newState;
        }
        case REMOVE_LOCATION: {
            const newState = JSON.parse(JSON.stringify(state));
            delete newState.weatherLocation[action.location.key];
            return newState;
        }
        default:
            return state;
    }
}