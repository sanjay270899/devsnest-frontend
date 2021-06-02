import React from 'react';

import academicLevel from '../../assets/images/dashboard/academicLevel.svg';
import branch from '../../assets/images/dashboard/branch.svg';
import college from '../../assets/images/dashboard/college.svg';
import session from '../../assets/images/dashboard/session.svg';
import year from '../../assets/images/dashboard/year.svg';

export const AcademicDetails = () => {
  return (
    <div className="d-flex flex-column shadow user-detail-card ml-5 py-3 px-1">
      <div className="profile-img-bg" />

      <div className="mx-4" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="h5 my-2 font-weight-bold mb-3">Academic Details:</h1>
        <h5 className="h6 text-muted my-2">
          <img src={academicLevel} alt={academicLevel} />
          <span className="px-2">Undergraduate</span>
        </h5>
        <h5 className="h6 text-muted my-2">
          <img src={college} alt={college} />
          <span className="px-2">IIT Bhubaneswar</span>
        </h5>
        <h5 className="h6 text-muted my-2">
          <img src={branch} alt={branch} />
          <span className="px-2"> Electronics & Communication Engg.</span>
        </h5>
        <h5 className="h6 text-muted my-2">
          <img src={session} alt={session} />
          <span className="px-2"> 2018 - 2022</span>
        </h5>
        <h5 className="h6 text-muted my-2">
          <img src={year} alt={year} />
          <span className="px-2"> 3rd year</span>
        </h5>
      </div>
    </div>
  );
};
