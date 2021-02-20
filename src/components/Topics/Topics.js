import React from 'react';
import './Topics.scss';

const Topics = ({ topics }) => {
  return (
    <div className="topics__container">
      <h3 className="topics__container-heading">
        <img
          src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:24d2fae0-3937-4fb9-80c5-fe7866d8a8c9;version=0?component_id=ede73807-a3c4-4130-beee-ec3eb046556f&api_key=CometServer1&access_token=1613875177_urn%3Aaaid%3Asc%3AUS%3A24d2fae0-3937-4fb9-80c5-fe7866d8a8c9%3Bpublic_fc09f4e6bef754ec99235be813979d5d56c899dc"
          alt="topics icon"
        />
        <span>Topics:</span>
      </h3>

      <div className="topics__wrapper">
        {topics.map((topic) => {
          return (
            <span
              style={{
                backgroundColor: topic.selected ? '#8E8D90' : '#FFFFFF',
              }}
              className="badge topics-tag"
            >
              {topic.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
