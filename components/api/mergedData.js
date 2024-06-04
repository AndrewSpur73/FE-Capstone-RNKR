import { getSingleGame } from './gameData';
import { getSingleRank } from './rankData';

// eslint-disable-next-line camelcase
// const deleteGameRanks = (rank_id) => new Promise((resolve, reject) => {
//   getGameRanks(rank_id).then((gamesArray) => {
//     const deleteGamePromises = gamesArray.map((game) => deleteGame(game.game_id));

//     Promise.all(deleteGamePromises).then(() => {
//       deleteRank(rank_id).then(resolve);
//     });
//   }).catch((error) => reject(error));
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

export default viewRankDetails;
