import React from 'react';
import './Progress.scss';
import ProgressImage from '../../assets/images/dashboard/progress.png';

const Progress = () => {
  return (
    <div className="progress__container">
      <h3 className="progress__container-heading">
        <img src={ProgressImage} alt="progress icon" />
        <span>Your Progress</span>
      </h3>

      <div className="emptybox">
        <p>This part will be updated</p>
      </div>
    </div>
  );
};

export default Progress;
