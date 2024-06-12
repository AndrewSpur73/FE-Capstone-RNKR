/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import GameRankCard from '../../components/cards/GameRankCard';
import { searchGames } from '../../api/gameData';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();

  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = async () => {
    const filteredResults = await searchGames(searchInput, user.uid);
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchInput, user.uid]);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {searchResults.length === 0
          ? (<h1>No games found.</h1>)
          : (searchResults.map((results) => (
            <GameRankCard key={results.firebaseKey} gameObj={results} onUpdate={getSearchResults} />)))}
      </div>
    </div>
  );
}
