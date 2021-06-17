import React, { useState } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import mysearch from './Searchbar.module.css'

export default function SearchBar({ onSearch }) {

  const [name, setName] = useState('');

  const onButtonClick = (e) => {
    e.preventDefault();
    onSearch(name);
    setName('');

  }


  return (
    <div className={mysearch["searchbar"]}>
      <form onSubmit={onButtonClick}>
        <Form.Control
          type='name'
          placeholder='Please enter City Name'
          value={name}
          className={mysearch["searchForm"]}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>

        <Button
          type='submit'
          variant='primary'
          className={mysearch["searchbutton"]}
        >
          Search
        </Button>
      </form>
    </div>
  )
};