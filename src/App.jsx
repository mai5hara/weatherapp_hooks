import React from 'react';
import './App.css';
import Input from './components/Input';
import ShowWeather from './ShowWeather';
import {WeatherProvider} from './contexts/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Input />
        {/* <ShowWeather /> */}
        <ShowWeather />
      </div>
    </WeatherProvider>
  );
}

export default App;
