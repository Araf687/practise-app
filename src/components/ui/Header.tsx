import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchText);
  };

  return (
    <Navbar bg="light" expand="lg" className='px-4'>
      <Navbar.Brand href="#home">Practise App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/certificates">Certificates</Nav.Link>
        </Nav>
        <Form onSubmit={handleSearchSubmit} className='d-flex'>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchText}
            onChange={handleSearchChange}
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
