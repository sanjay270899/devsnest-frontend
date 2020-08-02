import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from '../config/axios.config';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';

import Image from '../images/dummy.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50,
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 1000,
    },
  },

  title: {

    marginTop: '5%',
    fontSize: '300%',
    textAlign: 'center',
    fontWeight: 500,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },

  From: {
    width: '25ch',
    margin: 'auto',
  },

  Field: {
    width: 370,
    padding: theme.spacing(1),
  },

  list: {
    position: 'absolute',
    padding: theme.spacing(2),
    fontSize: '20px',
    marginLeft: '5%',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
}));

type State = {
  name: string;
  email: string;
  aboutMe: string;
  github: string;
  institution: string;
};
function SettingPage() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const [userUpdate, setUserUpdate] = useState({
    name: '',
    email: '',
    aboutMe: '',
    github: '',
    institution: '',
  });
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(Image);

  const handleChange = async (event: any) => {
    setUserUpdate({ ...userUpdate, [event.target.name]: event.target.value });
  };
  const handleImageChange = (event: any) => {
    handleUpload(event.target.files[0]);
  };
  // Setting profile

  const handleUpload = async (file: any) => {
    let token: string = localStorage.getItem('Token') || '';
    if (token != '') {
      const formData = new FormData();
      formData.append('profileImage', file);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .post('api/users/uploadProfileImage', formData, config)
        .then((res) => {
          setImage(res.data.data.ImageUri);
        });
    }
  };

  // Setting GET

  let token: string = localStorage.getItem('Token') || '';
  let userData: State | null = null;
  async function fetchMyAPI() {
    if (token !== '') {
      const res = await axios.get(`/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      if (data !== {}) {
        userData = {
          name: data.data.userData.name,
          email: data.data.userData.email,
          aboutMe: data.data.userData.aboutMe,
          github: data.data.userData.github,
          institution: data.data.userData.institution,
        };
        setUserUpdate(userData);
      }


    }
  }


  useEffect(() => {
    fetchMyAPI();
  }, []);


  // Setting POST
  const submit = async (e: any) => {
    let token: string = localStorage.getItem('Token') || '';
    setLoading(true);
    if (token != '') {

      await axios
        .post('/api/users', userUpdate, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setLoading(false);

        })
        .catch((e) => {});
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className={classes.title}>Account Setting</div>

          <div style={{ marginLeft: '25%' }}>
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <div>
                <img
                  src={image}
                  style={{
                    width: '150px',
                    borderRadius: '50%',
                    height: '150px',
                  }}
                  alt="img"
                />
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: 'flex' }}
                />
              </div>
            )}
          </div>

          <Paper className={classes.paper}>
            <div className={classes.list}>
              <Box p={3} bgcolor="background.paper">
                Name
              </Box>
              <Box p={3} bgcolor="background.paper">
                Email
              </Box>
              <Box p={3} bgcolor="background.paper">

                About Me
              </Box>
              <Box p={3} bgcolor="background.paper">
                GitHub

              </Box>
              <Box p={3} bgcolor="background.paper">
                Institution
              </Box>
            </div>

            <div>
              <form
                className={classes.From}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(submit)}
              >
                <TextField
                  className={classes.Field}
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  error={!!errors.name}
                  value={userUpdate.name}
                  inputRef={register({ required: true, maxLength: 20 })}
                  onChange={handleChange}
                />
                <div style={{ color: 'red' }}>
                  {' '}
                  {errors.name && <p>This field is required</p>}
                </div>
                <TextField
                  className={classes.Field}
                  id="outlined-basic"
                  label="email"
                  name="email"
                  variant="outlined"
                  value={userUpdate.email}
                  error={!!errors.email}
                  onChange={handleChange}
                  inputRef={register({
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <p style={{ color: 'red' }}>
                  {errors.email && 'Invalid email address'}
                </p>

                <TextField
                  className={classes.Field}
                  id="aboutMe"
                  label="aboutMe"
                  name="aboutMe"
                  error={!!errors.aboutMe}
                  variant="outlined"
                  value={userUpdate.aboutMe}
                  inputRef={register({ required: true, maxLength: 20 })}
                  onChange={handleChange}
                />
                <div style={{ color: 'red' }}>
                  {' '}
                  {errors.aboutMe && <p>This field is required</p>}
                </div>
                <TextField
                  className={classes.Field}
                  id="github"

                  label="github"

                  name="github"
                  variant="outlined"
                  error={!!errors.github}
                  value={userUpdate.github}
                  inputRef={register({ required: true, maxLength: 20 })}
                  onChange={handleChange}
                />
                <div style={{ color: 'red' }}>
                  {' '}
                  {errors.github && <p>This field is required</p>}
                </div>
                <TextField
                  className={classes.Field}
                  id="institution"
                  label="institution"
                  name="institution"
                  variant="outlined"
                  error={!!errors.institution}
                  value={userUpdate.institution}
                  inputRef={register({ required: true, maxLength: 20 })}
                  onChange={handleChange}
                />
                <div style={{ color: 'red' }}>
                  {' '}
                  {errors.institution && <p>This field is required</p>}
                </div>
                <Button
                  disabled={loading}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {loading && <CircularProgress size={14} />}
                  {!loading && 'UPDATE'}
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SettingPage;
