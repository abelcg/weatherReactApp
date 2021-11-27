import React from "react";
import "weather-icons/css/weather-icons.css";
import "weather-icons/css/weather-icons-wind.css";

const WheatherContainer = () => {
  return (
    <section className="container  text-center wheatherContainer py-5">
      <h1 className="text-light">Buenos Aires, AR</h1>
      <hr className="text-light" />
      <i class="text-light my-5 weatherIcon wi wi-day-sunny"></i>
      <div className="row d-flex justify-content-sm-center align-items-sm-center">
        <div className="col-sm-1">
          <h2 className="text-light fs-1">33°</h2>
        </div>
        <div className="col-sm-1  d-md-flex flex-column">
          <span className="fw-bold mx-2 text-light fs-6">35°</span>
          <span className="text-light fs-6">|</span>
          <span className="text-muted mx-2 text-light fs-6">23°</span>
        </div>
      </div>
      <h3 className="text-light my-4">Nublado</h3>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        <p className="lead fs-6 text-light">Sensación térmica: 33°</p>
        <p className="lead fs-6 text-light">Humedad: 60%</p>
        <p className="lead fs-6 text-light">Visibilidad: 8km</p>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        <p className="lead fs-6 text-light">Presión atmosférica: 1000mbar</p>
        <p className="lead fs-6 text-light">
          Viento: <i class="text-light fs-2 mx-2 wi wi-wind towards-23-deg"></i>
          13km/h
        </p>
      </div>
    </section>
  );
};

export default WheatherContainer;
