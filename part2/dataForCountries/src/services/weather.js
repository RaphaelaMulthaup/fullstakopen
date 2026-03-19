import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const getWeather = (capital, tld) => {
  const request = axios.get(
    `${baseURL}${capital},${tld}&APPID=${API_KEY}&units=metric`,
  );
  return request.then((response) => response.data);
};

export default { getWeather };
