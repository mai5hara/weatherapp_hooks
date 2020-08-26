import React, { useReducer, createContext, useEffect } from 'react';
import { weatherReducer } from '../reducers/weatherReducer';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
    const [showWeather, dispatch] = useReducer(weatherReducer, []);

    useEffect(() => {
        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(response => response.json()),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(response => response.json())
        ]).then(data => {
            const [data1, data2] = data;

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
                    dailyWeather: data2.list
                }
            })
        }).catch(error => {
            dispatch({
                type: 'SEARCH_WEATHER_FAILURE',
                payload: error
            })
        });
    }, []);

    const searchtWeather = (cityName) => {
        dispatch({
            type: 'SEARCH_WEATHER_REQUEST'
        });

        Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(response => response.json()),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(response => response.json())
        ])
            .then(data => {
                const [data1, data2] = data;

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
                        dailyWeather: data2.list
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: 'SEARCH_WEATHER_FAILURE',
                    payload: error
                })
            });
    }

    return (
        <WeatherContext.Provider value={{ showWeather, dispatch, searchtWeather }}>
            {props.children}
        </WeatherContext.Provider>
    );
}