import React from 'react';

import styles from '../../assets/css/videos.module.scss';
import icons from '../../utils/getIcons';
import {
  getQuestionColor,
  getQuestionTypeIcon,
} from '../../utils/questionConstant';

export const Question = ({ question }) => {
  const QUESTION_TYPE_IMG = getQuestionTypeIcon(
    question.type || question.question_type
  );
  const QUESTION_DIFFICULTY_COLOR = getQuestionColor(question.difficulty);
  const QUESTION_STATUS_IMG =
    question.status === 'solved'
      ? icons.question_tick
      : question.status === 'doubt'
      ? icons.question_doubt
      : icons.question_solve;

  return (
    <div className={`d-flex align-items-center ${styles['questions']}`}>
      <div
        className={`${styles['img']}`}
        style={{ backgroundColor: QUESTION_DIFFICULTY_COLOR }}
      >
        <img
          src={QUESTION_TYPE_IMG}
          alt={question.type}
          height="30px"
          width="30px"
        />
      </div>
      <a
        href={question.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles['title']}`}
      >
        {question.title || question.name}
      </a>
      <div className={`${styles['img']}`}>
        <img
          src={QUESTION_STATUS_IMG}
          alt={question.status}
          height="30px"
          width="30px"
        />
      </div>
    </div>
  );
};
