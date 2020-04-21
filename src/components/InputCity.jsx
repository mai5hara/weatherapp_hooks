import React, {useContext, useState} from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import { device } from '../components/layout/device';
import styled from "styled-components";
import search from '../imgs/search_white.png';

const InputCity = () => {
    const {searchtWeather} = useContext(WeatherContext);
    const [InputValue, SetInputValue] = useState('');

    const onChangeInput = (e) => {
        SetInputValue(e.target.value);
        console.log(InputValue)
    }

    const resetInputField = () => {
        SetInputValue('');
    }

    const callInputValue = (e) => {
        e.preventDefault();
        searchtWeather(InputValue);
        resetInputField();
    }

    return (
        <Form>
            <Input type="text" placeholder="City Name" name={InputValue} value={InputValue} onChange={onChangeInput} />
            <Button type="submit" onClick={callInputValue}><Img src={search}/></Button>
        </Form>
    )
};

const Img = styled.img`
    width:1.1rem;
    vertical-align: middle;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    padding: 1.6rem 0;
`;

const Input = styled.input`
    width: 70%;
    margin-right: 0.5rem;
    font-size: 1rem;
    padding: 0 0.4rem;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #474747;

    @media ${device.laptop} {
        width: 30%;
    }
`;

const Button =styled.button`
width: 35px;
height: 35px;
border-radius: 50%;
background-color: #656565;
`;

export default InputCity;