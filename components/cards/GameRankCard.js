import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { getSingleRank } from '../api/rankData';
import { deleteGame } from '../api/gameData';
// import Link from 'next/link';
// import { deleteMember } from '../api/memberData';

function GameRankCard({ gameObj, onUpdate }) {
  const [rank, setRank] = useState({});

  useEffect(() => {
    getSingleRank(gameObj.rank_id).then(setRank);
  }, [gameObj]);

  const deleteThisGame = () => {
    if (window.confirm('Delete Game?')) {
      deleteGame(gameObj.game_id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.game_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{gameObj.game_name}</Card.Title>
        <Card.Title>{rank.rank_name}</Card.Title>
        <Link href={`/gamerank/edit/${gameObj.game_id}`} passHref>
          <Button type="button" class="btn btn-success">Edit Game Rank</Button>
        </Link>
        <br />
        <Button type="button" class="btn btn-primary">
          <Link href={`/gamerank/${gameObj.game_id}`} passHref>
            View Details
          </Link>
          <br />
        </Button>
        <Button variant="danger" onClick={deleteThisGame} className="m-2">
          Delete Game
        </Button>
      </Card.Body>
    </Card>
  );
}

GameRankCard.propTypes = {
  gameObj: PropTypes.shape({
    image: PropTypes.string,
    game_name: PropTypes.string,
    rank_id: PropTypes.string,
    description: PropTypes.string,
    rank_name: PropTypes.string,
    game_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default GameRankCard;
