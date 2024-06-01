import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { getSingleGame } from '../api/gameData';
import { deleteGameRanks } from '../api/mergedData';
// import Link from 'next/link';
// import { deleteMember } from '../api/memberData';

function GameRankCard({ rankObj, onUpdate }) {
  const [game, setGame] = useState({});

  useEffect(() => {
    getSingleGame(rankObj.game_id).then(setGame);
  }, [rankObj]);

  const deleteThisGameRank = () => {
    if (window.confirm('Delete?')) {
      deleteGameRanks(game.game_id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={game.image} alt={game.game_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{game.game_name}</Card.Title>
        <Card.Title>{rankObj.rank_name}</Card.Title>
        {/* <Link href={`/member/edit/${gameObj.firebaseKey}`} passHref>
          <Button variant="info">Edit Rank Info</Button>
        </Link> */}
        <Button variant="outline-light">
          <Link href={`/gamerank/${rankObj.id}`} passHref>
            View
          </Link>
        </Button>
        <Button variant="danger" onClick={deleteThisGameRank} className="m-2">
          Delete Rank
        </Button>
      </Card.Body>
    </Card>
  );
}

GameRankCard.propTypes = {
  rankObj: PropTypes.shape({
    image: PropTypes.string,
    game_name: PropTypes.string,
    rank_id: PropTypes.string,
    description: PropTypes.string,
    rank_name: PropTypes.string,
    game_id: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default GameRankCard;
