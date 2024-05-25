import { clientCredentials } from '../../utils/client';

const endpoint = clientCredentials.databaseURL;

const getRanks = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rank.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteRanks = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rank/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleRank = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rank/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createRank = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rank.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateRank = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rank/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getRanks,
  createRank,
  updateRank,
  deleteRanks,
  getSingleRank,
};
