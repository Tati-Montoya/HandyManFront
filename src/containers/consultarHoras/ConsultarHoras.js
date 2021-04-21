import React, { useState } from 'react';
import { Button } from 'reactstrap';
import * as peticiones from '../../api/peticiones';
import TableCalculo from './TableCalculo';

export default function ConsultarHoras() {
  const [Id, setId] = useState('');
  const [semana, setSemana] = useState('');
  const [dataTable, setDataTable] = useState([]);

  const handlerIdChange = (e) => {
    setId(e.target.value);
  };

  const handlerSemanaChange = (e) => {
    setSemana(e.target.value);
  };

  const getData = () => {
    let objData = {
      idTecnico: Id,
      numSemana: semana,
    };
    let response = peticiones.getHorasTrabajadas(objData);
    response.then((data) => {
      setDataTable(data);
    });
  };

  return (
    <>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Id Tecnico"
          autoComplete="off"
          onChange={handlerIdChange}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Numero Semana"
          autoComplete="off"
          onChange={handlerSemanaChange}
        />
        <br />
        <Button onClick={getData} color="primary">
          Consultar
        </Button>{' '}
      </div>
      {dataTable !== null ? <TableCalculo data={dataTable} /> : null}
    </>
  );
}
