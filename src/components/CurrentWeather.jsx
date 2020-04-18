import React from 'react';

const CurrentWeather = ({currentWeathers}) => {
    console.log(currentWeathers)
    // const tempCelsius = Math.round(currentWeathers.main['temp']) + '℃';
    // const tempFahrenheit = Math.round((currentWeathers.main.temp) * 1.8000 + 32.00) + '℉';

    // console.log(tempCelsius)
    
    return (
        <div>
            {/* <p>{temp}</p>
            <p>{weather}</p> */}
        </div>
    )
}


export default CurrentWeather;