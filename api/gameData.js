import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getGames = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteGame = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleGame = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createGame = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game.json`, {
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

const updateGame = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game/${payload.game_id}.json`, {
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

const getGameRanks = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game.json?orderBy="rank_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const favoriteGames = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/game.json?orderBy="game_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const favorites = Object.values(data).filter((item) => item.favorite);
      resolve(favorites);
    })
    .catch(reject);
});

const searchGames = async (searchValue, uid) => {
  const allGames = await getGames(uid);

  const filteredGames = await allGames.filter((game) => (
    game.game_name.toLowerCase().includes(searchValue)
  ));

  return filteredGames;
};

export {
  getGames,
  createGame,
  updateGame,
  deleteGame,
  getSingleGame,
  getGameRanks,
  favoriteGames,
  searchGames,
};
