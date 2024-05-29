import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import GameRankCard from '../components/cards/GameRankCard';
import { getRanks } from '../components/api/rankData';

function Home() {
  const [ranks, setRanks] = useState([]);
  const { user } = useAuth();

  const getAllRanks = () => {
    getRanks(user.uid).then(setRanks);
  };

  useEffect(() => {
    getAllRanks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-center my-4">
      {/* <Link href="/member/new" passHref>
        <Button>Add A Member</Button>
      </Link> */}
      <div className="d-flex flex-wrap">
        {ranks.map((rank) => (
          <GameRankCard key={rank.firebaseKey} rankObj={rank} onUpdate={getAllRanks} />
        ))}
      </div>

    </div>
  );
}

export default Home;
