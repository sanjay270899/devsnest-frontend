import React from 'react';
import './Question.scss';

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
  const statusObj = {
    imageSource: null,
    backgroundColor: null,
  };

  switch (status.toLowerCase()) {
    case 'attempted':
      return 'https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:24d2fae0-3937-4fb9-80c5-fe7866d8a8c9;version=0?component_id=edf8449f-afd1-4865-88b7-c40a781c7f59&api_key=CometServer1&access_token=1613875177_urn%3Aaaid%3Asc%3AUS%3A24d2fae0-3937-4fb9-80c5-fe7866d8a8c9%3Bpublic_fc09f4e6bef754ec99235be813979d5d56c899dc';
    case 'solved':
      return 'https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:24d2fae0-3937-4fb9-80c5-fe7866d8a8c9;version=0?component_id=1143241d-780b-443d-b669-50242ce9e351&api_key=CometServer1&access_token=1613875177_urn%3Aaaid%3Asc%3AUS%3A24d2fae0-3937-4fb9-80c5-fe7866d8a8c9%3Bpublic_fc09f4e6bef754ec99235be813979d5d56c899dc';
    case 'unsolved':
      return 'https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:24d2fae0-3937-4fb9-80c5-fe7866d8a8c9;version=0?component_id=8579191d-6b08-4863-bb94-086213d8e58c&api_key=CometServer1&access_token=1613875177_urn%3Aaaid%3Asc%3AUS%3A24d2fae0-3937-4fb9-80c5-fe7866d8a8c9%3Bpublic_fc09f4e6bef754ec99235be813979d5d56c899dc';
    default:
      return 'https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:24d2fae0-3937-4fb9-80c5-fe7866d8a8c9;version=0?component_id=8579191d-6b08-4863-bb94-086213d8e58c&api_key=CometServer1&access_token=1613875177_urn%3Aaaid%3Asc%3AUS%3A24d2fae0-3937-4fb9-80c5-fe7866d8a8c9%3Bpublic_fc09f4e6bef754ec99235be813979d5d56c899dc';
  }
};

const Question = (prop) => {
  const { title, tags, difficulty, percentage, index, status } = prop;

  return (
    <div className="question">
      <div className="row">
        <div className="col-8">
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
        <div className="col-4">
          <div className="question__right">
            <span
              style={{ backgroundColor: getColor(difficulty) }}
              className="badge question__right-difficulty"
            >
              {difficulty}
            </span>
            <span className="question__right-percentage">{percentage}%</span>
            <img alt="status" src={getStatusImage(status)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
