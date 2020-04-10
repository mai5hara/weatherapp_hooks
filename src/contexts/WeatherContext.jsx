import React, {useReducer, createContext, useEffect} from 'react';
import {weatherReducer} from '../reducers/weatherReducer';

export const WeatherContext = createContext();

const API_KEY = 'ad32e5732727ae27e9f2c3a1ecd95b69';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${API_KEY}`;

export const WeatherProvider = (props) => {
    console.log(props)
    const [showWeather, dispatch] = useReducer(weatherReducer,[]);
    useEffect(() => {
        fetch(WEATHER_URL)
        .then(response => response.json())
        .then(data => {
            
            dispatch({
                type: 'SEARCH_WEATHER_SUCCESS',
                weather: {
                    weather: data.weather[0]['main'],
                    temp: data.main.temp
                }
            })
        });
    },[]);

    const search = (InputValue) => {
        dispatch({
            type: 'SEARCH_WEATHER_REQUEST'
        });

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${InputValue}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'SEARCH_WEATHER_SUCCESS',
                weather: {
                    weather: data.weather[0]['main'],
                    temp: data.main.temp
                }
            })
        })
    }


    console.log(showWeather.Response)

    return (
        <WeatherContext.Provider value={{showWeather, dispatch}}>
            {props.children}
        </WeatherContext.Provider>
    );
}

// export const Consumer = WeatherContext.Consumer;







// export const WeatherContext = createContext();

// // const initialState = {
// //     loading: true,
// //     weather: [],
// //     errorMessage: null
// // };

// export const WeatherProvider = props => {
//     const [showWeather, setShowWeather] = useState([
//         {
//             weather: 'sunny',
//             temp: 15
//         },
//         {
//             weather: 'rain',
//             temp: 10
//         }
//     ]);


//     // const [state, dispatch] = useReducer(reducer, initialState);

//     // componentDidMount() {
//     //     fetch('(https://home.openweathermap.org/users/sign_in)')
//     //         .then(response => {
//     //             response.json()
//     //             .then(data => {
//     //                 console.log(data)
//     //                 this.setState({
//     //                     setShowWeather: data
//     //                 });
//     //             })
//     //             .catch(error => {
//     //                 console.log(`This is a error ${error}`);
//     //             });
//     //         });
//     // }


//     return (
//         <WeatherContext.Provider value={[showWeather, setShowWeather]}>
//             {props.children}
//         </WeatherContext.Provider>
//     )
// }

// // export const Consumer = Context.Consumer;
