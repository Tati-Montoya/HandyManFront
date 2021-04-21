import React from 'react';
import { Table } from 'reactstrap';

const TableCalculo = (props) => {
  const { data } = props;

  return (
    <>
      {data.length !== 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Total horas</th>
            </tr>
          </thead>

          <tbody>
            {data.map((obj) => (
              <>
                <tr>
                  <td>idTecnico</td>
                  <td>{obj.id_tecnico}</td>
                </tr>
                <tr>
                  <td>num_semana</td>
                  <td>{obj.num_semana}</td>
                </tr>
                <tr>
                  <td>horas_normales</td>
                  <td>{obj.horas_normales}</td>
                </tr>
                <tr>
                  <td>horas_normales_extra</td>
                  <td>{obj.horas_normales_extra}</td>
                </tr>
                <tr>
                  <td>horas_dominicales</td>
                  <td>{obj.horas_dominicales}</td>
                </tr>
                <tr>
                  <td>horas_nocturnas</td>
                  <td>{obj.horas_nocturnas}</td>
                </tr>
                <tr>
                  <td>horas_nocturnas_extra</td>
                  <td>{obj.horas_nocturnas_extra}</td>
                </tr>
                <tr>
                  <td>horas_dominicales_extra</td>
                  <td>{obj.horas_dominicales_extra}</td>
                </tr>
                <tr>
                  <td>total_horas</td>
                  <td>{obj.total_horas}</td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
};

export default TableCalculo;
