import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from '../config/axios.config';
import { Redirect } from 'react-router-dom';
function Login() {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const [isLogin, setIsLogin] = useState(false);

  const handleSignup = () => {
    axios
      .post('api/auth/login', userLogin)
      .then((response) => {
        console.log(response);
        localStorage.setItem('Token', response.data.data.jwtToken);
        setIsLogin(!isLogin);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(userLogin);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSignup();
  };
  if (isLogin) {
    return <Redirect to="/" />;
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
        </form>
      </Container>
    </div>
  );
}

export default Login;
