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
  const [bg, setBg] = useState("");

  const weatherCondition = {
    thunderstormDay: "thunderstormDay",
    thunderstormNight: "thunderstormNight",
    drizzleDay: "sleetDay",
    drizzleNight: "sleetNight",
    rainDay: "rainDay",
    rainNight: "rainNight",
    snowDay: "snowDay",
    snowNight: "snowNight",
    atmosphereDay: "fogDay",
    atmosphereNight: "fogNight",
    clearDay: "clearDay",
    clearNight: "clearNight",
    cloudsDay: "cloudyDay",
    cloudsNight: "cloudyNight",
  };

  let getWeatherIconBg = async (climate) => {
    let icon = await climate.weather[0].icon;
   
    setIcon(icon);
     switch (icon) {
      case "11d":
        setBg(weatherCondition.thunderstormDay);
        break;
      case "11n":
        setBg(weatherCondition.thunderstormNight);
        break;
      case "09d":
        setBg(weatherCondition.drizzleDay);
        break;
      case "09n":
        setBg(weatherCondition.drizzleNight);
        break;
      case "10d":
        setBg(weatherCondition.rainDay);
        break;
      case "10n":
        setBg(weatherCondition.rainNight);
        break;
      case "13d":
        setBg(weatherCondition.snowDay);
        break;
      case "13n":
        setBg(weatherCondition.snowNight);
        break;
      case "50d":
        setBg(weatherCondition.atmosphereDay);
        break;
      case "50n":
        setBg(weatherCondition.atmosphereNight);
        break;
      case "01n":
        setBg(weatherCondition.clearNight);
        break;
      case "01d":
        setBg(weatherCondition.clearDay);
        break;
      case "02d":
      case "03d":
      case "04d":
        setBg(weatherCondition.cloudsDay);
        break;
      case "02n":
      case "03n":
      case "04n":
        setBg(weatherCondition.cloudsNight);
        break;
      default:
        setBg(weatherCondition.clearDay);
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
         
          setClimate(response);
          setError(true);
          getWeatherIconBg(response);          
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
  });
  
  return (
    <div className={(bg) !== "" ? `App ${bg}` : 'App'}  >
      <Forms datos={datos} setDatos={setDatos} getWeather={getWeather}></Forms>
      {error ? (
        <WheatherContainer climate={climate} icon={icon}></WheatherContainer>
      ) : null}
    </div>
  );
}

export default App;
