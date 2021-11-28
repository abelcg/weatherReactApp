import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./components/Forms";
import WheatherContainer from "./components/WheatherContainer";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  const [climate, setClimate] = useState({});
  const [icon, setIcon] = useState("");
  const datosInciales = {
    ciudad: "",
    pais: "",
  };
  const [datos, setDatos] = useState(datosInciales);
  const [error, setError] = useState(false);

  const weatherIcon = {
    thunderstorm: "thunderstorm",
    drizzle: "sleet",
    rain: "storm-showers",
    snow: "snow",
    atmosphere: "fog",
    clear: "clear",
    clouds: "cloudy",
  };

  let getWeatherIcon = async (climate) => {
    let clima = await climate.weather[0].main;
    console.log(clima);
    switch (clima) {
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

  let getWeather = async () => {
    if (datos.ciudad && datos.pais) {
      const apiKey = "5f87bfcc54a9a5edbfcfd70e3e88febf";
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${datos.ciudad},${datos.pais}&units=metric&APPID=${apiKey}&lang=es`
      );
      const response = await apiCall.json();
      try {
        if (response.cod === 200) {
          console.log(response);
          setClimate(response);
          setError(true);
          getWeatherIcon(response);          
        } else {
          Swal.fire({
            icon: "error",
            title: "Ups...Error 404",
            text: "Ciudad no encontrada!",
          });
          setError(false);
          return null;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    getWeather();
    // getWeatherIcon();
  }, []);

  return (
    <div className="App">
      <Forms datos={datos} setDatos={setDatos} getWeather={getWeather}></Forms>
      {error ? (
        <WheatherContainer climate={climate} icon={icon}></WheatherContainer>
      ) : null}
    </div>
  );
}

export default App;
