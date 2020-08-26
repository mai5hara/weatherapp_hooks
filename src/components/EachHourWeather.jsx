import React from 'react';
import styled from "styled-components";

const EachHourWeather = ({ hourlyWeather, showImage }) => {

    return (
        <ListWrap>
            <HourWeather>
                <List>{hourlyWeather.hourlyTime}</List>
                <Img>{showImage(hourlyWeather.hourlyWeather)}</Img>
                <Temp>{hourlyWeather.hourlyTemp}°</Temp>
            </HourWeather>
        </ListWrap>

    )
};

export default EachHourWeather;

const ListWrap = styled.div`
box-shadow: 0 1px 3px rgba(42,42,42,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 40px;
    margin-right: 0.8rem;
    height: 6.8rem;
    width: 4.8rem;]    
`;

const HourWeather = styled.ul`
    list-style: none;
`;

const List = styled.li`
    text-align: center;
    color: #707070;
    font-size: 0.9rem;
    margin: 0.2rem 0;
`;

const Img = styled(List)`

    width: 90%;
    height: auto;
    margin: 0 auto;
`;

const Temp = styled(List)`
    color: #656565;
`;