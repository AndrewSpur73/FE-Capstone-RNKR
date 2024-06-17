import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { getSingleRank } from '../../api/rankData';
import { deleteGame, updateGame } from '../../api/gameData';

function GameRankCard({ gameObj: initialGameObj, onUpdate }) {
  const [gameObj, setGameObj] = useState(initialGameObj);
  const [rank, setRank] = useState({});

  useEffect(() => {
    getSingleRank(gameObj.rank_id).then(setRank);
  }, [gameObj]);

  const toggleFavorite = () => {
    const updatedFavorite = !gameObj.favorite; // Toggle the local favorite state

    setGameObj((prevGameObj) => ({
      ...prevGameObj,
      favorite: updatedFavorite,
    }));

    // Update Firebase
    updateGame({ ...gameObj, favorite: updatedFavorite })
      .then(() => {
        onUpdate();
      })
      .catch((error) => {
        // Handle error and revert UI state if needed
        console.error('Error updating favorite status:', error);
        // Revert UI state in case of error
        setGameObj((prevGameObj) => ({
          ...prevGameObj,
          favorite: !updatedFavorite,
        }));
      });
  };

  // const deleteThisGame = () => {
  //   if (window.confirm('Delete Game?')) {
  //     deleteGame(gameObj.game_id).then(() => onUpdate());
  //   }
  // };

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
    <Card style={{ width: '19rem', margin: '10px', border: '3px solid black' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.game_name} style={{ height: '400px', borderBottom: '3px solid black' }} />
      <Card.Body className="d-flex flex-column" style={{ backgroundColor: 'grey' }}>
        <Card.Title style={{ fontWeight: 'bolder' }}>{gameObj.game_name}</Card.Title>
        <Card.Title><Button style={{ backgroundColor: 'grey', border: 'grey' }} onClick={toggleFavorite}><span>{gameObj.favorite ? ' 💙' : ' 🤍'}</span></Button></Card.Title>
        <Card.Title style={{ fontWeight: 'bolder' }}>{rank?.rank_name ? `Current Rank: ${rank.rank_name}` : ' '}</Card.Title>
        <Link href={`/gamerank/edit/${gameObj.game_id}`} passHref>
          <Button
            style={{
              width: '14rem', border: '3px solid black', margin: 'auto', marginTop: '25px',
            }}
            type="button"
            className="btn btn-success"
          >Edit Game
          </Button>
        </Link>
        <br />
        <Button style={{ width: '14rem', border: '3px solid black', margin: 'auto' }} type="button" className="btn btn-primary">
          <Link href={`/gamerank/${gameObj.game_id}`} passHref>
            View Details
          </Link>
          <br />
        </Button>
        <Button
          style={{
            width: '14rem', border: '3px solid black', margin: 'auto', marginTop: '25px',
          }}
          variant="danger"
          onClick={deleteThisGame}
        >
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
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default GameRankCard;
