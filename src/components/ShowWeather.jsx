import React, {useContext} from 'react';
import {WeatherContext} from '../contexts/WeatherContext';
import styled from "styled-components";
import InputCity from './InputCity';
import BackImage from '../imgs/bg_img.jpg';
import uuid from 'uuid/v1';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';
import Clouds from '../imgs/cloud.svg';
import Rain from '../imgs/rain.svg';
import Clear from '../imgs/sunny.svg';
import Snow from '../imgs/snow.svg';
import Undefind from '../imgs/undefind.svg';

const ShowWeather = () => {
    let {showWeather} = useContext(WeatherContext);
    // setDailyWeather(showWeather.dailyWeather)
    // console.log(dailyWeather)
    console.log(showWeather)

    const showImage = (weather) => {
        switch (weather) {
            case 'Clouds':
                return <img width="50%" height="50%" src={Clouds} alt="clouds"/>;
            case 'Rain':
                return <img width="50%" height="50%" src={Rain} alt="rain" />;
            case 'Clear':
                return <img width="50%" height="50%" src={Clear} alt="sunny" />;
            case 'Snow':
                return <img width="50%" height="50%" src={Snow} alt="snow" />;
            default:
                return <img width="50%" height="50%" src={Undefind} alt="undefind" />;
        }
    }

    const tempCelsius = Math.round(showWeather.temp) + '℃';
    const tempFahrenheit = Math.round((showWeather.temp) * 1.8000 + 32.00) + '℉';
    const dailyWeathers = showWeather.dailyWeather
    // const currentWeathers = showWeather.currentWeather

    return(
        <Container>
            {/* <Img src={BackImage}/> */}
            <InputCity />
            <WrapLeft>
                {/* <Title>WEATHER MAP</Title> */}
                { showWeather.loading && !showWeather.error ? (
                    <p>loading...</p>
                ) : showWeather.error ? (
                    <p>Try again..</p>
                ) : (
                    
                    // currentWeathers && currentWeathers.map(currentWeather => (
                        // <CurrentWeather currentWeathers={currentWeathers}/>
                    // ))
                    
                    <div>
                        <City>{showWeather.name}</City>
                        <div>{showImage(showWeather.weather)}</div>
                        <OutputWeather>
                            <Detail>{showWeather.weather}</Detail>
                            <Detail>{tempCelsius}</Detail>
                            <Detail>{tempFahrenheit}</Detail>
                            <p>{showWeather.tempMax}</p>
                            <p>{showWeather.tempMin}</p>
                            <p>{showWeather.humidity}</p>
                            <p>{showWeather.wind}</p>
                        </OutputWeather>
                    </div>
                )}
            </WrapLeft>
            <WrapRight>
                {dailyWeathers && dailyWeathers.map(dailyWeather => (
                    <DailyWeather dailyWeather={dailyWeather} key={uuid}/>
                ))}
            </WrapRight>
        </Container>
    );
};

const Container = styled.div`
    background-color: #FFF3E6;
    width: 100%;
    height: 100vh;
    display: flex:
`;

const WrapLeft = styled.div`
    width: 50%;
    text-align: center;
`;

const WrapRight = styled.div`
    width: 50%;

`;

const Title = styled.h1`
    font-size: 2rem;
`;

const City = styled.p`
    font-size: 1.3rem;
    text-transform: uppercase;
    background-color: rgb(255, 128, 25);
    border-radius: 30px;
    width: 60%;
    color: #fff;
    margin: 1rem auto;
    padding: 0.4rem 0.7rem;
    font-weight: 600;
`;

const Img = styled.img`
    width: auto;
    height: 100vh;
`;

const OutputWeather = styled.div`
    margin-top: 0.5rem;
`;

const Detail = styled.p`
    font-size: 1.3rem;
    border-bottom: 1px solid #2c2c2c;
    width: 40%;
    padding-bottom: 0.3rem;
    margin: 0 auto 0.5rem auto;
`;

export default ShowWeather;