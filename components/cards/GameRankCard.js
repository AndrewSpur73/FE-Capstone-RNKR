import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getSingleRank } from '../api/rankData';
// import Link from 'next/link';
// import { deleteMember } from '../api/memberData';

function GameRankCard({ gameObj }) {
  const [rank, setRank] = useState({});
  // const deleteThisGame = () => {
  //   if (window.confirm(`Delete ${memberObj.full_name}?`)) {
  //     deleteMember(memberObj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  useEffect(() => {
    getSingleRank(gameObj.rank_id).then(setRank);
  }, [gameObj]);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={gameObj.image} alt={gameObj.game_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{gameObj.game_name}</Card.Title>
        <Card.Title>{rank?.rank_name}</Card.Title>
        {/* <Link href={`/member/edit/${gameObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link> */}
        <Button variant="danger" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

GameRankCard.propTypes = {
  gameObj: PropTypes.shape({
    image: PropTypes.string,
    game_name: PropTypes.string,
    rank_id: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default GameRankCard;
