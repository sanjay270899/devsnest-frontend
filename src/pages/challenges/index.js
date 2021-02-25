import React, { useState } from 'react';
import Question from '../../components/Question/Question';
import Progress from '../../components/Progress/Progress';
import Topics from '../../components/Topics/Topics';
import './challenges.scss';

const initialState = [
  {
    title: 'Longest Palindromic Subsequence',
    tags: ['Dynamic Programming', 'String'],
    difficulty: 'Medium',
    percentage: 35.6,
    status: 'attempted',
  },
  {
    title: 'Necklace Assembly',
    tags: ['Graph', 'Dynamic Programming'],
    difficulty: 'Hard',
    percentage: 10.5,
    status: 'unsolved',
  },
  {
    title: 'Painting Fence',
    tags: ['Sort', 'Dynamic Programming', 'Search'],
    difficulty: 'Easy',
    percentage: 72.3,
    status: 'solved',
  },
];

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

function Challenges() {
  const [questions, setQuestion] = useState(initialState);
  const [topics, setTopics] = useState(initialTopics);

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
