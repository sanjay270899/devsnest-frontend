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
            background: '#1c484a',
            width: '100%',
            borderRadius: '200px',
            // height: '150px',
          }}
        >
          <p style={{ fontSize: '35px', fontWeight: 'bold', color: '#fff' }}>
            {' '}
            Batch 2 registration starts 1st October, 2020
          </p>

          <Button
            style={{
              color: '#000',
              background: '#f4b400',
              fontSize: '20px',
              width: '',
              borderRadius: '10px',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Apply Now
          </Button>
        </div>
      </Container>
    </div>
  );
}
