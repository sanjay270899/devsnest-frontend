import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from '../config/axios.config';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
function Login() {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const [isLogin, setIsLogin] = useState(false);

  const handleSignup = () => {
    axios

      .post('api/auth/login', userLogin)
      .then((response) => {
        localStorage.setItem('Token', response.data.data.jwtToken);

        setIsLogin(!isLogin);
      })
      .catch((error) => {});
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: 'User',
      action: 'logged in an Account',
    });
    handleSignup();
  };
  if (isLogin) {
    return <Redirect to="/curriculum" />;
  }
  const handleChange = (event: any) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h4" style={{ textAlign: 'center' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
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
            defaultValue={userLogin.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={userLogin.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
          <Typography gutterBottom>
            <Link
              style={{
                marginLeft: '38%',
                textDecoration: 'none',
              }}
              to="ForgotPassword"
            >
              Forgot your password?
            </Link>
          </Typography>
        </form>
      </Container>
    </div>
  );
}

export default Login;
