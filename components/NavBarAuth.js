/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Image,
} from 'react-bootstrap';
import UserMenu from './UserMenu';
import SearchBar from './SearchBar';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{ fontSize: '30px', background: '#7d3422' }}>
      <div>
        <Link passHref href="/">
          <Image src="/images/logo2.png" alt="RNKR" height={100} width={100} className="cursor-pointer" style={{ marginLeft: '50px' }} />
        </Link>
        <Link passHref href="/gameLibrary">
          <Navbar.Brand style={{
            fontSize: '50px', textDecoration: 'underline', marginLeft: '50px',
          }}
          >GAME LIBRARY
          </Navbar.Brand>
        </Link>
        <Link passHref href="/gamerank/new">
          <Navbar.Brand style={{
            fontSize: '50px', textDecoration: 'underline', marginLeft: '30px',
          }}
          >NEW GAME RANK
          </Navbar.Brand>
        </Link>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <div className="searchbar">
        <SearchBar />
        <UserMenu />
      </div>
    </Navbar>
  );
}
