/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
import { deleteGameRanks, viewRankDetails } from '../../components/api/mergedData';

export default function ViewBook() {
  const [rankDetails, setRankDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewRankDetails(id).then(setRankDetails);
  }, []);

  const deleteThisGameRank = () => {
    if (window.confirm('Delete Game?')) {
      deleteGameRanks(rankDetails.gameObject?.game_id).then(window.location.reload());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={rankDetails.gameObject?.image} alt={rankDetails.gameObject?.game_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{rankDetails.gameObject?.game_name}</Card.Title>
        <Card.Title>{rankDetails.rank_name}</Card.Title>
        {/* <Link href={`/member/edit/${gameObj.firebaseKey}`} passHref>
          <Button variant="info">Edit Rank Info</Button>
        </Link> */}
        <Button variant="danger" onClick={deleteThisGameRank} className="m-2">
          Delete Rank
        </Button>
      </Card.Body>
    </Card>
  );
}
