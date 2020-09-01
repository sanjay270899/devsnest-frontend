import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import '../CSS/Landingpage.css';
import logo from '../images/logopng.png';
export default function Header() {
  const [header, setHeader] = useState('header');
  const listenScrollEvent = (event) => {
    if (window.scrollY < 700) {
      return setHeader('header');
    } else if (window.scrollY > 70) {
      return setHeader('header2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <Navbar expand="md" variant="dark" className="header2">
      <Navbar.Brand
        href="/"
        style={{
          fontFamily: 'Quicksand',
          fontStyle: 'normal',
          fontSize: '25px',
          padding: '10px',
        }}
      >
        <Image src={logo} fluid style={{ height: '35px' }} />
        &nbsp; Devsnest
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            style={{ color: '#fff' }}
            href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit"
          >
            Apply
          </Nav.Link>
          <Nav.Link style={{ color: '#fff' }} href="/curriculum">
            Curriculum
          </Nav.Link>
          <Nav.Link
            href="/curriculum"
            className="profile"
            style={{ paddingLeft: '30px' }}
          >
            <i
              className="fa fa-user-circle-o icon"
              style={{ fontSize: '30px' }}
            >
              {' '}
            </i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
