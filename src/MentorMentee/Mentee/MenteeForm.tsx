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

const MenteeForm = ({ getMentee, handleSubmit, handleClose }) => {
  const [menteeName, setMenteeName] = useState(0);
  const [extraFeedback, setExtraFeedback] = useState('');
  const [efforts, setEffort] = useState('');
  const [understand, setUnderstand] = useState('');

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMenteeName(event.target.value as number);
  };
  const handleChangeFeedback = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setExtraFeedback(event.target.value as string);
  };
  const handleChangeEffort = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEffort(event.target.value as string);
  };
  const handleChangeUnderstand = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setUnderstand(event.target.value as string);
  };
  const mentee = {
    menteeId: menteeName,
    feedback: extraFeedback,
    effort: efforts,
    understanding: understand,
  };
  const handleClick = () => {
    handleSubmit(mentee);
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
    <div>
      <Card style={{ width: '100%', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>StudentFeedback Form</h1>

        <CardContent>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Your Mentee Name
            </InputLabel>
            <Select
              style={{ width: '500px' }}
              id="demo-simple-select-outlined"
              value={menteeName}
              onChange={handleChangeName}
              label="Your Mentor Name"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {getMentee.map((item, index) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Does s/he understand what s/he solved in the last week?
            </InputLabel>
            <Select
              style={{ width: '500px' }}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={understand}
              onChange={handleChangeUnderstand}
              label="Does s/he understand what s/he solved in the last week?"
            >
              <MenuItem value={'Green'}>Green</MenuItem>
              <MenuItem value={'Yellow'}>Yellow</MenuItem>
              <MenuItem value={'Red'}>Red</MenuItem>
            </Select>
          </FormControl>{' '}
          <HtmlTooltip
            title={
              <React.Fragment>
                <b>Green</b> - is able to solve all the questions and
                understands the concept.
                <br />
                <b>Yellow</b> - has doubts but knows the topic, and can solve
                some questions again.
                <br />
                <b>Red</b> - no cannot solve most of the last week questions
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
            <InputLabel id="demo-simple-select-outlined-label">
              Has you mentee put in effort?
            </InputLabel>
            <Select
              style={{ width: '500px' }}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={efforts}
              onChange={handleChangeEffort}
              label="Has you mentee put in effort?"
            >
              <MenuItem value={'Green'}>Green</MenuItem>
              <MenuItem value={'Yellow'}>Yellow</MenuItem>
              <MenuItem value={'Red'}>Red</MenuItem>
            </Select>
          </FormControl>
          <HtmlTooltip
            title={
              <React.Fragment>
                <b>Green</b> - 30-40 hrs (roughly 20+ questions, depends on
                question type and difficulty)
                <br />
                <b>Yellow</b> - 20-30 hrs (roughly 10-18 questions, depends on
                level)
                <br />
                <b>Red</b> -15-20 hrs (roughly 6-10 questions, depends on level)
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
              label="Any other Feedback"
              multiline
              rows={4}
              value={extraFeedback}
              onChange={handleChangeFeedback}
              variant="outlined"
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
export default MenteeForm;
