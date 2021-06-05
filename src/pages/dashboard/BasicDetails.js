import React, { useState } from 'react';

import default_user from '../../assets/images/default_user.svg';
import UserImage from '../../components/UserImage';
import birthday from '../../assets/images/dashboard/birthday.svg';
import github from '../../assets/images/dashboard/github.svg';
import linkedin from '../../assets/images/dashboard/linkedin.svg';
import resume from '../../assets/images/dashboard/resume.svg';
import team from '../../assets/images/dashboard/team.svg';
import batch from '../../assets/images/dashboard/batch.svg';
import edit from '../../assets/images/dashboard/edit.svg';
import { BasicDetailsModal } from './modals/BasicDetailsModal';
import { Row } from './components/Row';

export const BasicDetails = ({ user }) => {
  const [modalShow, setModalShow] = useState(false);

  const DEFAULT_DOB = '-- N/A --';
  const DEFAULT_GROUP_NAME = '-- N/A --';
  const DEFAULT_BATCH = '-- N/A --';

  const [userBasicDetails] = useState({
    name: user.name ? user.name : '',
    github_url: user.github_url ? user.github_url : '',
    linkedin_url: user.linkedin_url ? user.linkedin_url : '',
    resume_url: user.resume_url ? user.resume_url : '',
    dob: user.dob ? user.dob : '',
  });

  return (
    <div
      className="d-flex flex-column shadow profile-card"
      style={{ maxWidth: '330px', height: 'fit-content' }}
    >
      <div className="profile-img-bg">{user.username}</div>
      <div className="mx-4">
        <div className="d-flex flex-wrap align-items-start justify-content-between">
          <div>
            <UserImage
              src={user.image_url ? user.image_url : default_user}
              alt={`Shrishti's profile`}
              className="profile-img"
            />
          </div>
          <div className="pt-3">
            <a href={user.github_url} target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt={github}
                className="pl-3"
                height="27px"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <a
              href={user.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt={linkedin}
                className="pl-3"
                height="27px"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <a href={user.resume_url} target="_blank" rel="noopener noreferrer">
              <img
                src={resume}
                alt={resume}
                className="pl-3"
                height="27px"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>
        <h1 className="h5 my-2 font-weight-bold">{user.name}</h1>
        <div className="py-1">
          <Row icon={birthday} value={user.dob ? user.dob : DEFAULT_DOB} />
          <Row
            icon={team}
            value={`Team : ${
              user.group_name ? user.group_name : DEFAULT_GROUP_NAME
            }`}
          />
          <Row
            icon={batch}
            value={`Batch : ${user.batch ? user.batch : DEFAULT_BATCH}`}
          />
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ cursor: 'pointer' }}
        >
          <img src={edit} alt="edit" onClick={() => setModalShow(true)} />
        </div>
      </div>
      {modalShow && (
        <BasicDetailsModal
          modalProps={{ show: modalShow, onHide: () => setModalShow(false) }}
          userBasicDetails={userBasicDetails}
          id={user.id}
        />
      )}
    </div>
  );
};
