import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';




const Search = ({ searched }) => {
  const [inputed, setInputed] = useState("");
  

  const onSearch = (e) => {
    setInputed(e);
    searched(e);
  }

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search "
        className="me-2"  
        aria-label="Search"
        onChange={(e) => onSearch(e.target.value)}
          value={inputed}
      />
      <Button variant="outline-danger">Search</Button>
    </Form>
  )
}

export default Search;