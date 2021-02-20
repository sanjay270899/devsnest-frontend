import React from 'react';
import './Progress.scss';

const Progress = () => {
  return (
    <div className="progress__container">
      <h3 className="progress__container-heading">
        <img
          src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:24d2fae0-3937-4fb9-80c5-fe7866d8a8c9;version=0?component_id=65ab747b-e53a-4a5a-b72b-957d8006edbf&api_key=CometServer1&access_token=1613875177_urn%3Aaaid%3Asc%3AUS%3A24d2fae0-3937-4fb9-80c5-fe7866d8a8c9%3Bpublic_fc09f4e6bef754ec99235be813979d5d56c899dc"
          alt="progress icon"
        />
        <span>Your Progress</span>
      </h3>

      <div className="emptybox">
        <p>This part will be updated</p>
      </div>
    </div>
  );
};

export default Progress;
