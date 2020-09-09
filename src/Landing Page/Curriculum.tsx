import React from 'react';
import '../CSS/Landingpage.css';
import { Carousel, Image, Card, Row, Col } from 'react-bootstrap';
import vedansh from '../images/vedansh.jpg';
import sai from '../images/sai.png';
import prachi from '../images/prachi.png';

export default function Curriculum() {
  return (
    <div>
      <h1
        style={{ paddingTop: '100px', textAlign: 'center', fontSize: '50px' }}
      >
        CURRICULUM
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

      <Carousel className="curriculum">
        <Carousel.Item>
          <Row
            style={{ paddingTop: '50px', paddingBottom: '50px', margin: '0px' }}
          >
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title>Weeks 1-6</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Algorithms and Data Structures with 150+ problems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title> Weeks 7-8</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Learning Web development basics such as HTML, CSS,
                    JavaScript and GIT with hands-on projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title>Weeks 9-13</Card.Title>

                  <Card.Text>
                    Explore Node.js indepth through multiple industry-level
                    project and one major project
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              margin: '0px',
              borderRadius: '20px',
            }}
          >
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title>Weeks 14-18</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Getting expertise in writing React through multiple
                    industry-level project and one major project
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title>Weeks 19-20</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Covering up CS Fundamentals and principles of System Design
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title>Weeks 21</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Getting career councelling form various industry experts,
                    polishing your resumes and cover letters
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row
            style={{ paddingTop: '50px', paddingBottom: '50px', margin: '0px' }}
          >
            <Col md="4" className="ml-auto" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title> Weeks 22-24 </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Choosing and Working on your Industry grade Capstone
                    project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title>Weeks 25-27</Card.Title>

                  <Card.Text>
                    Starting up with your mock interviews from well know
                    Industry experts
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" style={{ padding: '5px' }}>
              <Card style={{ height: '10rem', borderRadius: '20px' }}>
                <Card.Body>
                  <Card.Title> Weeks 28-30</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Connecting you with various companies and scheduling your
                    interviews.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
