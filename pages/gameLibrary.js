import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import GameRankCard from '../components/cards/GameRankCard';
import { getGames } from '../api/gameData';

function GameLibrary() {
  const [games, setGames] = useState([]);
  const { user } = useAuth();

  const getAllGames = () => {
    getGames(user.uid).then(setGames);
  };

  useEffect(() => {
    getAllGames();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-center my-4">
      <Link href="/gamerank/new" passHref>
        <Button style={{
          height: '60px', width: '1000px', margin: '50px', fontSize: '30px',
        }}
        >Add A Game
        </Button>
      </Link>
      <div className="d-flex flex-wrap">
        {games.map((game) => (
          <GameRankCard key={game.firebaseKey} gameObj={game} onUpdate={getAllGames} />
        ))}
      </div>
    </div>
  );
}

export default GameLibrary;
