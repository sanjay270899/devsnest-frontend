import React, { useState } from 'react';

import icons from '../../utils/getIcons';
import { AcademicDetailsModal } from './AcademicDetailsModal';
import { Row } from './Row';

export const AcademicDetails = ({ user, editable }) => {
  const [modalShow, setModalShow] = useState(false);

  // Default Values
  const DEFAULT_VALUE = '-- N/A --';

  return (
    <div
      className="d-flex flex-column flex-fill shadow user-detail-card py-3 px-1 m-3"
      style={{ maxWidth: '400px' }}
    >
      <div className="mx-4" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="h5 my-2 font-weight-bold mb-3">Academic Details:</h1>
        <div className="py-1">
          <Row
            icon={icons.academic_college}
            value={user.college_name || DEFAULT_VALUE}
          />
          <Row
            icon={icons.academic_hat}
            value={user.grad_status || DEFAULT_VALUE}
          />
          <Row
            icon={icons.academic_branch}
            value={user.grad_specialization || DEFAULT_VALUE}
          />
          <Row
            icon={icons.calendar_start}
            value={`${user.grad_start || DEFAULT_VALUE} - ${
              user.grad_end || DEFAULT_VALUE
            }`}
          />
        </div>
        <div className="d-flex justify-content-end">
          {editable && (
            <img
              src={icons.edit_outline}
              alt="edit"
              onClick={() => setModalShow(true)}
              style={{ cursor: 'pointer' }}
              height="20px"
              width="20px"
            />
          )}
        </div>
      </div>
      {modalShow && (
        <AcademicDetailsModal
          modalProps={{ show: modalShow, onHide: () => setModalShow(false) }}
          user={user}
          id={user.id}
        />
      )}
    </div>
  );
};
