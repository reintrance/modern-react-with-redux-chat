import axios from 'axios';

const API_KEY = '78f8de8396949352c7c4804f5e758029';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},by`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}