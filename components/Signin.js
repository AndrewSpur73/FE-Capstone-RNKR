import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: '#7d3422' }}>Welcome to RNKR</h1>
      <p style={{ color: '#7d3422' }}>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
