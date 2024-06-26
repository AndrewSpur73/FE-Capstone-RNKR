/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserMenu() {
  const { user } = useAuth();
  const router = useRouter();

  const userProfile = () => {
    router.push('/profile');
  };

  return (
    <Dropdown align="end" navbar="true" className=" last:mt-auto">
      <Dropdown.Toggle style={{ borderColor: '#7d3422' }} className="border-3 bg-transparent">
        <img src={user.photoURL} alt={`${user.displayName}`} style={{ height: '75px', width: '75px' }} className="rounded-full" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="rounded-lg">
        <Dropdown.Item onClick={userProfile}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
