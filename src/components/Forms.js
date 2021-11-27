import React from "react";
import {Form, Button} from 'react-bootstrap';
import 'boxicons';

const Forms = () => {
  return (
    <div className="form-container">
    <Form className='container p-3 d-flex flex-column flex-md-row  justify-content-around align-items-center'>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Control className="input text-light" type="text" placeholder="    Ingrese una ciudad" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Control className="input text-light" type="text" placeholder="    Ingrese País ej. AR" />
      </Form.Group>
      <Button className="pb-0" variant="secondary" type="submit">
      <box-icon  name='search-alt' ></box-icon>
      </Button>
    </Form>
    </div>
  );
};

export default Forms;
