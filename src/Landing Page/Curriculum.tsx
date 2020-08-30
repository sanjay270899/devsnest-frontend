import React from 'react';
import '../CSS/Landingpage.css';
import { Carousel, Image, Card, Row, Col } from 'react-bootstrap';
import vedansh from '../images/vedansh.jpg';
import sai from '../images/sai.png';
import prachi from '../images/prachi.png';

export default function Curriculum() {
  return (
    <>
      <h1 style={{ padding: '20px', textAlign: 'center', fontSize: '50px' }}>
        Curriculum
      </h1>
      <Carousel className="curriculum">
        <Carousel.Item>
          <Row style={{ padding: '20px', margin: '0px' }}>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title>Weeks 1-6</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Algorithms and Data Structures with 150+ problems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title> Weeks 7-13</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Learning Web development basics such as HTML, CSS,
                    JavaScript and GIT with hands-on projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title>Weeks 14-18</Card.Title>

                  <Card.Text>
                    Getting expertise in writing React through multiple
                    industry-level project and one major project
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row style={{ padding: '20px', margin: '0px' }}>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title>Weeks 19-24</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Covering up CS Fundamentals and principles of System Design
                    and Choosing and Working on your Industry grade Capstone
                    project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title> Weeks 25-30 </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Starting up with your mock interviews from well know
                    Industry experts and Connecting you with various companies
                    and scheduling your interviews.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title>Weeks 14-18</Card.Title>

                  <Card.Text>
                    Getting expertise in writing React through multiple
                    industry-level project and one major project
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row style={{ padding: '20px', margin: '0px' }}>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title>Weeks 1-6</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Algorithms and Data Structures with 150+ problems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title> Weeks 7-13</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Learning Web development basics such as HTML, CSS,
                    JavaScript and GIT with hands-on projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ height: '20rem' }}>
                <Card.Body>
                  <Card.Title>Weeks 14-18</Card.Title>

                  <Card.Text>
                    Getting expertise in writing React through multiple
                    industry-level project and one major project
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
