import React from 'react';
import { useSelector } from 'react-redux';

// Images export

import { BasicDetails } from './BasicDetails';
import { AcademicDetails } from './AcademicDetails';
import { ProblemsDetails } from './ProblemsDetails';
import { ActivityMap } from './ActivityMap';
import useAuth from '../../hooks/useAuth';

export default function Dashboard() {
  useAuth();
  const user = useSelector((state) => state.loginState.user);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 92px)',
        backgroundColor: '#F2EFF7',
        padding: '2rem 3rem',
      }}
    >
      <div
        className="d-flex m-auto flex-wrap justify-content-center"
        style={{ width: 'fit-content' }}
      >
        {/* Left */}
        <div className="p-4">
          <BasicDetails user={user} />
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
