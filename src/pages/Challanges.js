import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Question from '../components/Question';
import Progress from '../components/Progress';
import Topics from '../components/Topics';
import { getQuestions } from '../services/question';
import { getTopics } from '../services/topic';
import useSecondStateChange from '../utils/useSecondStageChange';
import { submitQuestion } from '../services/submission';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import '../assets/css/challenges.scss';

const initalQuestionState = {
  title: '',
  tags: [],
  difficulty: '',
  status: null,
  id: null,
  link: null,
};

const DIFFICULTIES = [
  { title: 'Easy', key: 'easy' },
  { title: 'Medium', key: 'medium' },
  { title: 'Hard', key: 'hard' },
];

const QUESTION_TYPES = [
  { title: 'Class', key: 'class' },
  { title: 'Assignment', key: 'assignment' },
];

// Transforming the data according to the needs of Question Component
const transformData = (data) => {
  return data.data.map((each) => {
    const info = each.attributes;
    const {
      unique_id: id,
      name: title,
      link,
      parent_id,
      status,
      difficulty,
      question_type,
    } = info;

    return {
      ...initalQuestionState,
      id,
      title,
      link,
      status,
      difficulty,
      question_type,
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

const transformReportData = (data) => {
  const { total_solved_ques, total_ques } = data;
  const total_unsolved_ques = total_ques - total_solved_ques;
  let topic_wise = [];

  Object.entries(data).forEach(([key, value]) => {
    if (key !== 'total_ques' && key !== 'total_solved_ques') {
      const title = key[0].toUpperCase() + key.slice(1);
      topic_wise.push([title, value]);
    }
  });
  topic_wise.push(['Unsolved', total_unsolved_ques]);

  return {
    topic_wise,
    total_ques,
    total_solved_ques,
    total_unsolved_ques,
  };
};

function getTextStatus(statusInNum) {
  if (statusInNum === 0) return 'done';
  else if (statusInNum === 1) return 'notdone';
  else return 'doubt';
}

function Challenges(props) {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [reportData, setReportData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [disableQuestionSubmission, setDisableQuestionSubmission] = useState(
    false
  );

  const isSecondRender = useSecondStateChange(topics);

  const getProgressData = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.REPORT);
      setReportData(transformReportData(res.data));
    } catch (e) {
      console.log(e);
    }
  };

  async function onSubmitQuestion(question_unique_id, status) {
    setDisableQuestionSubmission(true);
    const textStatus = getTextStatus(status);

    const updatedQuestions = [...questions];
    const updatedQuestion = questions.find(
      (question) => question.id === question_unique_id
    );
    updatedQuestion.status = textStatus;

    setQuestions(updatedQuestions);

    await submitQuestion({ question_unique_id, status });
    await getProgressData();
    setDisableQuestionSubmission(false);
  }

  useEffect(() => {
    getProgressData();
    getQuestions()
      .then((res) => {
        setQuestions(transformData(res));
        setIsLoading(false);
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
        difficulty: difficulty,
        question_type: questionType,
      })
        .then((res) => {
          return setQuestions(transformData(res));
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topics, difficulty, questionType]);

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

  if (isLoading) {
    return (
      <div className="dashboard d-flex">
        <div class="spinner-border text-primary m-auto" role="status" />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        {/* <div className="dashboard__heading">
          <ul className="dashboard__ul">
            <li>Algorithm</li>
            <li>Data Structures</li>
          </ul>
        </div> */}

        <div className="section-wrapper row mt-4">
          <section className="questions col-lg-9 col-md-12 order-lg-1 order-md-2 order-sm-2 order-2">
            {questions.map((question, index) => {
              return (
                <Question
                  onSubmitStatus={onSubmitQuestion}
                  {...question}
                  index={index + 1}
                  key={question.id}
                  disableQuestionSubmission={disableQuestionSubmission}
                />
              );
            })}
          </section>

          <div className="col-lg-3 col-md-12 order-lg-2 order-md-1 order-sm-1 order-1">
            <section className="questions">
              <Progress reportData={reportData} />

              <Topics
                topics={topics}
                toggleTopic={toggleTopic}
                difficulties={DIFFICULTIES}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                questionTypes={QUESTION_TYPES}
                questionType={questionType}
                setQuestionType={setQuestionType}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
