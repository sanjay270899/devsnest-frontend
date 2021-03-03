import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Question from '../../components/Question/Question';
import Progress from '../../components/Progress/Progress';
import Topics from '../../components/Topics/Topics';
import { getQuestions } from '../../services/question';
import { getTopics } from '../../services/topic';
import './challenges.scss';

const initalQuestionState = {
  title: '',
  tags: [],
  difficulty: 'Medium',
  status: null,
  id: null,
  link: null,
};

toast.configure({
  bodyStyle: {
    color: 'white',
  },
});

// Transforming the data according to the needs of Question Component
const transformData = (data) => {
  return data.map((each) => {
    const info = each.attributes;
    const { unique_id: id, name: title, link } = info;

    let { score: status } = info;
    if (!status || typeof status !== 'string') status = 'unsolved';

    return {
      ...initalQuestionState,
      id,
      title,
      link,
      status,
    };
  });
};

const transformTopicsData = (data) => {
  return data.map((topic) => {
    return {
      selected: true,
      name: topic.attributes.name,
    };
  });
};

function Challenges(props) {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getQuestions()
      .then((res) => {
        return setQuestions(transformData(res));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  // Get all the topics
  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(transformTopicsData(res.data));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  // fetch new questions on updated topics list
  useEffect(() => {
    getQuestions({
      parent_id: getSelectedTopics(),
    })
      .then((res) => {
        return setQuestions(transformData(res));
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topics]);

  function getSelectedTopics() {
    return topics.filter((topic) => topic.selected);
  }

  function toggleTopic(name) {
    const updatedTopics = [...topics];

    const selectedTopic = updatedTopics.find((topic) => topic.name === name);
    if (!selectedTopic) return;

    selectedTopic.selected = !selectedTopic.selected;
    setTopics(updatedTopics);
  }

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
              <Topics topics={topics} toggleTopic={toggleTopic} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
