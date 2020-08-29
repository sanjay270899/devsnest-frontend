import React from 'react';
import '../CSS/Landingpage.css';
import Teams from './Teams';
import Header from './Header';
import Curriculum from './Curriculum';
import Features from './Features';
import Batch from './Batch';
import { Button, Container } from 'react-bootstrap';
const MainPage = () => {
  return (
    <>
      <div className="landing">
        <Header />
        <div className="overlay">
          <div
            style={{ color: '#fff', textAlign: 'center', paddingTop: '250px' }}
            className="insidetext"
          >
            <h1 style={{ fontWeight: 'bold', fontSize: '80px' }}>
              Rev@mp Learning
            </h1>
            <br />

            <p style={{ fontSize: '20px' }}>
              We aim to make young India financially self-sustainable by
              providing equal opportunity for all.
            </p>
            <br />
            <Button
              style={{
                padding: '10px',
                margin: '0px',
                borderRadius: '10px',
                textAlign: 'center',
                fontSize: '25px',
                backgroundColor: '#F0B102',
                fontWeight: 'bold',
                color: '#000',
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      <Features />
      <Curriculum />
      <Batch />
      <Teams />
    </>
  );
};
export default MainPage;
