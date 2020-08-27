import React, { useState, useEffect } from 'react';
import axios from '../../config/axios.config';
import Header from '../../romponents/Header';
import MenteeComponent from './MenteeComponent';

const ContainerMenteeFeedbackForm = () => {
  const [getMentee, setGetMentee] = useState([]);
  const token: string = localStorage.getItem('Token') || '';

  const handleSubmit = (item: any) => {
    // console.log(item);
    PostDetails(item);
  };
  const PostDetails = (payload) => {
    axios
      .post('api/feedback/addStudentFeedback', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data.isFeedbackAdded) {
          alert('The studentFeedback Form is submitted successfully');
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const fetchDetails = async () => {
      if (token !== '') {
        const res = await axios.get('/api/users/mentee', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = res;
        setGetMentee(data.data.mentee);
      }
    };
    fetchDetails();
  }, [token]);
  return (
    <div>
      <Header />
      <MenteeComponent getMentee={getMentee} handleSubmit={handleSubmit} />
    </div>
  );
};
export default ContainerMenteeFeedbackForm;
