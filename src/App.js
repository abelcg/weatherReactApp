import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./components/Forms";
import WheatherContainer from "./components/WheatherContainer";
import React, { useState, useEffect } from "react";

function App() {
  const [climate, setClimate] = useState({});
  const [icon, setIcon] = useState("");

  useEffect(() => {
    getWeather();
    getWeatherIcon();
  },[]);

  let getWeather = async () => {
    const apiCall = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&APPID=5f87bfcc54a9a5edbfcfd70e3e88febf&lang=es"
    );
    const response = await apiCall.json();
    console.log(response.weather[0].main);
    setClimate(response);
  };

  const weatherIcon = {
    thunderstorm: "thunderstorm",
    drizzle: "sleet",
    rain: "storm-showers",
    snow: "snow",
    atmosphere: "fog",
    clear: "sunny",
    clouds: "cloudy",
  };

  let getWeatherIcon = () => {
    switch (climate.weather[0].main) {
      case "Thunderstorm":
        setIcon(weatherIcon.thunderstorm);
        break;
      case "Drizzle":
        setIcon(weatherIcon.drizzle);
        break;

      case "Rain":
        setIcon(weatherIcon.rain);
        break;
      case "Snow":
        setIcon(weatherIcon.snow);
        break;
      case "Atmosphere":
        setIcon(weatherIcon.atmosphere);
        break;
      case "Clear":
        setIcon(weatherIcon.clear);
        break;
      case "Clouds":
        setIcon(weatherIcon.clouds);
        break;

      default:
        setIcon(weatherIcon.clear);
        break;
    }
  };

  return (
    <div className="App">
      <Forms></Forms>
      <WheatherContainer climate={climate} icon={icon}></WheatherContainer> 
    </div>
  );
}

export default App;
