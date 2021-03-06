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
  let dataResponse = await fetch(`${URL}/guardar-horas`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) =>
      resp.json().then((res) => {
        return res;
      })
    )
    .catch((err) => console.log(err));
  return dataResponse;
};
