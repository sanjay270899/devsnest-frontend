import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { BasicDetails } from './BasicDetails';
import { ProjectsComingSoon } from './ProjectsComingSoon';
import { AcademicDetails } from './AcademicDetails';
import { ProblemsDetails } from './ProblemsDetails';
import { ActivityMap } from './ActivityMap';
import useAuth from '../../hooks/useAuth';

export default function Dashboard() {
  useAuth();
  const user = useSelector((state) => state.loginState.user);

  return (
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
  );
}
