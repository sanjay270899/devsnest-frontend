import React, { useState } from 'react';

import default_user from '../../assets/images/default_user.png';
import UserImage from '../Layout/UserImage';
import EditScrum from './EditScrum';
import { CheckButton, StarRating, YesNoButton } from './ScrumButtons';

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
                postScrumData({ ...question, attendance: newValue }, index);
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
            className="text-truncate"
            style={{ margin: '1px 1px', cursor: 'pointer' }}
            onClick={() => setModalShow(true)}
          >
            {limitForStr(question.name || 'No Name', 8)}
          </div>
        </div>

        <EditScrum
          question={question}
          updateQuestion={(newData) => updateQuestions(index, newData)}
          show={modalShow}
          postScrumData={postScrumData}
          onHide={() => setModalShow(false)}
          index={index}
        />
      </td>

      <td>
        <div className="d-flex align-content-center justify-content-center">
          <YesNoButton
            size={'sm'}
            value={question.saw_last_lecture || false}
            onChange={() => {}}
            disabled={true}
          ></YesNoButton>
        </div>
      </td>

      <td className="text-truncate" style={{ maxWidth: '90px' }}>
        {question.tha_progress}
      </td>

      <td className="text-truncate" style={{ maxWidth: '90px' }}>
        {question.topics_to_cover}
      </td>

      <td className="text-truncate" style={{ maxWidth: '90px' }}>
        {question.backlog_reasons}
      </td>

      <td>
        <StarRating
          value={question.class_rating || 0}
          onChange={() => {}}
          disabled={true}
          size={20}
        ></StarRating>
      </td>
    </tr>
  );
};

function limitForStr(str, limit) {
  const strLength = str.length;

  if (strLength > limit - 3) {
    return str.slice(0, 8) + '...';
  }

  return str;
}

export default TableRow;
