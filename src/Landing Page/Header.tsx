import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import '../CSS/Landingpage.css';

export default function Header() {
  return (
    <Navbar
      expand="md"
      variant="dark"
      style={{
        background: '#1c484a',
      }}
      className="header"
    >
      <Navbar.Brand
        href="#home"
        style={{ padding: '5px', fontWeight: 'bold', fontSize: '25px' }}
      >
        Devsnest :-)
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link
            href="#link"
            style={{
              backgroundColor: '#F1A615',
              clipPath: 'polygon(31% 0, 100% 0, 100% 100%, 0% 100%)',
              alignItems: 'center',
              height: '50px ',
              width: '100px',
              paddingLeft: '30px',
            }}
          >
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
