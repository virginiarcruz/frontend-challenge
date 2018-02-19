import { API_URL } from './config';
import { toJSON } from './util';

export const getCity = ids =>
  fetch(`${API_URL}${ids}&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3`)
    .then(toJSON);

export const getTempo = ids =>
  fetch(`${API_URL}${ids}&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3`)
    .then(toJSON);
