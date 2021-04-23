import React, { useState } from 'react';
import { Button } from 'reactstrap';
import * as peticiones from '../../api/peticiones';
import TableCalculo from './TableCalculo';

export default function ConsultarHoras() {
  const [Id, setId] = useState('');
  const [semana, setSemana] = useState('');
  const [dataTable, setDataTable] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const handlerIdChange = (e) => {
    setId(e.target.value);
  };

  const handlerSemanaChange = (e) => {
    setSemana(e.target.value);
  };

  const validateSubmit = (e) => {
    if (Id !== '' && Id !== null && semana !== '' && semana !== null) {
      setDisabled(false);
    } else if (Id === '' || Id === null || semana === '' || semana === null) {
      setDisabled(true);
    }
  };

  const getData = () => {
    let objData = {
      idTecnico: Id,
      numSemana: semana,
    };
    console.log(objData);
    let response = peticiones.getHorasTrabajadas(objData);
    response.then((data) => {
      console.log(data);
      setDataTable(data);
    });
  };

  return (
    <>
      <div className="form-group" onChange={validateSubmit}>
        <label>Calculo de horas de trabajo</label>
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
        <Button
          disabled={disabled}
          name="bntSubmit"
          onClick={getData}
          color="primary"
        >
          Consultar
        </Button>{' '}
      </div>
      {dataTable !== null ? <TableCalculo data={dataTable} /> : null}
    </>
  );
}
