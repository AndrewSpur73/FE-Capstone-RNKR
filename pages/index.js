import { useEffect, useState } from 'react';
import { getGames } from '../components/api/gameData';
import { useAuth } from '../utils/context/authContext';
import GameRankCard from '../components/cards/GameRankCard';

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
      {/* <Link href="/member/new" passHref>
        <Button>Add A Member</Button>
      </Link> */}
      <div className="d-flex flex-wrap">
        {games.map((game) => (
          <GameRankCard key={game.firebaseKey} gameObj={game} onUpdate={getAllGames} />
        ))}
      </div>

    </div>
  );
}

export default Home;
