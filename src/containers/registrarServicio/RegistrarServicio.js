import React, { useState} from 'react';
import { Button } from 'reactstrap';
import * as peticiones from '../../api/peticiones';

export default function RegistrarServicio() {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [idTecnico, setIdTecnico] = useState('');
  const [idServicio, setIdServicio] = useState('');
  const [responsePost, setResponsePost] = useState({});

  const handlerFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  }

  const handlerFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  }

  const handlerIdTecnicoChange = (e) => {
    setIdTecnico(e.target.value);
  }

  const handlerIdServicioChange = (e) => {
    setIdServicio(e.target.value);
  }

  const postData = () => {
    let objPost = {
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      idTecnico: idTecnico,
      idServicio: idServicio
    }
    let response = peticiones.postHorasPorServicio(objPost);
    response.then(data => {
      const [obj] = data;
      setResponsePost(obj);
      console.log(obj);
    });
  }

  return (
    <div className="form-group">
      <input
        type="Date"
        className="form-control"
        placeholder="Fecha hora inicio"
        autoComplete="off"
        onChange={handlerFechaInicioChange}
      />
      <br />
      <input
        type="Date"
        className="form-control"
        placeholder="Fecha hora fin"
        autoComplete="off"
        onChange={handlerFechaFinChange}
      />
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
        color="primary" 
        onClick={postData}>
          Registrar
      </Button>
    </div>
  );
}
