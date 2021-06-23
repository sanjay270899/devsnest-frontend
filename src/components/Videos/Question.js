import React, { useState } from 'react';

import styles from '../../assets/css/videos.module.scss';
import { submitQuestion } from '../../services/submission';
import icons from '../../utils/getIcons';
import myLog from '../../utils/myLog';
import {
  getQuestionColor,
  getQuestionTypeIcon,
} from '../../utils/questionConstant';

export const Question = ({ question, setVideos, video_id }) => {
  const QUESTION_TYPE_IMG = getQuestionTypeIcon(
    question.question_type || question.type
  );
  const QUESTION_DIFFICULTY_COLOR = getQuestionColor(question.difficulty);
  const QUESTION_STATUS_IMG =
    question.status === 'done'
      ? icons.question_tick
      : question.status === 'doubt'
      ? icons.question_doubt
      : icons.question_solve;
  const [disableQuestionSubmission, setDisableQuestionSubmission] = useState(
    false
  );

  const onSubmitQuestion = async (question_unique_id, status) => {
    let status_ = '';
    if (status === 'notdone') {
      // 1
      status = 2; // doubt
      status_ = 'doubt';
    } else if (status === 'doubt') {
      // 2
      status = 0; // done
      status_ = 'done';
    } else if (status === 'done') {
      // 0
      status = 1; // notdone
      status_ = 'notdone';
    }
    setDisableQuestionSubmission(true);
    try {
      await submitQuestion({ question_unique_id, status });
      setVideos((current) =>
        current.map((video) => {
          if (video.id === video_id) {
            const newArr = video.questions.map((q) => {
              if (q.unique_id === question_unique_id) {
                return { ...q, status: status_ };
              }
              return q;
            });
            return { ...video, questions: newArr };
          }
          return video;
        })
      );
    } catch (err) {
      myLog(err);
    }
    setDisableQuestionSubmission(false);
  };

  return (
    <div className={`d-flex align-items-center ${styles['questions']}`}>
      <div
        className={`${styles['img']}`}
        style={{ backgroundColor: QUESTION_DIFFICULTY_COLOR }}
      >
        <img
          src={QUESTION_TYPE_IMG}
          alt={question.question_type}
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
        {question.name || question.title}
      </a>
      <div className={`${styles['img']}`}>
        {question.question_type ? (
          <img
            src={QUESTION_STATUS_IMG}
            alt={question.status}
            height="30px"
            width="30px"
            onClick={() =>
              disableQuestionSubmission
                ? null
                : onSubmitQuestion(question.unique_id, question.status)
            }
          />
        ) : (
          <a href={question.link} target="_blank" rel="noreferrer">
            <img
              src={QUESTION_STATUS_IMG}
              alt={question.status}
              height="30px"
              width="30px"
            />
          </a>
        )}
      </div>
    </div>
  );
};
