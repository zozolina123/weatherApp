const getWeatherForGeo = (lat: Number,lon: Number) => {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid=eafe7b63dac818943dddf0993adcc280')
    .then(response => response.json())
} 
    
export default getWeatherForGeo