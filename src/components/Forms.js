import React from "react";
import { Form, Button } from "react-bootstrap";
import "boxicons";

const Forms = (props) => {

  let handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;

    props.setDatos({ ...props.datos, [event.target.name]: value });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    props.getWeather();
    {document.getElementById("formW").reset();}
  };

  return (
    <div className="form-container">
      <h1 className="text-light text-center fw-bold mb-2 fs-1">Weather App</h1>
      <hr className="text-light" />
      <Form id="formW"
        className="container p-3 d-flex flex-column flex-md-row  justify-content-around align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control
            className="input text-light"
            type="text"
            placeholder="    Ingrese una ciudad"
            name="ciudad"
             onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Control
            className="input text-light"
            type="text"
            placeholder="    Ingrese País ej. AR"
            name="pais"
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="pb-0" variant="secondary" type="submit">
          <box-icon name="search-alt"></box-icon>
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
