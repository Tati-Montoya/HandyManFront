import '@testing-library/jest-dom';
import * as peticiones from '../api/peticiones';

describe('Prueba unitaria en registro de horas', () => {
  test('Deberia retornar un numero entero como total de horas trabajadas en la semana', async () => {
    let service = Math.random();
    const idTecnico = '2122002';
    const idServicio = 's' + service;
    const fechaInicio = '2020-04-26T08:30';
    const fechaFin = '2020-04-26T00:30';
    const data = {
      id_tecnico: idTecnico,
      id_servicio: idServicio,
      hora_inicio: fechaInicio,
      hora_fin: fechaFin,
    };
    
    const dataResponse = await peticiones.postHorasPorServicio(data);

    expect(dataResponse).toContainEqual(expect.any(Number));
  });
});