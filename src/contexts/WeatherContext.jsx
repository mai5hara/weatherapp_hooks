import React, {useReducer, createContext, useEffect} from 'react';
import {weatherReducer} from '../reducers/weatherReducer';

export const WeatherContext = createContext();
// export const DailyWeather = createContext();

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const WeatherProvider = (props) => {
    console.log(props)
    const [showWeather, dispatch] = useReducer(weatherReducer,[]);
    useEffect(() => {
        fetch(WEATHER_URL)
        .then(response => response.json())
        .then(data => {
            
            dispatch({
                type: 'SEARCH_WEATHER_SUCCESS',
                payload: {
                    weather: data.weather[0]['main'],
                    temp: data.main.temp,
                    name: data.name,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                }
            })
        }).catch(error => {
            dispatch({
                type: 'SEARCH_WEATHER_FAILURE',
                payload: error
            })
        });
    },[]);

    const searchtWeather = (cityName) => {
        dispatch({
            type: 'SEARCH_WEATHER_REQUEST'
        });

        Promise.all([
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(response => response.json()),
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(response => response.json())
        ])
        .then(data => {
            const data1 = data[0]
            const data2 = data[1]
            console.log(data1)
            dispatch({
                type: 'SEARCH_WEATHER_SUCCESS',
                payload: {
                    weather: data1.weather[0]['main'],
                    temp: data1.main.temp,
                    name: data1.name,
                    tempMax: data1.main.temp_max,
                    tempMin: data1.main.temp_min,
                    humidity: data1.main.humidity,
                    wind: data1.wind.speed,
                    // currentWeather: data1,
                    dailyWeather: data2.list
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: 'SEARCH_WEATHER_FAILURE',
                payload: error
            })
        });
    }

    return (
        <WeatherContext.Provider value={{showWeather, dispatch, searchtWeather}}>
            {props.children}
        </WeatherContext.Provider>
    );
}