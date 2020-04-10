import React, {useContext} from 'react';
// import Weather from './Weather';
import {WeatherContext} from './contexts/WeatherContext';
// import { Consumer } from './contexts/WeatherContext';

const ShowWeather = () => {
    const {showWeather} = useContext(WeatherContext);
    console.log({showWeather})
    console.log(showWeather.temp)
    
    return(
        <div>
            {showWeather.map(showWeather => {
                return (
                    <div key={showWeather.id}>
                        <p>{showWeather.weather}</p>
                        <p>{showWeather.temp}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ShowWeather;