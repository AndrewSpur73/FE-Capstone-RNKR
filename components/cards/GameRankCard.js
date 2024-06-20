import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { getSingleRank } from '../../api/rankData';
import { deleteGame, updateGame } from '../../api/gameData';

function GameRankCard({ gameObj, onUpdate }) {
  const [rank, setRank] = useState({});

  useEffect(() => {
    getSingleRank(gameObj.rank_id).then(setRank);
  }, [gameObj]);

  const toggleFavorite = () => {
    if (gameObj.favorite) {
      updateGame({ ...gameObj, favorite: false }).then(onUpdate);
    } else {
      updateGame({ ...gameObj, favorite: true }).then(onUpdate);
    }
  };

  const deleteThisGame = () => {
    if (window.confirm('Delete Game?')) {
      deleteGame(gameObj.game_id)
        .then(() => {
          // If successful, update the game list or notify parent component
          onUpdate();
        })
        .catch((error) => {
          console.error('Error deleting game:', error);
          // Handle error if necessary
        });
    }
  };

  return (
    <Card style={{ width: '25rem', margin: '10px', border: '10px solid #ffa500' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.game_name} style={{ height: '400px', borderBottom: '5px solid black' }} />
      <Card.Body className="d-flex flex-column" style={{ backgroundColor: 'grey' }}>
        <Card.Title style={{ fontWeight: 'bolder', fontSize: '25px' }}>{gameObj.game_name}</Card.Title>
        <Card.Title style={{ fontWeight: 'bolder', fontSize: '23px' }}>Console Type: {gameObj.console}</Card.Title>
        <Card.Title><Button style={{ backgroundColor: 'grey', border: 'grey', fontSize: '30px' }} onClick={toggleFavorite}><span>{gameObj.favorite ? ' 💙' : ' 🤍'}</span></Button></Card.Title>
        <Card.Title style={{ fontWeight: 'bolder', fontSize: '25px' }}>{rank?.rank_name ? `Current Rank: ${rank.rank_name}` : 'Current Rank: N/A '}</Card.Title>
        <div style={{
          margin: '10px',
        }}
        >
          <Link href={`/gamerank/edit/${gameObj.game_id}`} passHref>
            <Button
              style={{
                width: '20rem', border: '3px solid black', margin: '', marginTop: '', fontSize: '25px',
              }}
              type="button"
              className="btn btn-success"
            >Edit Game
            </Button>
          </Link>
          <Button
            style={{
              width: '20rem', border: '3px solid black', marginTop: '10px', fontSize: '25px',
            }}
            type="button"
            className="btn btn-primary"
          >
            <Link href={`/gamerank/${gameObj.game_id}`} passHref>
              View Details
            </Link>
          </Button>
          <Button
            style={{
              width: '20rem', border: '3px solid black', marginTop: '10px', fontSize: '25px',
            }}
            variant="danger"
            onClick={deleteThisGame}
          >
            Delete Game
          </Button>
        </div>
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
    favorite: PropTypes.bool,
    console: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default GameRankCard;
