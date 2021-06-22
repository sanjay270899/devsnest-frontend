import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import styles from '../assets/css/videos.module.scss';
import Filter from '../components/Layout/Filter';
import { Video } from '../components/Videos/Video';
import { getQuestions } from '../services/question';
// import { dummyData } from '../utils/questionConstant'; // Dummy Data
import { getTopics } from '../services/topic';
import icons from '../utils/getIcons';
import myLog from '../utils/myLog';

function VideoScreen() {
  const [filter, setFilter] = useState({
    values: [],
    selected: -1,
  });
  // const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const onFilterChange = (index) => {
    setFilter((current) => ({
      ...current,
      selected: current.selected === index ? -1 : index,
    }));
  };

  const transformTopicsData = (data) => {
    return data.map((topic) => {
      return topic.attributes.unique_id
        ? topic.attributes.unique_id[0].toUpperCase() +
            topic.attributes.unique_id.slice(1)
        : '';
    });
  };

  const transformQuestionsData = (data) => {
    return data.data.map((question) => {
      const {
        unique_id: id,
        name: title,
        link: url,
        parent_id: tag_,
        questions_list: questions,
        reference_list: references,
      } = question.attributes;

      const tag = tag_ ? tag_[0].toUpperCase() + tag_.slice(1) : '';

      return {
        id,
        title,
        url,
        tag,
        questions,
        references,
      };
    });
  };

  useEffect(() => {
    getTopics()
      .then((res) => {
        setFilter((current) => ({
          ...current,
          values: transformTopicsData(res.data),
        }));

        getQuestions({
          data_type: 'video',
        })
          .then((res) => {
            setVideos(transformQuestionsData(res));
            myLog(transformQuestionsData(res));
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <div className={`${styles['videos']}`}>
      <div className={`${styles['margin-controller']}`}>
        {filter.values.length > 0 ? (
          <div className="d-flex align-items-center px-3">
            <img
              src={icons.filter}
              alt="filter"
              height="25px"
              width="25px"
              className="mr-4"
            />
            <Filter
              values={filter.values}
              selected={filter.selected}
              onClick={onFilterChange}
            />
          </div>
        ) : (
          'No Topic Found'
        )}
        {filter.values.length > 0 &&
          videos &&
          videos.map((video, index) => {
            if (
              filter.selected === -1 ||
              filter.values[filter.selected] === video.tag
            ) {
              return <Video video={video} key={index} />;
            }
            return '';
          })}
      </div>
    </div>
  );
}

export default VideoScreen;
