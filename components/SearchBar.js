import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState({ search: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      router.push(`/search/${searchInput.search}`);
    } else {
      router.push('/');
    }
    setSearchInput('');
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit} style={{ height: '50px', width: '400px' }}>
      <Form.Control
        type="search"
        key="game_id"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="search"
        value={searchInput.search}
        onChange={handleChange}
      />
    </Form>
  );
}
