import React from 'react';
import styled from "styled-components";

const Test = ({dailyWeather}) => {
    const weather = dailyWeather.weather[0]['main'];
    const temp = dailyWeather.main['temp'];
    const tempCelsius = Math.round(temp - 273.15);
    const sec = dailyWeather.dt;
    const date = new Date(sec * 1000);
    const timestr = date.toLocaleTimeString();


    return (
        <HourlyWrap>
            <p>{timestr}</p>
            <p>{weather}</p>
            <p>{tempCelsius}</p>
        </HourlyWrap>
    )
}

export default Test;

const HourlyWrap = styled.div`

`;