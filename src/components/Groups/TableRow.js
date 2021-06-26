import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import default_user from '../../assets/images/default_user.png';
import UserImage from '../Layout/UserImage';

import { StarRating, YesNoButton, CheckButton } from './ScrumButtons';
import { Table, Modal, Container, Row, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import icons from '../../utils/getIcons';
import NoGroupData from './NoGroupData';
import EditScrum from './EditScrum';

const TableRow = ({
  updateQuestions,
  question,
  index,
  isTeamOwner,
  postScrumData,
}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="mx-1 my-1">
            <CheckButton
              value={question.attendance}
              isTeamOwner={isTeamOwner}
              onChange={(newValue) => {
                updateQuestions(index, { attendance: newValue });
                postScrumData({ ...question, attendance: newValue });
              }}
            ></CheckButton>
          </div>

          <div className="mx-1 my-1">
            <UserImage
              style={{
                margin: '1px 1px',
                display: 'flex',
                flexDirection: 'row',
                height: '30px',
                width: '30px',
                borderRadius: '100px',
              }}
              src={question.avatar || default_user}
              alt=""
            />
          </div>

          <div
            style={{ margin: '1px 1px', cursor: 'pointer' }}
            onClick={() => setModalShow(true)}
          >
            {limitForStr(question.name || 'No Name', 'name')}
          </div>
        </div>

        <EditScrum
          question={question}
          updateQuestion={(newData) => updateQuestions(index, newData)}
          show={modalShow}
          postScrumData={postScrumData}
          onHide={() => setModalShow(false)}
        />
      </td>

      <td>
        <div className="d-flex align-content-center justify-content-center">
          <YesNoButton
            size={'sm'}
            value={question.saw_last_lecture || false}
            onChange={(newValue) => {
              updateQuestions(index, { saw_last_lecture: newValue });
            }}
          ></YesNoButton>
        </div>
      </td>

      <td>{question.tha_progress}</td>

      <td>{question.topics_to_cover}</td>

      <td>{question.backlog_reasons}</td>

      <td>
        <StarRating
          value={question.class_rating || 0}
          onChange={(newValue) => {
            updateQuestions(index, { class_rating: newValue });
          }}
          size={20}
        ></StarRating>
      </td>
    </tr>
  );
};

function limitForStr(str, option) {
  let strLength = str.length;

  if (strLength > 9 && option === 'name') {
    let res = str.slice(0, 8);

    return res + '...';
  }

  if (strLength > 18 && option === 'other') {
    let res = str.slice(0, 17);

    return res + '...';
  }

  return str;
}

export default TableRow;
