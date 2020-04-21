import React, {useContext} from 'react';
import {WeatherContext} from '../contexts/WeatherContext';
import { device } from '../components/layout/device';
import styled from "styled-components";
import InputCity from './InputCity';
import HourlyWeather from './HourlyWeather';
import CurrentWeather from './CurrentWeather';
import WeeklyWeather from './WeeklyWeather';
import Clouds from '../imgs/cloud.svg';
import Rain from '../imgs/rain.svg';
import Clear from '../imgs/sunny.svg';
import Snow from '../imgs/snow.svg';
import Undefind from '../imgs/undefind.svg';

const ShowWeather = () => {
    let {showWeather} = useContext(WeatherContext);

    const showImage = (weather) => {
        switch (weather) {
            case 'Clouds':
                return <img width="auto" height="auto" src={Clouds} alt="clouds"/>;
            case 'Rain':
                return <img width="auto" height="auto" src={Rain} alt="rain" />;
            case 'Clear':
                return <img width="auto" height="auto" src={Clear} alt="sunny" />;
            case 'Snow':
                return <img width="auto" height="auto" src={Snow} alt="snow" />;
            default:
                return <img width="auto" height="auto" src={Undefind} alt="undefind" />;
        }
    }

    const dailyWeathers = showWeather.dailyWeather
    const currentWeather = showWeather

    return(
        <Container>
            <InputCity />
            <Wrap>
                <WrapLeft>
                    { showWeather.loading && !showWeather.error ? (
                        <p>loading...</p>
                    ) : showWeather.error ? (
                        <p>Try again..</p>
                    ) : (
                        <CurrentWeather currentWeather={currentWeather} showImage={showImage}/>
                    )}
                </WrapLeft>
                <WrapRight>
                    <HourlyWeather dailyWeather={dailyWeathers} showImage={showImage}/>
                    <WeeklyWeather dailyWeather={dailyWeathers} showImage={showImage}/>
                </WrapRight>
            </Wrap>
        </Container>
    );
};

const Container = styled.div`
    background-color: #FFF3E6;
    width: 100%;
    height: auto;

    @media ${device.laptop} {
        max-width: 100%;
        height: 100vh;
    }
`;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media ${device.laptop} {
        display: flex;
        flex-direction: row;
    }
`;

const WrapLeft = styled.div`
    text-align: center;
    align-items: center;

    @media ${device.laptop} {
        margin: 1.5rem 1rem 1rem;
        width: 50%;
    }
`;

const WrapRight = styled.div`
    margin: 1rem 1.5rem 2rem 1.5rem;

    @media ${device.laptop} {
        margin: 1.5rem 1rem 1rem;
        width: 50%;

    }
`;

export default ShowWeather;