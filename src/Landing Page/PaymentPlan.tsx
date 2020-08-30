import React from 'react';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';

export default function PaymentPlan() {
  return (
    <Container>
      <h1>PAYMENT PLAN </h1>
      <Row>
        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title>POST-PAID</Card.Title>
              <Card.Text className="card-text Text">
                <h4 className="Money text-center"> 1,50,000 /- </h4>

                <p>Total Fees: 2,00,000 + GST </p>
                <p>
                  {' '}
                  Registration fees: 20,000 (+18% GST) Non-refundable, paid
                  upfront
                </p>
                <p>
                  Tuition Fee Portion: 1,30,000 + GST Pay only when you get a
                  job of min 5 LPA
                </p>
                <p>
                  Pay using monthly payments: 15% of your monthly salary capped
                  at 130000 + GST.
                </p>
                <p>
                  ISA Breach Recovery Cheque 50,000 Executed only in the case of
                  ISA Breach
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title>POST-PAID</Card.Title>
              <Card.Text className="card-text Text">
                <h4 className="Money text-center"> 80,000 /- </h4>

                <p>Total Fees: 1,20,000 + GST 80,000 + GST </p>
                <p>
                  {' '}
                  Registration fees: 20,000 (+18% GST) Non-refundable, paid
                  upfront
                </p>
                <p>
                  Discount for early batches: 40,000 Use this option to
                  completely skip the ISA model
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
