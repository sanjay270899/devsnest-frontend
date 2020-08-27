import React from 'react';
import { Grid } from '@material-ui/core';

import Header from '../../romponents/Header';
import Container from '@material-ui/core/Container';
import MenteeDialog from './MenteeDialog';
import MenteeCard from './MenteeCard';

const MenteeComponent = ({ handleSubmit, getMentee }) => {
  return (
    <div>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Student Feedback</h1>
        <Grid container style={{ paddingTop: '20px' }}>
          <Grid item md={1}>
            <MenteeDialog handleSubmit={handleSubmit} getMentee={getMentee} />
          </Grid>
          <Grid item md={11}>
            <MenteeCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MenteeComponent;
