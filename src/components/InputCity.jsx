import React, {useContext, useState} from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import styled from "styled-components";

const InputCity = () => {
    const {currentWeather} = useContext(WeatherContext);
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
        currentWeather(InputValue);
        resetInputField();
    }

    return (
        <Form>
            <Input type="text" name={InputValue} value={InputValue} onChange={onChangeInput} />
            <Button type="submit" onClick={callInputValue}>search</Button>
        </Form>
    )
};

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;
`;

const Input = styled.input`
    width: 8rem;
    font-size: 1rem;
    padding: 0 0.4rem;
    border: 2px solid rgb(255, 128, 25);
    border-radius: 3px;
`;

const Button =styled.button`
    font-size: 1rem;
    height: 2.2rem;
    width: auto;
    margin-left: 0.5rem;
    border-radius: 3px;
    background-color: rgb(255, 128, 25);
    cursor: pointer;
    color: #fff
`;

export default InputCity;