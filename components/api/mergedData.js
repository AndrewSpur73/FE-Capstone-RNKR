import { deleteSingleGame, getGameRanks, getSingleGame } from './gameData';
import { deleteRank, getSingleRank } from './rankData';

// eslint-disable-next-line camelcase
const deleteGameRanks = (game_id) => new Promise((resolve, reject) => {
  getGameRanks(game_id).then((ranksArray) => {
    const deleteRankPromises = ranksArray.map((rank) => deleteRank(rank.rank_id));

    Promise.all(deleteRankPromises).then(() => {
      deleteSingleGame(game_id).then(resolve);
    });
  }).catch((error) => reject(error));
});

// const viewGameDetails = (gameId) => new Promise((resolve, reject) => {
//   Promise.all([getSingleGame(gameId), getGameRanks(gameId)])
//     .then(([gameObject, gameRanksArray]) => {
//       resolve({ ...gameObject, ranks: gameRanksArray });
//     }).catch((error) => reject(error));
// });

// const viewRankDetails = (rankId) => new Promise((resolve, reject) => {
//   Promise.all([getSingleRank(rankId), getGameRanks(rankId)])
//     .then(([rankObject, gameRanksArray]) => {
//       resolve({ ...rankObject, games: gameRanksArray });
//     }).catch((error) => reject(error));
// });

const viewRankDetails = (rankFirebaseKey) => new Promise((resolve, reject) => {
  getSingleRank(rankFirebaseKey)
    .then((rankObject) => {
      getSingleGame(rankObject.game_id)
        .then((gameObject) => {
          resolve({ gameObject, ...rankObject });
        });
    }).catch((error) => reject(error));
});

export {
  deleteGameRanks,
  viewRankDetails,
  // viewGameDetails,
  // viewRankDetails,
};
