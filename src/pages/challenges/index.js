import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Question from '../../components/Question/Question';
import Progress from '../../components/Progress/Progress';
import Topics from '../../components/Topics/Topics';
import { getQuestions } from '../../services/question';
import { getTopics } from '../../services/topic';
import './challenges.scss';
import useSecondStateChange from '../../utils/useSecondStageChange';

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
  return data.data.map((each) => {
    const info = each.attributes;
    const { unique_id: id, name: title, link, parent_id } = info;

    let { score: status } = info;
    if (!status || typeof status !== 'string') status = 'unsolved';

    return {
      ...initalQuestionState,
      id,
      title,
      link,
      status,
      tags: [parent_id],
    };
  });
};

const transformTopicsData = (data) => {
  return data.map((topic) => {
    return {
      selected: false,
      name: topic.attributes.unique_id,
    };
  });
};

function Challenges(props) {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);

  const isSecondRender = useSecondStateChange(topics);

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

  // A seperate api call is made to get the topics.
  // as the initial value of topics is [],
  // It calls this function with [] which is redundant
  // hence ignoring the first render change useEffect
  useEffect(() => {
    if (isSecondRender) {
      getQuestions({
        topics: getSelectedTopics(),
      })
        .then((res) => {
          return setQuestions(transformData(res));
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
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
                <Question {...question} index={index + 1} key={question.id} />
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
