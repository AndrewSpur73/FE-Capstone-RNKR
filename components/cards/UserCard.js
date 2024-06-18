/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';

import GameCard from './GameCard';
import { getGames } from '../../api/gameData';

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
        width: 'auto',
        margin: '30px',
        background: '#483f52',
        border: '15px solid black',
        fontWeight: 'bolder',
      }}
    >
      <Card.Title style={{
        textAlign: 'center', textDecoration: 'underline', fontWeight: 'bolder', marginTop: '50px', fontSize: '75px', color: '#e87021',
      }}
      >My Profile
      </Card.Title>
      <Card.Img
        variant="top"
        src={user.photoURL}
        alt="profile picture"
        style={{
          height: '200px',
          width: '200px',
          marginTop: '30px',
          border: '5px solid black',
        }}
      />
      <Card.Body style={{ color: '#e87021' }}>
        <Card.Title className="d-flex justify-content-center align-items-center">{user.displayName}</Card.Title>
        <p className="card-text bold d-flex justify-content-center align-items-center">Last Login: {user.metadata.lastSignInTime}</p>

        <div
          style={{
            width: 'auto',
            margin: '50px',
            background: 'grey',
          }}
        />
        <h2
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            fontWeight: 'bolder',
          }}
        >
          Saved Game Ranks
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          {games.map((game) => (
            <GameCard key={game.game_id} gameObj={game} onUpdate={getAllGames} />
          ))}
        </div>

      </Card.Body>
    </Card>
  );
}
