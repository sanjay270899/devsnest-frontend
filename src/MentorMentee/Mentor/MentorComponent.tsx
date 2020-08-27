import React from 'react';
import { Grid } from '@material-ui/core';
// import GbuCard from './GbuCard';
import Header from '../../romponents/Header';
import Container from '@material-ui/core/Container';
import MentorDialog from './MentorDialog';
import MentorCard from './MentorCard';
// import FormDialog from './GbuDialog';

const MentorComponent = ({ handleSubmit, getMentor }) => {
  return (
    <div>
      <Container>
        <Grid container style={{ paddingTop: '20px' }}>
          <Grid item md={1}>
            <MentorDialog handleSubmit={handleSubmit} getMentor={getMentor} />
          </Grid>
          <Grid item md={11}>
            <MentorCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MentorComponent;
