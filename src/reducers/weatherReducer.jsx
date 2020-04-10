import uuid from 'uuid/v1';

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_WEATHER_REQUEST':
            return [...state,{
                error: null,
                loading: true
            }];
        case 'SEARCH_WEATHER_SUCCESS':
            console.log(action)
            return [...state, {
                weather: action.weather.weather,
                temp: action.weather.temp,
                id: uuid(),
                error: null,
                loading: false
            }];
            case 'SEARCH_WEATHER_FAILURE':
                return [...state, {
                    error: action.error,
                    loading: false
                }]
        default:
            return state
    }
}