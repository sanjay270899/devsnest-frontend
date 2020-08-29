import React, { useState } from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import { withStyles, Theme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

const MentorForm = ({ handleSubmit, getMentor, handleClose }) => {
  const [mentorName, setMentorName] = useState('');
  const [extraFeedback, setExtraFeedback] = useState('');
  const [timeGiven, setTimeGiven] = useState('');
  const [problemSolved, setProblemSolved] = useState('');
  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMentorName(event.target.value as string);
  };
  const handleChangeFeedback = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setExtraFeedback(event.target.value as string);
  };
  const handleChangeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimeGiven(event.target.value as string);
  };
  const handleChangeProblem = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setProblemSolved(event.target.value as string);
  };
  const mentor = {
    mentorId: mentorName,
    feedback: extraFeedback,
    timeGiven: timeGiven,
    capability: problemSolved,
  };
  const handleClick = () => {
    handleSubmit(mentor);
    handleClose();
  };
  const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 500,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
  return (
    <div style={{ position: 'relative' }}>
      <Card style={{ maxWidth: '100%', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>Mentor Feedback Form</h1>

        <CardContent>
          <FormControl variant="outlined">
            <InputLabel>Your Mentor Name</InputLabel>
            <Select
              style={{ width: '500px' }}
              id="demo-simple-select-outlined"
              value={mentorName}
              onChange={handleChangeName}
              label="Your Mentor Name"
            >
              {getMentor ? (
                <MenuItem value={getMentor.mentorId}>
                  {getMentor.mentorName}
                </MenuItem>
              ) : (
                <div></div>
              )}
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <FormControl variant="outlined">
            <InputLabel>
              Has your mentor given you sufficient time last week?
            </InputLabel>
            <Select
              style={{ width: '500px' }}
              id="demo-simple-select-outlined"
              value={timeGiven}
              onChange={handleChangeTime}
              label=" Has your mentor given you sufficient time last week?"
            >
              <MenuItem value={'Green'}>Green</MenuItem>
              <MenuItem value={'Yellow'}>Yellow</MenuItem>
              <MenuItem value={'Red'}>Red</MenuItem>
            </Select>
          </FormControl>
          <HtmlTooltip
            title={
              <React.Fragment>
                <b>Green </b>- 3 or 3+ sessions
                <br />
                <b>Yellow </b>- 2 sessions
                <br />
                <b>Red </b>- 1 session.
                <br />
              </React.Fragment>
            }
            arrow
          >
            <InfoIcon />
          </HtmlTooltip>
          <br />
          <br />
          <FormControl variant="outlined">
            <InputLabel>Is your mentor able to solve your doubt?</InputLabel>
            <Select
              style={{ width: '500px' }}
              id="demo-simple-select-outlined"
              value={problemSolved}
              onChange={handleChangeProblem}
              label="Is your mentor able to solve your doubt?"
            >
              <MenuItem value={'Green'}>Green</MenuItem>
              <MenuItem value={'Yellow'}>Yellow</MenuItem>
              <MenuItem value={'Red'}>Red</MenuItem>
            </Select>
          </FormControl>
          <HtmlTooltip
            title={
              <React.Fragment>
                <b>Green</b> - Gives really good suggestions and solves all of
                my doubts.
                <br />
                <b>Yellow</b> - is able to solve my doubt and provides
                suggestions half the times.
                <br />
                <b>Red </b>- I don't understand anything.
                <br />
              </React.Fragment>
            }
            arrow
          >
            <InfoIcon />
          </HtmlTooltip>
          <br />
          <br />
          <FormControl variant="outlined">
            <TextField
              style={{ width: '500px' }}
              id="outlined-multiline-static"
              label="Any other feedback"
              value={extraFeedback}
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChangeFeedback}
            />
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={handleClick}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default MentorForm;
