import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AcademicDetails } from '../components/Dashboard/AcademicDetails';
import { ActivityMap } from '../components/Dashboard/ActivityMap';
import { BasicDetails } from '../components/Dashboard/BasicDetails';
import { ProblemsDetails } from '../components/Dashboard/ProblemsDetails';
import { ProjectsComingSoon } from '../components/Dashboard/ProjectsComingSoon';
import { ConnectWithDiscordBanner } from '../components/Layout/Navbar';
import { useUser } from '../redux';
import { getSessionStore, makeSessionStore } from '../utils/localStorage';

export default function Dashboard() {
  const user = useUser();
  const [basicDetailsModalShow, setBasicDetailsModalShow] = useState(false);

  useEffect(() => {
    let toastId;
    if (!getSessionStore('newUserNotification')) {
      if (user?.login_count <= 2) {
        const options = {
          onClick: () => setBasicDetailsModalShow(true),
          closeOnClick: true,
          autoClose: 10000,
        };
        toastId = toast.info(`Click here to Change Username`, options);
        makeSessionStore('newUserNotification', true);
      }
    }
    return () => {
      toast.dismiss(toastId);
    };
  }, []);
  return (
    <>
      <ConnectWithDiscordBanner />

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
            <BasicDetails
              user={user}
              editable={true}
              modalShow={basicDetailsModalShow}
              setModalShow={setBasicDetailsModalShow}
            />
            <div className="d-flex flex-wrap flex-fill justify-content-center">
              <AcademicDetails user={user} editable={true} />
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
