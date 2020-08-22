import React, { useState, useEffect } from 'react';
import MentorFeedbackForm from './MentorFeedbackForm';
import axios from '../../config/axios.config';
import Header from '../../romponents/Header';
type State = {
  mentorId: number;
  extraFeedback: string;
  timeGiven: string;
  problemSolved: string;
};
const ContainerMentorFeedbackForm = () => {
  const [mentor, setMentor] = useState({});
  const [getMentor, setGetMentor] = useState([]);
  const handleSubmit = (item: State) => {
    setMentor(item);
    PostDetails();
  };
  const token: string = localStorage.getItem('Token') || '';
  const fetchDetails = async () => {
    if (token !== '') {
      const res = await axios.get('/api/users/mentor', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      setGetMentor(data.data);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  const PostDetails = () => {
    axios
      .post('api/feedback/addMentorFeedback', mentor, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data.isFeedbackAdded) {
          alert('The Mentor Feedback Form is submitted successfully');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <MentorFeedbackForm handleSubmit={handleSubmit} getMentor={getMentor} />
    </div>
  );
};
export default ContainerMentorFeedbackForm;
