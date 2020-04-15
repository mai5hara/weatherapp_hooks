export const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_WEATHER_REQUEST':
            console.log(action)
            return {
                error: null,
                loading: true
            };
        case 'SEARCH_WEATHER_SUCCESS':
            console.log(action)
            return {
                weather: action.payload.weather,
                temp: action.payload.temp,
                name: action.payload.name,
                error: null,
                loading: false
            };
        case 'SEARCH_WEATHER_FAILURE':
            return {
                error: action.payload,
                loading: false
            };
        default:
            return state
    }
}