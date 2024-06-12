/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container,
  Image,
} from 'react-bootstrap';
import UserMenu from './UserMenu';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ fontSize: '30px' }}>
      <div>
        <Link passHref href="/">
          <Image src="/images/logo.png" alt="RNKR" height={100} width={100} className="cursor-pointer" style={{ marginLeft: '100px' }} />
        </Link>
        <Link passHref href="/">
          <Navbar.Brand style={{
            fontSize: '50px', margin: '30px',
          }}
          >RNKR
          </Navbar.Brand>
        </Link>
        <Link passHref href="/">
          <Navbar.Brand style={{ fontSize: '50px' }}>FRIENDS</Navbar.Brand>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Container />
      <UserMenu style={{ display: 'flex', justifyContent: 'flex-end' }} />
    </Navbar>
  );
}
