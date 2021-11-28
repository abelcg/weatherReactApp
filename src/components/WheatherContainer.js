import React from "react";
import "weather-icons/css/weather-icons.css";
import "weather-icons/css/weather-icons-wind.css";

const WheatherContainer = (props) => {
 
  return (
    <section className="container  text-center wheatherContainer py-5">
      <h1 className="text-light">
        {props.climate.name}, {props.climate.sys.country}{" "}
      </h1>
      <hr className="text-light" />
      <i className={`text-light my-5 weatherIcon wi wi-night-${props.icon}`}></i>
      <div className="row d-flex justify-content-sm-center align-items-sm-center">
        <div className="col-sm-1">
          <h2 className="text-light fs-1">
            {Math.floor(props.climate.main.temp)}°C
          </h2>
        </div>
        <div className="col-sm-1  d-md-flex flex-column">
          <span className="fw-bold mx-2 text-light fs-6">
            {Math.floor(props.climate.main.temp_max)}°
          </span>
          <span className="text-light fs-6">|</span>
          <span className="text-muted mx-2 text-white fs-6">
            {Math.floor(props.climate.main.temp_min)}°
          </span>
        </div>
      </div>
      <h3 className="text-light my-4">
        {props.climate.weather[0].description}
      </h3>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        <p className="lead fs-6 text-light">
          Sensación térmica: {Math.floor(props.climate.main.feels_like)}°C
        </p>
        <p className="lead fs-6 text-light">
          Humedad: {props.climate.main.humidity}%
        </p>
        <p className="lead fs-6 text-light">
          Visibilidad: {props.climate.visibility / 1000}km
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        <p className="lead fs-6 text-light">
          Presión atmosférica: {props.climate.main.pressure}mbar
        </p>
        <p className="lead fs-6 text-light">
          Viento:{" "}
          <i
            className={`text-light fs-2 mx-2 wi wi-wind towards-${props.climate.wind.deg}-deg`}
          ></i>
          {Math.floor(props.climate.wind.speed * 3.6)}km/h
        </p>
      </div>
    </section>
  );
};

export default WheatherContainer;
