export const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_WEATHER_REQUEST':
            return {
                error: null,
                loading: true
            };
        case 'SEARCH_WEATHER_SUCCESS':
            return {
                weather: action.payload.weather,
                temp: action.payload.temp,
                tempMax: action.payload.tempMax,
                tempMin: action.payload.tempMin,
                name: action.payload.name,
                humidity: action.payload.humidity,
                wind: action.payload.wind,
                dailyWeather: action.payload.dailyWeather,
                error: null,
                loading: false
            };
        case 'SEARCH_WEATHER_FAILURE':
            return {
                error: action.payload,
                loading: false
            };
        case 'test':
            return {
                test: action.payload
            }
        default:
            return state
    }
}