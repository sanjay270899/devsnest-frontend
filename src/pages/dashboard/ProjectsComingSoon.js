import React from 'react';
import groupIcon from '../../assets/images/dashboard/group.svg';

export const ProjectsComingSoon = () => {
  return (
    <div
      className="shadow user-detail-card px-2 py-4 d-flex flex-column justify-content-center align-items-center m-3"
      style={{ width: '350px' }}
    >
      <img src={groupIcon} alt="group-icon" width="200px" />
      <p className="mt-3 mb-0">Projects section coming soon...</p>
    </div>
  );
};
