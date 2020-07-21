import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProfileCard from './ProfileCard';
import Header from './Header';
import RecentActivity from './RecentActivity';
import image from '../images/dummy.png';
import axios from '../config/axios.config';
import {} from '../config/axios.config';
const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  let token: string = localStorage.getItem('Token') || '';
  console.log(token);

  const fetchDetails = async () => {
    if (token !== '') {
      const res = await axios.get(`/api/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res);
      // const profileData = data.data.map((item: any) => {
      //   const data = {
      //     name: item.name,
      //     email: item.email,
      //     about: item.aboutMe,
      //     submissiondata: item.subMission,
      //   };
      //   return data;
      // });
      // setUserData(profileData);
      // console.log(userData);
    }
  };
  useEffect(() => {
    fetchDetails();
  });
  return (
    <div>
      <Header />
      <Grid container style={{ padding: '20px' }}>
        <Grid item md={4}>
          <img src={image} alt="profile" style={{ borderRadius: '100%' }} />
          <p>Name</p>
          <p>About</p>
          <Typography>Links</Typography>
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
