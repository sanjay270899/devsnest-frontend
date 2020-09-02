import React from 'react';
import { Button, Container } from 'react-bootstrap';
export default function Batch() {
  return (
    <div
      style={{
        padding: '50px',
      }}
      id="footer"
    >
      <Container>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
            background: 'rgb(166,92,105)',
            width: '100%',
            borderRadius: '20px',
            // height: '150px',
          }}
        >
          <p
            style={{
              fontFamily: 'initial',
              fontSize: '35px',
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            {' '}
            Batch 2 registration starts 1st October, 2020
            <Button
              style={{
                color: '#000',
                background: '#f4b400',
                fontSize: '20px',
                width: '',
                borderRadius: '10px',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginLeft: '30px',
              }}
            >
              Apply Now
            </Button>
          </p>
        </div>
      </Container>
    </div>
  );
}
