import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import * as peticiones from '../../api/peticiones';
import DatePicker from './datePicker';

export default function RegistrarServicio() {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [idTecnico, setIdTecnico] = useState('');
  const [idServicio, setIdServicio] = useState('');
  const [responsePost, setResponsePost] = useState({});
  const [disabled, setDisabled] = useState(true);

  const handlerFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handlerFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  const handlerIdTecnicoChange = (e) => {
    setIdTecnico(e.target.value);
  };

  const handlerIdServicioChange = (e) => {
    setIdServicio(e.target.value);
  };

  const validateSubmit = (e) => {
    if (
      fechaInicio !== '' &&
      fechaInicio !== null &&
      fechaFin !== '' &&
      fechaFin !== null &&
      idTecnico !== '' &&
      idTecnico !== null &&
      idServicio !== '' &&
      idServicio !== null
    ) {
      setDisabled(false);
    } else if (
      fechaInicio !== '' ||
      fechaInicio !== null ||
      fechaFin !== '' ||
      fechaFin !== null ||
      idTecnico !== '' ||
      idTecnico !== null ||
      idServicio !== '' ||
      idServicio !== null
    ) {
      setDisabled(true);
    }
  };

  const postData = () => {
    let objPost = {
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      idTecnico: idTecnico,
      idServicio: idServicio,
    };
    console.log(objPost);
    let response = peticiones.postHorasPorServicio(objPost);
    response.then((data) => {
      const [obj] = data;
      setResponsePost(obj);
      console.log(obj);
    });
  };

  return (
    <div className="form-group" onChange={validateSubmit}>
      <label>Reporte de servicio</label>
      <Row>
        <Col className="mt-4">
          <DatePicker
            label="Fecha hora inicio"
            handlerFechaInicioChange={handlerFechaInicioChange}
          />
        </Col>
        <br/>
        <Col className="mt-4">
          <DatePicker 
            label="Fecha hora fin" 
            handlerFechaFinChange={handlerFechaFinChange} 
          />
        </Col>
      </Row>
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Id Tecnico"
        autoComplete="off"
        onChange={handlerIdTecnicoChange}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Id servicio"
        autoComplete="off"
        onChange={handlerIdServicioChange}
      />
      <br />
      <Button
        disabled={disabled}
        color="primary"
        onClick={postData}
      >
        Registrar
      </Button>
    </div>
  );
}
