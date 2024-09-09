// src/Weather.js
import React from 'react';
import './Weather.css'; // Import the CSS file

const Weather = ({ weather }) => {
  if (!weather) return null;

  const { main, weather: weatherDetails, name } = weather;
  const { temp, humidity } = main;
  const { description, icon } = weatherDetails[0];

  return (
    <div className="weather">
      <h2>{name}</h2>
      <div className="weather-icon">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
      </div>
      <div className="weather-details">
        <p>Temperature: {Math.round(temp - 273.15)}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Description: {description.charAt(0).toUpperCase() + description.slice(1)}</p>
      </div>
    </div>
  );
};

export default Weather;
