import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
const NavbarItem = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <img alt="" src="./OC_New_logo.png" width="200px" height="40px  " />{' '}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarItem;
