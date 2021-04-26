import '@testing-library/jest-dom';
import * as peticiones from '../api/peticiones';

describe('Prueba unitaria en consulta de horas', () => {
  test('Deberia retornar un objeto Json como respuesta del back', async () => {
    const id_tecnico = '1223212';
    const numero_semana = 20;
    const data = {
      idTecnico: id_tecnico,
      numSemana: numero_semana,
    };
    const objRes = [
      {
        horas_dominicales: 0,
        horas_dominicales_extra: 0,
        horas_nocturnas: 0,
        horas_nocturnas_extra: 0,
        horas_normales: 0,
        horas_normales_extra: 0,
        id_tecnico: '1223212',
        num_semana: 20,
        total_horas: 1,
      },
    ];

    const dataResponse = await peticiones.getHorasTrabajadas(data);

    expect(dataResponse).toEqual(objRes);
  });
});