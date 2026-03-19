import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Weather = ({ country }) => {
  const [weatherCapital, setWeatherCapital] = useState();

  useEffect(() => {
    weatherService.getWeather(country.capital, country.tld).then((response) => {
      setWeatherCapital(response);
    });
  }, []);

  if (!weatherCapital) {
    return <p>Loading weather...</p>;
  }

  const iconCode = weatherCapital.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <>
      <h2>Weather in {country.name.official}</h2>
      <p>Temperature {weatherCapital.main.temp} Celsius</p>
      <img src={iconUrl} alt={weatherCapital.weather[0].description} />
      <p>Wind {weatherCapital.wind.speed} m/s</p>
    </>
  );
};

export default Weather;
