import React from 'react';

const Weather = ({weather, temp}) => {
    return (
        <div>
            <h3>{weather}</h3>
            <p>{temp}</p>
        </div>
    )
};

export default Weather;