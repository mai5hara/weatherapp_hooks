import React from 'react';
import styled from "styled-components";

const HourlyWeather = ({timestr, tempCelsius, weather}) => {
    console.log(timestr, tempCelsius, weather)

    return (
        <div>
            <p>{timestr}</p>
            <p>{tempCelsius}</p>
            <p>{weather}</p>
        </div>
    )
}

export default HourlyWeather;