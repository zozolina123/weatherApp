export interface IDailyWeather {
    temp: {
      min: number,
      max: number
    }
    weather: IWeatherDescription[]
  }
  
interface IWeatherDescription {
    description: String
    icon: String
  }

export interface IHourlyWeather {
  temp: number,
  weather: IWeatherDescription[],
  hour?: number
}
  
 export interface IWeather {
    current: {
      temp: number
      weather: IWeatherDescription[],
      humidity: number,
      uvi: number,
      feels_like: number,
      wind_speed: number,
      wind_deg: number
    },
    daily: IDailyWeather[]
    hourly: IHourlyWeather[]
  }