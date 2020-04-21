import React from 'react';
import styled from "styled-components";

const EachDayWeather = ({ weekday, showImage }) => {

    return (
        <DayWeather>
            <Day>{weekday.date}</Day>
            <Weather>{showImage(weekday.weather)}</Weather>
            <Temp>{weekday.temp_max}° / {weekday.temp_min}°</Temp>
        </DayWeather>
    );
};

export default EachDayWeather;

const DayWeather = styled.ul`
    width: 100%;
    display: table;
    margin-top: 1rem;
`;

const Day = styled.li`
    text-align: left;
    display:table-cell;
    color: #707070;
    font-size: 1.2rem;
    width:46%;
    vertical-align: middle;
`;

const Weather = styled(Day)`
    text-align: center;
    width:8%;
    height:auto;
`;

const Temp = styled(Day)`
    text-align: right;
    color: #8D8D8D;
`;