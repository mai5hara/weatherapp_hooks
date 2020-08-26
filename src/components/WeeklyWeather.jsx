import React, { useState, useEffect } from 'react';
import EachDayWeather from './EachDayWeather';
import { device } from '../components/layout/device';
import styled from "styled-components";

const WeeklyWeather = ({ dailyWeather, showImage }) => {
    const [fiveDayForecast, setFiveDayForecast] = useState([]);

    useEffect(() => {
        let iteratedDate;

        if (dailyWeather) {
            iteratedDate = new Date(
                Object.entries(dailyWeather)[0][1].dt * 1000
            ).toLocaleString("en-US", {
                weekday: "long",
            });
        }

        let tempMin = [];
        let tempMax = [];
        let weatherArr = [];
        let forecastArr = [];

        const getHighestFrequency = (arr) => {
            return arr
                .sort((a, b) => arr.filter((v) => v === a)
                    .length - arr.filter((v) => v === b).length).pop();
        };

        dailyWeather && dailyWeather.forEach((entry) => {
            const dateString = new Date(entry.dt * 1000).toLocaleString("en-US", {
                weekday: "long",
            });

            if (iteratedDate !== dateString) {
                forecastArr.push({
                    date: dateString,
                    temp_min: Math.min(...tempMin),
                    temp_max: Math.max(...tempMax),
                    weather: getHighestFrequency(weatherArr),
                });

                tempMin = [];
                tempMax = [];
                weatherArr = [];
                iteratedDate = dateString;
            }

            tempMin.push(Math.round(entry.main.temp_min - 273.15));
            tempMax.push(Math.round(entry.main.temp_max - 273.15));
            weatherArr.push(entry.weather[0].main);
        })

        setFiveDayForecast(forecastArr);
    }, [dailyWeather]);


    return (
        <DayWeather>
            {fiveDayForecast && fiveDayForecast.map((entry, uuid) => (
                <EachDayWeather weekday={entry} key={uuid} showImage={showImage} />
            ))}
        </DayWeather>
    );
};

export default WeeklyWeather;

const DayWeather = styled.div`
    margin-top: 2rem;
    align-items: bottom;

    @media ${device.laptop} {
        margin: 1rem 5rem 1rem 0;
    }
`;