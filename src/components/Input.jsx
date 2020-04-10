import React, {useContext, useState} from 'react';
import { WeatherContext } from '../contexts/WeatherContext';

const Input = (props) => {
    // const {dispatch} = useContext(WeatherContext);
    console.log(props)
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
        props.search(InputValue)
        resetInputField();
    }

    return (
        <form>
            <input type="text" name={InputValue} value={InputValue} onChange={onChangeInput} />
            <button type="submit" onClick={callInputValue}>search</button>
        </form>
    )
};

export default Input;