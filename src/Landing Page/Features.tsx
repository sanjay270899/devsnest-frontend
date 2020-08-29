import React from 'react';
import '../CSS/Landingpage.css';
import { Image, Card, Row, Col, Container } from 'react-bootstrap';
export default function Features() {
  return (
    <div className="feature">
      <h1 style={{ padding: '20px', textAlign: 'center', fontSize: '50px' }}>
        PROGRAM FEATURES
      </h1>
      <Row style={{ margin: '0px' }}>
        <Col md="4">
          <Card
            style={{
              height: '10rem',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>projects for a splendid resume.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card
            style={{
              height: '10rem',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>
                Industry exposure through interactive sessions and live
                projects.
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card
            style={{
              height: '10rem',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>
                Industry exposure through interactive sessions and live
                projects.
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ margin: '0px    ' }}>
        <Col md="4">
          <Card
            style={{
              height: '10rem',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>projects for a splendid resume.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card
            style={{
              height: '10rem',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>
                Industry exposure through interactive sessions and live
                projects.
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card
            style={{
              height: '10rem',
              margin: '20px',
              borderRadius: '20px',
            }}
          >
            <Card.Body>
              <Card.Title>
                Industry exposure through interactive sessions and live
                projects.
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
