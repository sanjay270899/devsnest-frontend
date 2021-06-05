import React, { useState } from 'react';

import branch from '../../../assets/images/dashboard/branch.svg';
import college from '../../../assets/images/dashboard/college.svg';
import year from '../../../assets/images/dashboard/year.svg';
import save from '../../../assets/images/dashboard/save.svg';
import degree from '../../../assets/images/dashboard/academicLevel.svg';

import { Modal } from 'react-bootstrap';
import myLog from '../../../utils/myLog';
import { API_ENDPOINTS } from '../../../constants/api';
import axios from '../../../config/axios.config';

export const AcademicDetailsModal = ({
  modalProps,
  userAcademicDetails,
  id,
}) => {
  const handleSumbit = () => {
    myLog(details);

    axios
      .put(
        `${API_ENDPOINTS.UPDATE_USER}/${id}`,
        {
          data: {
            id: id.toString(),
            type: 'users',
            attributes: details,
          },
        },
        {
          headers: {
            'content-type': 'application/vnd.api+json',
          },
        }
      )
      .then((response) => {
        myLog('response from api: ', response);
        if (
          response.data &&
          response.data.data &&
          response.data.data.attributes
        ) {
          myLog('User Detail Updated');
        }
        modalProps.onHide();
      })
      .catch((err) => {
        myLog('error from api: ', err);
        modalProps.onHide();
      });
  };

  const [details, setDetails] = useState(userAcademicDetails);

  return (
    <Modal
      {...modalProps}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: '#E3D2FF' }}>
        <Modal.Title id="contained-modal-title-vcenter font-weight-bold">
          Academic Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="d-flex flex-column align-items-center"
          style={{
            maxHeight: '30vh',
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
        >
          <div className="m-2 my-3 px-3 d-flex align-items-center w-100">
            <img src={college} alt="college-icon" height="25px" width="25px" />
            <input
              type="text"
              className="p-2 ml-3 w-100"
              value={details.college_name}
              onChange={(e) =>
                setDetails({ ...details, college_name: e.target.value })
              }
              style={{
                boxShadow: '0px 0px 10px #8264B433',
                border: '0.800000011920929px solid #D6CCE6',
                borderRadius: '13px',
              }}
              placeholder="Enter your College"
            />
          </div>
          <div className="m-2 my-3 px-3 d-flex align-items-center w-100">
            <img src={degree} alt="degree-icon" height="25px" width="25px" />
            <input
              type="text"
              className="p-2 ml-3 w-100"
              value={details.grad_status}
              onChange={(e) =>
                setDetails({ ...details, grad_status: e.target.value })
              }
              style={{
                boxShadow: '0px 0px 10px #8264B433',
                border: '0.800000011920929px solid #D6CCE6',
                borderRadius: '13px',
              }}
              placeholder="Enter your degree"
            />
          </div>
          <div className="m-2 my-3 px-3 d-flex align-items-center w-100">
            <img src={branch} alt="branch-icon" height="25px" width="25px" />
            <input
              type="text"
              className="p-2 ml-3 w-100"
              value={details.grad_specialization}
              onChange={(e) =>
                setDetails({ ...details, grad_specialization: e.target.value })
              }
              style={{
                boxShadow: '0px 0px 10px #8264B433',
                border: '0.800000011920929px solid #D6CCE6',
                borderRadius: '13px',
              }}
              placeholder="Enter your Branch"
            />
          </div>
          <div className="m-2 my-3 px-3 d-flex align-items-center w-100">
            <img src={year} alt="year-icon" height="25px" width="25px" />
            <input
              type="number"
              min="0"
              max="10"
              className="p-2 ml-3 w-100"
              value={details.grad_year}
              onChange={(e) =>
                setDetails({ ...details, grad_year: e.target.value })
              }
              style={{
                boxShadow: '0px 0px 10px #8264B433',
                border: '0.800000011920929px solid #D6CCE6',
                borderRadius: '13px',
              }}
              placeholder="Enter your current year"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <img
          src={save}
          alt="save-icon"
          className="mx-2"
          height="35px"
          onClick={() => handleSumbit()}
        />
      </Modal.Footer>
    </Modal>
  );
};
