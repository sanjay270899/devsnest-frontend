import React from 'react';

import default_user from '../../assets/images/default_user.svg';
import UserImage from '../../components/UserImage';
import birthday from '../../assets/images/dashboard/birthday.svg';
import github from '../../assets/images/dashboard/github.svg';
import linkedin from '../../assets/images/dashboard/linkedin.svg';
import resume from '../../assets/images/dashboard/resume.svg';
import team from '../../assets/images/dashboard/team.svg';
import batch from '../../assets/images/dashboard/batch.svg';

export const BasicDetails = () => {
  return (
    <div
      className="d-flex flex-column shadow profile-card"
      style={{ maxWidth: '350px', height: 'fit-content' }}
    >
      <div className="profile-img-bg">canjian#0987</div>
      <div className="mx-4">
        <div className="d-flex flex-wrap align-items-start justify-content-between">
          <div>
            {' '}
            <UserImage
              src={default_user}
              alt={`Shrishti's profile`}
              className="profile-img"
            />
          </div>
          <div className="pt-3">
            <img
              src={github}
              alt={github}
              className="pl-3"
              style={{ cursor: 'pointer' }}
            />
            <img
              src={linkedin}
              alt={linkedin}
              className="pl-3"
              style={{ cursor: 'pointer' }}
            />
            <img
              src={resume}
              alt={resume}
              className="pl-3"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <h1 className="h5 my-2 font-weight-bold">Shrishti</h1>
        <h5 className="h6 text-muted my-2">
          <img src={birthday} alt={birthday} />
          <span className="px-3">14th May 2000</span>
        </h5>
        <h5 className="h6 text-muted my-2">
          <img src={team} alt={team} />
          <span className="px-3">Team : Sentinels vanl vlanvla vnakla</span>
        </h5>
        <h5 className="h6 text-muted my-2">
          <img src={batch} alt={batch} />
          <span className="px-3">Batch : Summer 2021</span>
        </h5>
      </div>
    </div>
  );
};
