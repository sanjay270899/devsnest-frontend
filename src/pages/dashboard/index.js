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
      className="p-1 py-3 pt-5"
      style={{
        minHeight: 'calc(100vh - 92px)',
        backgroundColor: '#F2EFF7',
      }}
    >
      <div
        className="d-flex m-auto flex-wrap justify-content-center"
        style={{ maxWidth: '1300px' }}
      >
        {/* Left */}
        <div className="p-3 d-flex flex-column">
          <BasicDetails user={user} />
          <ProjectsComingSoon />
        </div>

        {/* Right */}
        <div className="d-flex flex-column" style={{ width: 'fit-content' }}>
          <div className="d-flex flex-wrap justify-content-center">
            <AcademicDetails user={user} />
            <ProblemsDetails user={user} />
          </div>
          <ActivityMap user={user} />
        </div>
      </div>
    </div>
  );
}
