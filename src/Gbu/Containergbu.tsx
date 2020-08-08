import React, { useEffect, useState } from 'react';
import Componentgbu from './Componentgbu';
import axios from 'axios';

const Containergbu = () => {
  const [gbu, setGbu] = useState([[]]);

  const token: string = localStorage.getItem('Token') || '';
  console.log(token);
  const fetchDetails = async () => {
    if (token !== '') {
      const res = await axios.get('/allGbu', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      console.log(data);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      <Componentgbu />
    </div>
  );
};

export default Containergbu;
