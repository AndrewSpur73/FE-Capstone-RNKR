/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getGames } from '../api/gameData';
import GameCard from './GameCard';

export default function UserCard() {
  const [games, setGames] = useState([]);
  const { user } = useAuth();

  const getAllGames = () => {
    getGames(user.uid).then(setGames);
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <Card
      className="d-flex justify-content-center align-items-center border-black-2"
      style={{
        width: 'auto', margin: '30px', background: 'grey', border: '5px solid black',
      }}
    >
      <Card.Img
        variant="top"
        src={user.photoURL}
        alt="profile picture"
        style={{
          height: '200px', width: '200px', marginTop: '30px', border: '5px solid black',
        }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center align-items-center">{user.displayName}</Card.Title>
        <p className="card-text bold d-flex justify-content-center align-items-center">Last Login: {user.metadata.lastSignInTime}</p>
        <div style={{
          width: 'auto', margin: '50px', background: 'grey',
        }}
        >
          <h2 style={{
            textAlign: 'center', textDecoration: 'underline',
          }}
          >Saved Game Ranks
          </h2>
          <div className="d-flex flex-wrap">
            {games.map((game) => (
              <GameCard key={game.game_id} gameObj={game} onUpdate={getAllGames} />
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
