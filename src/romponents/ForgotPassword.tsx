import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import OTPInput from 'react-otp-input';
import OtpInput from 'react-otp-input';
import axios from '../config/axios.config';
import { Link } from 'react-router-dom';

import { constants } from 'buffer';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 200,
    textAlign: 'center',
  },

  title: {
    fontSize: 28,
  },
  BackText: {
    marginTop: 30,
  },
});

export default function ForgotPassword() {
  const classes = useStyles();

  const [otp, setOTP] = useState({
    email: '',
  });

  const submit = async (e: any) => {
    e.preventDefault();
    let token: string = localStorage.getItem('Token') || '';

    if (token != '') {
      await axios
        .post('/api/auth/generateotp', otp, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response, 'dataaaaaaaa');
        })
        .catch((error) => {
          console.log(error, 'errorrrr');
        });
    }
  };

  const handleChange = (event: any) => {
    setOTP({ ...otp, [event.target.name]: event.target.value });
  };

  console.log(otp);
  return (
    <div>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Forgot Password
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              No Problem! Enter your email or username below and we will send
              you an email with instruction to reset your password.
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={otp.email}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={submit}
              >
                Send Reset Link
              </Button>
              <OtpInput
                inputStyle={{
                  margin: '20px 1rem',
                  fontSize: '2rem',
                  borderRadius: 4,
                  border: '2px solid rgba(0,0,0,0.3)',
                }}
                numInputs={6}
                separator={<span>-</span>}
                shouldAutoFocus
                otpType="number"
                isInputNum={true}
              />
            </form>

            <Typography gutterBottom className={classes.BackText}>
              Back to
              <Link
                style={{ marginLeft: '10px', textDecoration: 'none' }}
                to="Login"
              >
                Login
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
