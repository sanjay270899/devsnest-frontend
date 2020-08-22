import React, { useState, useEffect } from 'react';
import MenteeFeedbackForm from './MenteeFeedbackForm';
import axios from '../../config/axios.config';
import Header from '../../romponents/Header';

const ContainerMenteeFeedbackForm = () => {
  const [mentee, setMentee] = useState({});
  const [getMentee, setGetMentee] = useState([]);
  const token: string = localStorage.getItem('Token') || '';
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
  const handleSubmit = (item: any) => {
    setMentee(item);
    PostDetails();
  };
  const PostDetails = () => {
    axios
      .post('api/feedback/addStudentFeedback', mentee, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data.isFeedbackAdded) {
          alert('The studentFeedback Form is submitted successfully');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div>
      <Header />
      <MenteeFeedbackForm getMentee={getMentee} handleSubmit={handleSubmit} />
    </div>
  );
};
export default ContainerMenteeFeedbackForm;
