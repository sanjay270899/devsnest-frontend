import React from 'react';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import Background from '../images/back3.jpg';

export default function PaymentPlan() {
  return (
    <Container>
      <h1 style={{ padding: '50px', textAlign: 'center', fontSize: '50px' }}>
        Payment Plan
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
      <Row>
        <Col md="6">
          <Card
            style={{
              height: '500px',
              borderRadius: '20px',
              background: 'rgba(187, 228, 221, 0.35)',
              fontWeight: 'bold',
            }}
          >
            <Card
              style={{
                height: '150px',
                borderRadius: '20px',
                boxShadow: '2px 2px #DAE0E2 ',
              }}
            >
              <Card.Title
                style={{
                  textAlign: 'center',
                  backgroundImage: `url(${Background})`,
                  height: '50%',
                  width: '100%',
                  color: '#fff',
                  borderRadius: '20px',
                }}
              >
                <p style={{ paddingTop: '20px' }}>POST-PAID</p>
              </Card.Title>
              <br />
              <Card.Subtitle style={{ textAlign: 'center' }}>
                <span
                  style={{
                    textDecoration: 'line-through',
                    textDecorationColor: 'red',
                  }}
                >
                  2,00,000
                </span>
                &nbsp; 1,50,000 /-
              </Card.Subtitle>
            </Card>
            <Card.Text
              className="card-text Text"
              style={{ fontWeight: 'bold', padding: '20px' }}
            >
              <p>Total Fees: 2,00,000 + GST </p>
              <p>
                {' '}
                Registration fees: 20,000 (+18% GST) Non-refundable, paid
                upfront
              </p>
              <p>
                Tuition Fee Portion: 1,30,000 + GST Pay only when you get a job
                of min 5 LPA
              </p>
              <p>
                Pay using monthly payments: 15% of your monthly salary capped at
                130000 + GST.
              </p>
              <p>
                ISA Breach Recovery Cheque 50,000 Executed only in the case of
                ISA Breach
              </p>
            </Card.Text>
          </Card>
        </Col>

        <Col md="6">
          <Card
            style={{
              height: '500px',
              borderRadius: '20px',
              background: 'rgba(187, 228, 221, 0.35)',
              fontWeight: 'bold',
            }}
          >
            <Card
              style={{
                height: '150px',
                borderRadius: '20px',
                boxShadow: '2px 2px #DAE0E2 ',
              }}
            >
              <Card.Title
                style={{
                  textAlign: 'center',
                  backgroundImage: `url(${Background})`,
                  height: '50%',
                  width: '100%',
                  color: '#fff',
                  borderRadius: '20px',
                }}
              >
                <Row>
                  <Col md="10">
                    <p style={{ paddingTop: '20px' }}>PRE-PAID</p>
                  </Col>
                  <Col style={{ position: 'absolute' }}>
                    <div className="mr-auto">
                      <Card
                        style={{
                          background: '#fff',
                          color: '#0A79DF',
                          width: '100px',
                          // left: "440px",
                          top: '20px',
                        }}
                      >
                        50% off
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Card.Title>
              <br />
              <Card.Subtitle style={{ textAlign: 'center' }}>
                <span
                  style={{
                    textDecoration: 'line-through',
                    textDecorationColor: 'red',
                  }}
                >
                  1,60,000
                </span>
                &nbsp; 80,000 /-
              </Card.Subtitle>
            </Card>
            <Card.Text
              className="card-text Text"
              style={{ fontWeight: 'bold', padding: '20px' }}
            >
              <p>Total Fees: 1,60,000 + GST </p>
              <p>Discount for early batches: 80,000</p>
              <p> Use this option to completely skip the ISA model</p>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
