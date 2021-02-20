import React, { useState } from 'react';
import './dashboard.scss';
import Question from '../../components/Question/Question';

const initialState = [
  {
    title: 'Longest Palindromic Subsequence',
    tags: ['Dynamic Programming', 'String'],
    difficulty: 'Medium',
    percentage: 35.6,
    status: 'attempted',
  },
];

const Dashboard = () => {
  const [questions, setQuestion] = useState(initialState);

  return (
    <main className="dashboard">
      <div className="dashboard__heading">
        <ul className="dashboard__ul">
          <li>Algorithm</li>
          <li>Data Structures</li>
        </ul>
      </div>

      <section>
        {questions.map((question, index) => {
          return (
            <Question {...question} index={index + 1} key={question.title} />
          );
        })}
      </section>
    </main>
  );
};

export default Dashboard;
