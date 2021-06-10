import React, { useCallback } from 'react';

export const ProblemsDetails = ({ user }) => {
  // Solved Question by User by Difficulty
  const easy = user.solved?.easy || 0;
  const medium = user.solved?.medium || 0;
  const hard = user.solved?.hard || 0;

  // Total Queustion by Difficulty
  const easy_t = user.total_by_difficulty?.easy || 0;
  const medium_t = user.total_by_difficulty?.medium || 0;
  const hard_t = user.total_by_difficulty?.hard || 0;

  const solved = easy + medium + hard; // Total Solved
  const total = easy_t + medium_t + hard_t; // Total Questions

  const renderProgress = useCallback((style, percentage) => (
    <div className="my-4 progress">
      <div
        className={`progress-bar progress-bar-${style}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  ));

  return (
    <div
      className="d-flex align-items-stretch flex-fill shadow user-detail-card py-3 px-1 m-3"
      style={{ maxWidth: '400px' }}
    >
      <div
        className="d-flex flex-column justify-content-between w-100 mx-4"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <h1 className="h5 my-2">
          <span className="font-weight-bold">Problems Solved:</span> {solved}/
          {total}{' '}
        </h1>
        <div>
          {renderProgress('easy', (easy * 100) / easy_t)}
          {renderProgress('easy', (medium * 100) / medium_t)}
          {renderProgress('easy', (hard * 100) / hard_t)}
        </div>
        <div className="d-flex justify-content-between my-2">
          <div>
            <div className="font-weight-bold mb-1" style={{ color: '#0C633A' }}>
              Easy
            </div>
            <div>
              {easy}/{easy_t}
            </div>
          </div>
          <div>
            <div className="font-weight-bold mb-1" style={{ color: '#938000' }}>
              Medium
            </div>
            <div>
              {medium}/{medium_t}
            </div>
          </div>
          <div>
            <div className="font-weight-bold mb-1" style={{ color: '#762B0B' }}>
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
