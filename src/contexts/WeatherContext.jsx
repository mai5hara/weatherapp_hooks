import React, {useReducer, createContext, useEffect} from 'react';
import {weatherReducer} from '../reducers/weatherReducer';

export const WeatherContext = createContext();

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
                    name: data.name
                }
            })
        }).catch(error => {
            dispatch({
                type: 'SEARCH_WEATHER_FAILURE',
                payload: error
            })
        });
    },[]);

    const currentWeather = (cityName) => {
        dispatch({
            type: 'SEARCH_WEATHER_REQUEST'
        });

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: 'SEARCH_WEATHER_SUCCESS',
                payload: {
                    weather: data.weather[0]['main'],
                    temp: data.main.temp,
                    name: data.name
                }
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: 'SEARCH_WEATHER_FAILURE',
                payload: error
            })
        });
    }

    // const hourlyWeather = (cityName) => {
    //     dispatch({
    //         type: 'SEARCH_WEATHER_REQUEST'
    //     });

    //     fetch(`http://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         dispatch({
    //             type: 'SEARCH_HOURLYWEATHER_SUCCESS',
    //             payload: data
    //             // {
    //             //     weather: data.weather[0]['main'],
    //             //     temp: data.main.temp,
    //             //     name: data.name
    //             // }
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //         dispatch({
    //             type: 'SEARCH_WEATHER_FAILURE',
    //             payload: error
    //         })
    //     });
    
    // }


    return (
        <WeatherContext.Provider value={{showWeather, dispatch, currentWeather}}>
            {props.children}
        </WeatherContext.Provider>
    );
}