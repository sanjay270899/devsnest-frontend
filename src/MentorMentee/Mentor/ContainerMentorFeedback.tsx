import React, { useState, useEffect } from 'react';
import axios from '../../config/axios.config';
import Header from '../../romponents/Header';
import MentorComponent from './MentorComponent';
type State = {
  mentorId: number;
  extraFeedback: string;
  timeGiven: string;
  problemSolved: string;
};
const ContainerMentorFeedbackForm = () => {
  const [getMentor, setGetMentor] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const handleSubmit = (item: State) => {
    console.log(item);
    PostDetails(item);
  };

  const token: string = localStorage.getItem('Token') || '';

  useEffect(() => {
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
    fetchDetails();
  }, [token]);
  const PostDetails = (payload: any) => {
    axios
      .post('api/feedback/addMentorFeedback', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data.isFeedbackAdded) {
          alert('The Mentor Feedback Form is submitted successfully');
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const getmenteefeedback = async () => {
      if (token !== '') {
        const res = await axios.get('api/feedback/getmenteefeedback', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = res;
        setFeedback(data.data);
      }
    };
    getmenteefeedback();
  }, []);
  return (
    <div>
      <Header />

      <MentorComponent
        handleSubmit={(e) => handleSubmit(e)}
        getMentor={getMentor}
        feedback={feedback}
      />
    </div>
  );
};
export default ContainerMentorFeedbackForm;
