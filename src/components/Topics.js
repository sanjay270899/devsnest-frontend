import React from 'react';

import HashTag from '../assets/images/dashboard/hashtag.png';

const Topics = ({ topics, toggleTopic }) => {
  return (
    <div className="topics__container">
      <h3 className="topics__container-heading">
        <img src={HashTag} alt="topics icon" />
        <span>Topics:</span>
      </h3>

      <div className="topics__wrapper">
        {topics.map((topic) => {
          return (
            <span
              style={{
                backgroundColor: topic.selected ? '#8E8D90' : '#FFFFFF',
                color: topic.selected ? '#fff' : '#404040',
                cursor: 'pointer',
              }}
              key={topic.name}
              onClick={() => toggleTopic(topic.name)}
              className="badge topics-tag"
            >
              {topic.name.charAt(0).toUpperCase() + topic.name.slice(1)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
