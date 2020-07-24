import { RECEIVE_WEATHER, REQUEST_WEATHER, TOGGLE_UNIT } from "../actionTypes";
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
    const {unit} = action;
    switch (action.type) {
        case REQUEST_WEATHER: 
        {
            return ({
                ...state,
                weatherLocation: {
                    ...state.weatherLocation,
                    current: {
                        isLoading: true,
                        isFetched: false,
                        weather: null
                    }
                }
            })
        }
        case RECEIVE_WEATHER:
        {
            return ({
                ...state,
                weatherLocation: {
                    ...state.weatherLocation,
                    current: {
                        isLoading: false,
                        isFetched: true,
                        weather: action.response
                    }
                }
            })
        }
        case TOGGLE_UNIT: {
            const unit = state.unit == 'C' ? 'F' : 'C';
            state.weatherLocation.current.weather.localWeather = 
                converWeatherToUnit(state.weatherLocation.current.weather.localWeather, unit);
            return({
                ...state,
                unit
            })
        }
        default:
            return state;
    }
}