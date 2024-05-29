import { deleteSingleGame, getGameRanks } from './gameData';
import { deleteRank } from './rankData';

// eslint-disable-next-line camelcase
const deleteGameRanks = (game_id) => new Promise((resolve, reject) => {
  getGameRanks(game_id).then((ranksArray) => {
    const deleteRankPromises = ranksArray.map((rank) => deleteRank(rank.rank_id));

    Promise.all(deleteRankPromises).then(() => {
      deleteSingleGame(game_id).then(resolve);
    });
  }).catch((error) => reject(error));
});

export default deleteGameRanks;
