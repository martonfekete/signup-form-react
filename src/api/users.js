import { USERS_API_URL } from '../constants/api';

export function getUsers() {
  return fetch(USERS_API_URL)
    .then(resp => resp.json())
    .catch(error => console.warn(error));
}

export function createUser(values) {
  return fetch(USERS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .catch(error => console.warn(error));
}
