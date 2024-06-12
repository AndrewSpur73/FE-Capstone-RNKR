import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import GameRankCard from '../components/cards/GameRankCard';
import { getGames } from '../api/gameData';

function Home() {
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
        <Button style={{ width: '14rem', border: '3px solid black', marginBottom: '50px' }}>Add A Game Rank</Button>
      </Link>
      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => (
          <GameRankCard key={game.game_id} gameObj={game} onUpdate={getAllGames} />
        ))}
      </div>

    </div>
  );
}

export default Home;
