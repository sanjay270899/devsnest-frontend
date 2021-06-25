import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AcademicDetails } from '../components/Dashboard/AcademicDetails';
import { ActivityMap } from '../components/Dashboard/ActivityMap';
import { BasicDetails } from '../components/Dashboard/BasicDetails';
import { ProblemsDetails } from '../components/Dashboard/ProblemsDetails';
import { ProjectsComingSoon } from '../components/Dashboard/ProjectsComingSoon';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import { useUser } from '../redux';
import myLog from '../utils/myLog';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const currentUser = useUser();

  let history = useHistory();

  useEffect(() => {
    const loadData = async () => {
      try {
        const userRequest = await axios.get(
          `${API_ENDPOINTS.USER}/${username}/get_by_username`
        );
        setUser(userRequest.data.data.attributes);
      } catch (e) {
        setError(e.message);
        myLog(e);
      }
    };
    if (username === currentUser?.username) {
      history.push('/');
    } else {
      loadData();
    }
  }, [username, currentUser, history]);

  if (error) {
    return <div> {error} </div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="p-1 py-4"
        style={{
          minHeight: 'calc(100vh - 92px)',
          backgroundColor: '#F2EFF7',
        }}
      >
        <div
          className="d-flex flex-column m-auto justify-content-center"
          style={{ maxWidth: '1225px' }}
        >
          {/* Row 1 */}
          <div className="d-flex flex-wrap justify-content-center">
            <BasicDetails user={user} />
            <div className="d-flex flex-wrap flex-fill justify-content-center">
              <AcademicDetails user={user} />
              <ProblemsDetails user={user} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="d-flex flex-wrap justify-content-center">
            <ProjectsComingSoon />
            <ActivityMap user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
