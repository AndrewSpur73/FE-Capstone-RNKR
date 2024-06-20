/* eslint-disable react/jsx-closing-tag-location */
import { useEffect, useState } from 'react';
import Head from 'next/head';
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
    <><Head>
      <title>RNKR</title>
    </Head>
      <div className="text-center my-4">
        <h1 style={{
          fontSize: '100px', marginBottom: '100px', textAlign: 'center', color: 'white',
        }}
        >CURRENT RANKS
        </h1>
        <div className="content">
          {games
            .filter((game) => game.ranked) // Filter games where ranked is true
            .map((game) => (
              <GameRankCard key={game.game_id} gameObj={game} onUpdate={getAllGames} />
            ))}
        </div>
      </div>
    </>

  );
}

export default Home;
