import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Container,
} from 'reactstrap';
import { Progress } from 'reactstrap';
import logo from '../images/logopng.png';

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            <Card style={{ backgroundColor: '#1C484A', color: '#FFFFFF' }}>
              <Row className="no-gutters">
                <Col md="8">
                  <CardBody>
                    <CardTitle>Algorithm</CardTitle>

                    <CardText>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </CardText>
                    <button className="btn btn-danger"> Explore </button>

                    <Progress color="info" value={50} />
                  </CardBody>
                </Col>
                <Col md="4">
                  <CardImg
                    top
                    src={logo}
                    // alt="Card image cap"
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md="6">
            <Card>
              <Row className="no-gutters">
                <Col md="8">
                  <CardBody>
                    <CardTitle>Card title</CardTitle>

                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button class="btn btn-danger"> komal</Button>
                  </CardBody>
                </Col>
                <Col md="4">
                  <CardImg
                    top
                    src={logo}
                    // alt="Card image cap"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
