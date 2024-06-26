/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteGame } from '../../api/gameData';
import viewGameDetails from '../../api/mergedData';

export default function ViewGame() {
  const [gameDetails, setGameDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  const deleteThisGame = () => {
    if (window.confirm('Delete Game?')) {
      deleteGame(gameDetails.game_id).then(() => router.push('/'));
    }
  };

  useEffect(() => {
    viewGameDetails(firebaseKey).then(setGameDetails);
  }, []);

  return (
    <Card style={{ width: '30rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameDetails.image} alt={gameDetails.game_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>Game: {gameDetails.game_name}</Card.Title>
        <Card.Title>Favorite Game:  {gameDetails.favorite ? ' Yes' : ' No'}</Card.Title>
        <Card.Title>Console: {gameDetails.console}</Card.Title>
        <Card.Title>{gameDetails.rankObject ? `Current Rank: ${gameDetails.rankObject?.rank_name}` : '' } </Card.Title>
        <Card.Title> {gameDetails.rankObject?.image ? <img src={gameDetails.rankObject?.image} alt={gameDetails.rankObject?.rank_name} style={{ height: '200px', width: '200px' }} /> : ''}</Card.Title>
        <Card.Title>Description: {gameDetails.description}</Card.Title>
        <Link href={`/gamerank/edit/${gameDetails.game_id}`} passHref>
          <Button type="button" className="btn btn-success">Edit Game Rank</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisGame} className="m-2">
          Delete Game
        </Button>
      </Card.Body>
    </Card>
  );
}
