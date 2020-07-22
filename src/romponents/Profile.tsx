import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProfileCard from './ProfileCard';
import Header from './Header';
import RecentActivity from './RecentActivity';
import image from '../images/dummy.png';
import axios from '../config/axios.config';
import {} from '../config/axios.config';

interface IState {
  name: string;
  email: string;
  aboutMe: string;
  github: string;
  institution: string;
  subMission: {
    subMissionFrequency: [
      {
        key: string;
        value: string;
      }
    ];
    lastSubmissions: [
      {
        name: string;
      }
    ];
  };
}

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    aboutMe: '',
    github: '',
    institution: '',
    subMission: {
      subMissionFrequency: [
        {
          key: '',
          value: '',
        },
      ],
      lastSubmissions: [
        {
          name: '',
        },
      ],
    },
  });
  let token: string = localStorage.getItem('Token') || '';
  // console.log(token);
  let userData = {};
  const fetchDetails = async () => {
    if (token !== '') {
      const res = await axios.get(`/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;

      // console.log(data.data.userData.name);
      userData = {
        name: data.data.userData.name,
        email: data.data.userData.email,
        aboutMe: data.data.userData.aboutMe,
        github: data.data.userData.github,
        institution: data.data.userData.institution,
        subMission: {
          subMissionFrequency:
            data.data.userData.subMission.subMissionFrequency,
          lastSubmissions: data.data.userData.subMission.subMissionFrequency,
        },
      };
      /* @ts-ignore */
      setProfileData({ ...profileData, userData });
    }
  };
  console.log(profileData);
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      <Header />
      <Grid container style={{ padding: '20px' }}>
        <Grid item md={4}>
          <div style={{ borderRadius: '100%' }}>
            <img src={image} alt="profile" />
          </div>
          <Typography variant="body1">USERNAME</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam qui
            magnam aspernatur nostrum veniam nihil corrupti
          </Typography>
          <Typography variant="body1">Links</Typography>
        </Grid>
        <Grid item md={8}>
          <Typography component="div" style={{ padding: '20px' }}>
            <ProfileCard />
          </Typography>
          <Typography component="div" style={{ padding: '20px' }}>
            <RecentActivity />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default Profile;
