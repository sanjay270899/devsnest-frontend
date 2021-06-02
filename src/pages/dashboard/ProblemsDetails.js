import React from 'react';

export const ProblemsDetails = () => {
  return (
    <div className="d-flex flex-column shadow user-detail-card ml-5 py-3 px-1">
      <div className="profile-img-bg" />

      <div className="mx-4" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="h5 my-2">
          <span className="font-weight-bold">Problems Solved:</span> 150/200{' '}
        </h1>
        <div>
          <div className="my-4 progress">
            <div
              className="progress-bar progress-bar-easy"
              style={{ width: '70%' }}
            ></div>
          </div>
          <div className="my-4 progress">
            <div
              className="progress-bar progress-bar-medium"
              style={{ width: '50%' }}
            ></div>
          </div>
          <div className="progress my-2">
            <div
              className="progress-bar progress-bar-hard"
              style={{ width: '20%' }}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3 mt-4">
          <div>
            <div className="font-weight-bold" style={{ color: '#0C633A' }}>
              Easy
            </div>
            <div>50/50</div>
          </div>
          <div>
            <div className="font-weight-bold" style={{ color: '#938000' }}>
              Medium
            </div>
            <div>50/60</div>
          </div>
          <div>
            <div className="font-weight-bold" style={{ color: '#762B0B' }}>
              Hard
            </div>
            <div>50/90</div>
          </div>
        </div>
      </div>
    </div>
  );
};
