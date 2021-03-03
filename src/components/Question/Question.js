import React from 'react';
import './Question.scss';

import SolvedQuestion from '../../assets/images/dashboard/solved_question.png';
import UnsolvedQuestion from '../../assets/images/dashboard/solve_question.png';
import AttemptedQuestion from '../../assets/images/dashboard/retry_question.png';

const getColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case 'medium':
      return '#FFF796';
    case 'hard':
      return '#FFC89F';
    case 'easy':
      return '#92FDA9';
    default:
      return '#92FDA9';
  }
};

const getStatusImage = (status) => {
  switch (status.toLowerCase()) {
    case 'attempted':
      return AttemptedQuestion;
    case 'solved':
      return SolvedQuestion;
    case 'unsolved':
      return UnsolvedQuestion;
    default:
      return UnsolvedQuestion;
  }
};

const Question = (prop) => {
  const { title, tags, difficulty, index, status, link } = prop;

  return (
    <div className="question">
      <div className="row">
        <div className="col-xl-8 col-lg-6">
          <h1 className="question__title">
            {index}. {title}
          </h1>
          <div className="question__tags">
            {tags.map((tag) => (
              <span key={tag} class="badge question__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="question__right">
            <span
              style={{ backgroundColor: getColor(difficulty) }}
              className="badge question__right-difficulty"
            >
              {difficulty}
            </span>
            <a target="_blank" rel="noopener noreferrer" href={link}>
              <img
                style={{ cursor: 'pointer' }}
                alt="status"
                src={getStatusImage(status)}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
