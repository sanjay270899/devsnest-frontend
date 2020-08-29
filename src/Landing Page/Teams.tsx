import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import vedansh from '../images/vedansh.jpg';
import sai from '../images/sai.png';
import prachi from '../images/prachi.png';

export default function Teams() {
  return (
    <div
      style={{
        paddingTop: '125px',
        paddingBottom: '120px',
        background: '#c1c1c1',
      }}
      id="team"
    >
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '60px',
          textAlign: 'center',
          color: '#1c484a',
        }}
      >
        Meet The Team
      </h1>
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Meet the people behind Devnest. Super Cool team of super cool platform!
      </p>
      <Container>
        <Row style={{ padding: '0px', margin: '0px' }}>
          <Col md="4">
            <Image
              fluid
              src={vedansh}
              roundedCircle
              style={{ height: '200px', width: '250px' }}
            />
          </Col>
          <Col md="4">
            <Image
              fluid
              src={sai}
              roundedCircle
              style={{ height: '200px', width: '250px' }}
            />
          </Col>
          <Col md="4">
            <Image
              fluid
              src={prachi}
              roundedCircle
              style={{ height: '200px', width: '250px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
