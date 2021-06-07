import React from 'react';

export const ProblemsDetails = ({ user }) => {
  // Solved Question by User by Difficulty
  const easy = user.solved?.easy;
  const medium = user.solved?.medium;
  const hard = user.solved?.hard;

  // Total Queustion by Difficulty
  const easy_t = user.total_by_difficulty?.easy;
  const medium_t = user.total_by_difficulty?.medium;
  const hard_t = user.total_by_difficulty?.hard;

  const solved = easy + medium + hard; // Total Solved
  const total = easy_t + medium_t + hard_t; // Total Questions

  return (
    <div
      className="d-flex flex-column shadow user-detail-card m-3 py-3 px-1"
      style={{ width: '350px' }}
    >
      <div className="mx-4" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="h5 my-2">
          <span className="font-weight-bold">Problems Solved:</span> {solved}/
          {total}{' '}
        </h1>
        <div>
          <div className="my-4 progress">
            <div
              className="progress-bar progress-bar-easy"
              style={{ width: `${(easy * 100) / easy_t}%` }} // Easy Percentage
            ></div>
          </div>
          <div className="my-4 progress">
            <div
              className="progress-bar progress-bar-medium"
              style={{ width: `${(medium * 100) / medium_t}%` }} // Medium Percentage
            ></div>
          </div>
          <div className="progress my-2">
            <div
              className="progress-bar progress-bar-hard"
              style={{ width: `${(hard * 100) / hard_t}%` }} // Hard Percentage
            ></div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3 mt-4">
          <div>
            <div className="font-weight-bold" style={{ color: '#0C633A' }}>
              Easy
            </div>
            <div>
              {easy}/{easy_t}
            </div>
          </div>
          <div>
            <div className="font-weight-bold" style={{ color: '#938000' }}>
              Medium
            </div>
            <div>
              {medium}/{medium_t}
            </div>
          </div>
          <div>
            <div className="font-weight-bold" style={{ color: '#762B0B' }}>
              Hard
            </div>
            <div>
              {hard}/{hard_t}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
