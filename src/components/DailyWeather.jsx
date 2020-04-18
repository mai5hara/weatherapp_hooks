import React from 'react';

const DailyWeather = ({dailyWeather}) => {
    console.log(dailyWeather)
    const temp = dailyWeather.main['temp'];
    const tempCelsius = Math.round(temp - 273.15);
    const tempFahrenheit = Math.round((temp - 273.15) * 9/5 + 32);
    console.log(tempCelsius)
    console.log(tempFahrenheit)


    const tempMax = dailyWeather.main['temp_max'];
    const tempMaxCelsius = Math.round(tempMax - 273.15);
    const tempMaxFahrenheit = Math.round((tempMax - 273.15) * 9/5 + 32);

    const tempMin = dailyWeather.main['temp_min'];
    const tempMinCelsius = Math.round(tempMin - 273.15);
    const tempMinFahrenheit = Math.round((tempMin - 273.15) * 9/5 + 32);

    const weather = dailyWeather.weather[0]['main'];

    const sec = dailyWeather.dt;
    const date = new Date(sec * 1000);
    const dayOfWeek = date.getDay();
    const dayOfWeekStr = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][dayOfWeek];
    console.log(dayOfWeekStr)
    const timestr = date.toLocaleTimeString();

    console.log('date ' + date, 'time ' + timestr)


    return (
        <div>
            <p>{dayOfWeekStr}</p>
        </div>
    )
}


export default DailyWeather;