import { IWeather } from "../interfaces/IWeatherContainer";
import { Unit } from '../interfaces/IUnit'

export const calculateWindDirection = (degrees: Number) => {
    if(degrees>340 || degrees<=20) return 'N';
    if(degrees>20 && degrees<=60) return 'NE';
    if(degrees>60 && degrees<=110) return 'E';
    if(degrees>110 && degrees<=150) return 'SE';
    if(degrees>150 && degrees<=200) return 'S';
    if(degrees>200 && degrees<=240) return 'SW';
    if(degrees>240 && degrees<=290) return 'W';
    if(degrees>290 && degrees<=340) return 'NW'
}

export const roundDegrees = (weather: IWeather) => {
    weather.current.feels_like = Math.round(weather.current.feels_like)
    weather.current.temp = Math.round(weather.current.temp)
    weather.daily.map(dailyWeather => {
        dailyWeather.temp.max = Math.round(dailyWeather.temp.max);
        dailyWeather.temp.min = Math.round(dailyWeather.temp.min);
        return dailyWeather;
    })

    weather.hourly.map(hourlyWeather => {
        hourlyWeather.temp = Math.round(hourlyWeather.temp);
        return hourlyWeather;
    })
    return weather;
}

export const convertUnit = (temperature: number, unit: Unit) => {
    if(unit == 'F') {
        const temperatureFarenhait = temperature * 1.8 + 32;
        return temperatureFarenhait;
    }
    const temperatureCelsius = (temperature - 32) / 1.8;
    return temperatureCelsius
}

export const converWeatherToUnit = (weather: IWeather, unit: Unit) => {
    weather.current.feels_like = convertUnit(weather.current.feels_like, unit)
    weather.current.temp = convertUnit(weather.current.temp, unit)
    weather.daily.map(dailyWeather => {
        dailyWeather.temp.max = convertUnit(dailyWeather.temp.max, unit);
        dailyWeather.temp.min = convertUnit(dailyWeather.temp.min, unit);
        return dailyWeather;
    })

    weather.hourly.map(hourlyWeather => {
        hourlyWeather.temp = convertUnit(hourlyWeather.temp, unit);
        return hourlyWeather;
    })
    return weather;
}