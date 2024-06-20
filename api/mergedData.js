import { getSingleGame } from './gameData';
import { getSingleRank } from './rankData';

const viewGameDetails = (gameFirebaseKey) => new Promise((resolve, reject) => {
  getSingleGame(gameFirebaseKey)
    .then((gameObject) => {
      getSingleRank(gameObject.rank_id)
        .then((rankObject) => {
          resolve({ rankObject, ...gameObject });
        });
    }).catch((error) => reject(error));
});

export default viewGameDetails;
