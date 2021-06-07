import React from 'react';
import groupIcon from '../../assets/images/dashboard/group.svg';

export const ProjectsComingSoon = () => {
  return (
    <div className="shadow user-detail-card px-2 py-4 my-3 d-flex justify-content-center d-flex flex-column align-items-center">
      <img src={groupIcon} alt="group-icon" width="200px" />
      <p className="mt-3">Projects section coming soon...</p>
    </div>
  );
};
