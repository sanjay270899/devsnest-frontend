import React from 'react';

// Images export

import UserDashboard from '../UserDashboard';
import { BasicDetails } from './BasicDetails';
import { AcademicDetails } from './AcademicDetails';
import { ProblemsDetails } from './ProblemsDetails';
import { ActivityMap } from './ActivityMap';

export default function Dashboard() {
  return (
    <>
      <div
        style={{
          minHeight: 'calc(100vh - 92px)',
          backgroundColor: '#F2EFF7',
          padding: '3rem',
        }}
      >
        <div
          className="d-flex m-auto flex-wrap"
          style={{ width: 'fit-content' }}
        >
          {/* Left */}
          <BasicDetails />

          {/* Right */}
          <div className="d-flex flex-column" style={{ width: 'fit-content' }}>
            <div className="d-flex flex-wrap">
              <AcademicDetails />
              <ProblemsDetails />
            </div>
            <ActivityMap />
          </div>
        </div>
      </div>
      <UserDashboard />
    </>
  );
}
