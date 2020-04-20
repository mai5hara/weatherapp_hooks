import React from 'react';
import styled from "styled-components";

const CurrentWeather = ({currentWeather, showImage}) => {

    const tempCelsius = Math.round(currentWeather.temp);
    // const tempFahrenheit = Math.round((currentWeather.temp) * 1.8000 + 32.00) + '℉';
    const tempMax = Math.round(currentWeather.tempMax);
    const tempMin = Math.round(currentWeather.tempMin);

    return (
        <div>
            <City>{currentWeather.name}</City>
            <Weather>{currentWeather.weather}</Weather>
            <div>{showImage(currentWeather.weather)}</div>
            <OutputWeather>
                <TempWrap>
                    <Temp>{tempCelsius}°</Temp>
                    {/* <Detail>{tempFahrenheit}</Detail> */}
                    <TempMaxMin>
                        <TempMaxMinp>{tempMax}°</TempMaxMinp>
                        <TempMaxMinp>{tempMin}°</TempMaxMinp>
                    </TempMaxMin>
                </TempWrap>
                <DetailWrap>
                    <Dtail>
                        <DtailNum>{currentWeather.wind}km/h</DtailNum>
                        <Detailp>Wind</Detailp>
                    </Dtail>
                    <Border></Border>
                    <Dtail>
                        <DtailNum>{currentWeather.humidity}%</DtailNum>
                        <Detailp>Humidity</Detailp>
                    </Dtail>
                </DetailWrap>
            </OutputWeather>
        </div>
    )
}

export default CurrentWeather;


const City = styled.p`
    font-size: 1.7rem;
    text-transform: uppercase;
    width: 60%;
    color: #636363;
    margin: 1rem auto 0rem auto;
    padding: 0.4rem 0.7rem;
    font-weight: 600;
`;

const Weather = styled.p`
    font-size: 1.2rem;
    color: #858585;
    margin: 0 auto 2.5rem auto;
`;

const OutputWeather = styled.div`
    margin-top: 0.5rem;
`;

const Temp = styled.p`
    font-size: 4rem;
    color: #656565;
`;

const TempWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TempMaxMin = styled.div`
    margin-left: 1rem;
`;

const TempMaxMinp = styled.p`
    font-size: 1.5rem;
    margin: 0.2rem 0;
    color: #8D8D8D;
`;

const DetailWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dtail = styled.div`
    margin: 1.5rem 
`;

const Border = styled.div`
    margin-top: 1.5rem;
    height: 3.4rem;
    width: 0.1rem;
    background-color: #BCBCBC;
`;

const DtailNum = styled.p`
    font-size: 1.5rem;
    color: #656565;
`;

const Detailp = styled.p`
    margin-top: 0.2rem;
    font-size: 0.9rem;
    color: #8D8D8D;
`;