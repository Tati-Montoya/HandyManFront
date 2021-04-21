import { URL } from '../api';
import { urlformat } from './urlformat';

export const getHorasTrabajadas = async (data) => {
  let dataResponse = await fetch(urlformat(`${URL}/total-horas`, data), {
    method: 'GET',
  })
    .then((resp) =>
      resp.json().then((res) => {
        return res;
      })
    )
    .catch((err) => console.log(err));
  return dataResponse;
};

export const postHorasPorServicio = async (data) => {
  let dataResponse = await fetch(urlformat(`${URL}/guardar-horas`, data), {
    method: 'POST',
  })
    .then((resp) =>
      resp.json().then((res) => {
        return res;
      })
    )
    .catch((err) => console.log(err));
  return dataResponse;
};
