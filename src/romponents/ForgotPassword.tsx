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
import { Link, Redirect } from 'react-router-dom';

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
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [reload, setReload] = useState(false);

  const [email, setEmail] = useState({
    email: '',
  });

  const submit = async (e: any) => {
    e.preventDefault();
    let token: string = localStorage.getItem('Token') || '';
    console.log('insise submit otp');

    if (token == '') {
      await axios
        .post('/api/auth/generateotp', email, {})
        .then((response) => {
          setShowOtpInput(true);
        })
        .catch((error) => {
          console.log(error, 'errorrrr');
        });
    }
  };

  const handleChange = (event: any) => {
    setEmail({ ...email, [event.target.name]: event.target.value });
  };
  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmitOtp = () => {
    const data: any = {
      email: email.email,
      otp: otp,
    };
    console.log('insise submit otp');
    axios
      .post('/api/auth/verifyotp', data)
      .then((response) => {
        if (response.data && response.data.data && response.data.data.token) {
          localStorage.setItem('Token', response.data.data.token);
          setReload(true);
        } else {
          alert('wrong OTP');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (reload) {
    let token: string = localStorage.getItem('Token') || '';
    console.log(token);
    console.log('reload', reload);
    return <Redirect to={'/'} />;
  }
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
                value={email.email}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={submit}
              >
                Send OTP
              </Button>
            </form>

            {showOtpInput ? (
              <form noValidate autoComplete="off" onSubmit={handleSubmitOtp}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="OTP"
                  label="OTP"
                  name="OTP"
                  autoComplete="OTP"
                  autoFocus
                  value={otp}
                  onChange={handleChangeOtp}
                />

                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleSubmitOtp}
                >
                  Enter OTP
                </Button>
              </form>
            ) : null}

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
