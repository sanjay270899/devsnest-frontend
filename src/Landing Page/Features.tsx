import React from 'react';
import '../CSS/Landingpage.css';
import { Image, Card, Row, Col, Container } from 'react-bootstrap';
export default function Features() {
  return (
    <div className="feature">
      <Container>
        <h1 style={{ textAlign: 'center', fontSize: '50px' }}>
          PROGRAM FEATURES
          <hr
            style={{
              textAlign: 'center',
              width: '100px',
              fontWeight: 'bolder',
              height: '5px',
              backgroundColor: '#528789',
            }}
          />
        </h1>
        <Row style={{ margin: '0px' }}>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                // boxShadow: "5px 8px #c1c1c1 ",
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>Live classes everyday </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>Peer based learning</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>Personalized guidance and support</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ margin: '0px' }}>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>Mock Interviews By industry experts</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>
                  Enhancement classes to match student's pace
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>
                  Project driven curriculum. (10+ projects in 6 months)
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ margin: '0px' }}>
          <Col md="2"></Col>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>Sessions by industry experts</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card
              style={{
                height: '5rem',
                margin: '20px',
                borderRadius: '20px',
                boxShadow: '5px 8px #c1c1c1 ',
              }}
            >
              <Card.Body>
                <Card.Title>
                  Carrer counselling, Introspection and soft skills
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
