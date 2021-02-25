import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
import Progress from '../../components/Progress/Progress';
import Topics from '../../components/Topics/Topics';
import { getQuestions } from '../../services/question';
import './challenges.scss';

const initialTopics = [
  {
    name: 'Dynamic Programming',
    selected: false,
  },
  {
    name: 'Search',
    selected: true,
  },
  {
    name: 'DFS',
    selected: true,
  },
  {
    name: 'BFS',
    selected: false,
  },
  {
    name: 'Math',
    selected: true,
  },
  {
    name: 'Number Theory',
    selected: false,
  },
  {
    name: 'Greedy',
    selected: true,
  },
  {
    name: 'Union Find',
    selected: true,
  },
  {
    name: 'Sort',
    selected: false,
  },
];

const initalQuestionState = {
  title: '',
  tags: [],
  difficulty: 'Medium',
  status: null,
  id: null,
  link: null,
};

// Transforming the data according to the needs of Question Component
const transformData = (data) => {
  return data.map((each) => {
    const info = each.attributes;
    const { unique_id: id, name: title, link, score: status } = info;
    return {
      ...initalQuestionState,
      id,
      title,
      link,
      status,
    };
  });
};

function Challenges() {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState(initialTopics);

  useEffect(() => {
    getQuestions()
      .then((res) => {
        return setQuestions(transformData(res));
      })
      .catch((err) => {
        // Error handling
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__heading">
          <ul className="dashboard__ul">
            <li>Algorithm</li>
            <li>Data Structures</li>
          </ul>
        </div>

        <div className="section-wrapper row">
          <section className="questions col-lg-9 col-md-12 order-lg-1 order-md-2 order-sm-2 order-2">
            {questions.map((question, index) => {
              return (
                <Question
                  {...question}
                  index={index + 1}
                  key={question.title}
                />
              );
            })}
          </section>
          <div className="col-lg-3 col-md-12 order-lg-2 order-md-1 order-sm-1 order-1">
            <section className="questions">
              <Progress />
              <Topics topics={topics} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
