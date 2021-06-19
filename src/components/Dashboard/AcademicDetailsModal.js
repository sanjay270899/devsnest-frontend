import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { login } from '../../actions/loginActions';
import axios from '../../config/axios.config';
import { API_ENDPOINTS } from '../../constants/api';
import useActions from '../../hooks/useActions';
import icons from '../../utils/getIcons';
import myLog from '../../utils/myLog';

export const AcademicDetailsModal = ({ modalProps, user, id }) => {
  // State for Modal
  const [details, setDetails] = useState({
    grad_status: user.grad_status || '',
    college_name: user.college_name || '',
    grad_specialization: user.grad_specialization || '',
    grad_start: user.grad_start || '',
    grad_end: user.grad_end || '',
    grad_year: user.grad_year || '',
    registration_num: user.registration_num || '',
  });

  const actions = useActions({ login });

  const handleSumbit = async () => {
    myLog(details);

    try {
      const response = await axios.put(
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
      );
      myLog('response from api: ', response);
      if (
        response.data &&
        response.data.data &&
        response.data.data.attributes
      ) {
        actions.login(response.data.data.attributes);
        myLog('User Detail Updated');
      }
      modalProps.onHide();
    } catch (err) {
      myLog('error from api: ', err);
      modalProps.onHide();
    }
  };

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
            <img
              src={icons.academic_college}
              alt="college-icon"
              height="25px"
              width="25px"
            />
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
            <img
              src={icons.academic_hat}
              alt="degree-icon"
              height="25px"
              width="25px"
            />
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
            <img
              src={icons.academic_branch}
              alt="branch-icon"
              height="25px"
              width="25px"
            />
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
            <img
              src={icons.calendar_start}
              alt="grad-start-icon"
              height="25px"
              width="25px"
            />
            <input
              type="number"
              min="1800"
              max={new Date().getFullYear()}
              className="p-2 ml-3 w-100"
              value={details.grad_start}
              onChange={(e) =>
                setDetails({ ...details, grad_start: e.target.value })
              }
              style={{
                boxShadow: '0px 0px 10px #8264B433',
                border: '0.800000011920929px solid #D6CCE6',
                borderRadius: '13px',
              }}
              placeholder="College Start Year"
            />
          </div>
          <div className="m-2 my-3 px-3 d-flex align-items-center w-100">
            <img
              src={icons.calendar_end}
              alt="grad-end-icon"
              height="25px"
              width="25px"
            />
            <input
              type="number"
              min="1800"
              max={new Date().getFullYear()}
              className="p-2 ml-3 w-100"
              value={details.grad_end}
              onChange={(e) =>
                setDetails({ ...details, grad_end: e.target.value })
              }
              style={{
                boxShadow: '0px 0px 10px #8264B433',
                border: '0.800000011920929px solid #D6CCE6',
                borderRadius: '13px',
              }}
              placeholder="College End Year"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <img
          src={icons.save}
          alt="save-icon"
          className="mx-2"
          height="35px"
          style={{ cursor: 'pointer' }}
          onClick={() => handleSumbit()}
        />
      </Modal.Footer>
    </Modal>
  );
};
