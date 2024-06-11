import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../components/api/userData';
import UserBioForm from '../../components/forms/UserBioForm';

export default function EditAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // eslint-disable-next-line camelcase
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleUser(firebaseKey).then(setEditItem);
  // eslint-disable-next-line camelcase
  }, [firebaseKey]);

  return (<UserBioForm obj={editItem} />);
}
