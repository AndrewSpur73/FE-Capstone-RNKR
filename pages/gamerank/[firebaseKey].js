/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import viewGameDetails from '../../components/api/mergedData';
import { deleteGame } from '../../components/api/gameData';

export default function ViewGame() {
  const [gameDetails, setGameDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  const deleteThisGame = () => {
    if (window.confirm('Delete Game?')) {
      deleteGame(gameDetails.game_id).then(() => router.push('/'));
    }
  };

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewGameDetails(firebaseKey).then(setGameDetails);
  }, []);

  return (
    <Card style={{ width: '30rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameDetails.image} alt={gameDetails.game_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>Game: {gameDetails.game_name}</Card.Title>
        <Card.Title>Current Rank: {gameDetails.rankObject?.rank_name}</Card.Title>
        <Card.Img variant="top" src={gameDetails.rankObject?.image} alt={gameDetails.rankObject?.rank_name} style={{ height: '200px', width: '200px' }} />
        <Card.Title>Description: {gameDetails.description}</Card.Title>
        <Link href={`/gamerank/edit/${gameDetails.game_id}`} passHref>
          <Button type="button" class="btn btn-success">Edit Game Rank</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisGame} className="m-2">
          Delete Game
        </Button>
      </Card.Body>
    </Card>
  );
}
