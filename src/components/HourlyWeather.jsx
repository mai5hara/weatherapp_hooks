import React, {useState, useEffect} from 'react';
import { device } from '../components/layout/device';
import EachHourWeather from './EachHourWeather';
import styled from "styled-components";

const HourlyWeather = ({dailyWeather, showImage}) => {
    console.log(dailyWeather)
    const [hourlyWeather, setHourlyWeather] = useState([]);

    useEffect(() => {
        let iteratedDate;

        if (dailyWeather) {
            iteratedDate = new Date(
                Object.entries(dailyWeather)[0][1].dt * 1000
            ).toLocaleString("ex-US", {
                weekday: "long"
            });
        }
        console.log(iteratedDate)

        let time = "";
        let temp = "";
        let weather = "";
        let hourlyArr = [];

        dailyWeather && dailyWeather.forEach((entry) => {
            const dateString = new Date(entry.dt * 1000).toLocaleString(
                "en-US", {weekday: "long"}
            );

            if (iteratedDate === dateString){
                const date = new Date(entry.dt * 1000).toLocaleString(
                    "en-US", {hour: "numeric", hour12: true});
                time = date;
                temp = Math.round(entry.main.temp - 273.15);
                weather = entry.weather[0].main;

                hourlyArr.push({
                    hourlyTime: time,
                    hourlyTemp: temp,
                    hourlyWeather: weather
                });
            }
        })
    setHourlyWeather(hourlyArr);
    },[dailyWeather]);

    return (
        <HourWeather>
            { hourlyWeather && hourlyWeather.map((entry, uuid) => (
                <EachHourWeather key={uuid} hourlyWeather={entry} showImage={showImage}/>
            ))}
        </HourWeather>
    )
}

export default HourlyWeather;

const HourWeather = styled.ul`
    margin-botto: 0.5rem;
    display: flex;

    @media ${device.laptop} {
        margin: 1rem 0 3rem 0;
    }
`;