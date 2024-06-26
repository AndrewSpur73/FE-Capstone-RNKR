import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GameRankForm from '../../../components/forms/GameRankForm';
import { getSingleGame } from '../../../api/gameData';

export default function EditAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // eslint-disable-next-line camelcase
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleGame(firebaseKey).then(setEditItem);
  // eslint-disable-next-line camelcase
  }, [firebaseKey]);

  return (<GameRankForm obj={editItem} />);
}
