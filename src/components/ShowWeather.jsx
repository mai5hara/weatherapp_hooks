import React, {useContext} from 'react';
import {WeatherContext} from '../contexts/WeatherContext';
import styled from "styled-components";
import InputCity from './InputCity';
import BackImage from '../imgs/bg_img.jpg';
import uuid from 'uuid/v1';
import Test from './Test';
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
                return <img width="27%" height="27%" src={Clouds} alt="clouds"/>;
            case 'Rain':
                return <img width="27%" height="27%" src={Rain} alt="rain" />;
            case 'Clear':
                return <img width="27%" height="27%" src={Clear} alt="sunny" />;
            case 'Snow':
                return <img width="27%" height="27%" src={Snow} alt="snow" />;
            default:
                return <img width="27%" height="27%" src={Undefind} alt="undefind" />;
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
                    {/* {dailyWeathers && dailyWeathers.map(dailyWeather => (
                        <Test dailyWeather={dailyWeather} key={uuid}/>
                    ))
                    } */}
                    {dailyWeathers && dailyWeathers.map(dailyWeather => (
                        <DailyWeather dailyWeather={dailyWeather} key={uuid}/>
                    ))}
                </WrapRight>
            </Wrap>
        </Container>
    );
};

const Container = styled.div`
    background-color: #FFF3E6;
    width: 100%;
    height: 100vh;
`;

const Wrap = styled.div`
    width: 100%;
    display: flex:
`;

const WrapLeft = styled.div`
    width: 50%;
    text-align: center;
    margin-top: 2.5rem;
    align-items: center;
`;

const WrapRight = styled.div`
    width: 50%;
`;

const Img = styled.img`
    width: auto;
    height: 100vh;
`;

export default ShowWeather;