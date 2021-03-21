import React from 'react';

import HashTag from '../assets/images/dashboard/hashtag.png';

const QuestionFilters = ({
  topics,
  toggleTopic,
  difficulties,
  difficulty,
  setDifficulty,
  questionTypes,
  questionType,
  setQuestionType,
}) => {
  return (
    <>
      <div className="qfilter__container">
        <h3 className="qfilter__container-heading">
          <img src={HashTag} alt="qfiltericon" />
          <span>Topics:</span>
        </h3>

        <div className="qfilter__wrapper">
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
                className="badge qfilter-tag"
              >
                {topic.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="qfilter__container">
        <h3 className="qfilter__container-heading">
          <img src={HashTag} alt="qfiltericon" />
          <span>Difficulty:</span>
        </h3>

        <div className="qfilter__wrapper">
          {difficulties.map((diff) => {
            const isSelected = diff.key === difficulty;
            return (
              <span
                style={{
                  backgroundColor: isSelected ? '#8E8D90' : '#FFFFFF',
                  color: isSelected ? '#fff' : '#404040',
                  cursor: 'pointer',
                }}
                key={diff.key}
                onClick={() =>
                  isSelected ? setDifficulty('') : setDifficulty(diff.key)
                }
                className="badge qfilter-tag"
              >
                {diff.title}
              </span>
            );
          })}
        </div>
      </div>

      <div className="qfilter__container">
        <h3 className="qfilter__container-heading">
          <img src={HashTag} alt="qfiltericon" />
          <span>Question Type:</span>
        </h3>

        <div className="qfilter__wrapper">
          {questionTypes.map((queType) => {
            const isSelected = queType.key === questionType;
            return (
              <span
                style={{
                  backgroundColor: isSelected ? '#8E8D90' : '#FFFFFF',
                  color: isSelected ? '#fff' : '#404040',
                  cursor: 'pointer',
                }}
                key={queType.key}
                onClick={() =>
                  isSelected
                    ? setQuestionType('')
                    : setQuestionType(queType.key)
                }
                className="badge qfilter-tag"
              >
                {queType.title}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionFilters;
