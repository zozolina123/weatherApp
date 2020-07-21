import { IWeather } from "../interfaces/IWeatherContainer";

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