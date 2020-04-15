import React from 'react';
import ShowWeather from './components/ShowWeather';
import {WeatherProvider} from './contexts/WeatherContext';

function App() {

  return (
    <WeatherProvider>
        <ShowWeather />
    </WeatherProvider>
  );
}

export default App;
