import React, { useEffect, useState } from 'react';
import Componentgbu from './Componentgbu';
import axios from '../config/axios.config';
type State = {
  description: string;
};
const Containergbu = () => {
  const [gbu, setGbu] = useState([]);
  const [userGbu, setUserGbu] = useState({
    description: '',
  });
  const token: string = localStorage.getItem('Token') || '';
  console.log(token);
  const fetchDetails = async () => {
    if (token !== '') {
      const res = await axios.get('/api/users/gbu', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      setGbu(data.data);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const addGbu = (item: any) => {
    const newgbu = {
      description: item,
    };
    setUserGbu(newgbu);
  };
  const handlePost = () => {
    axios
      .post('api/users/gbu', userGbu, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handlePost();
  }, [userGbu]);
  return (
    <div>
      <Componentgbu gbu={gbu} addGbu={addGbu} />
    </div>
  );
};

export default Containergbu;
