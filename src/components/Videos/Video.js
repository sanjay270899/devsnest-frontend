import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import styles from '../../assets/css/videos.module.scss';
import icons from '../../utils/getIcons';
import { Question } from './Question';

export const Video = ({ video, setVideos }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={`${styles['card']} d-flex`}>
      <div className="w-100">
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex align-items-center">
            <img src={icons.hash_bold} alt="hash" height="23px" />
            <span className={`ml-2 ${styles['video_title']}`}>
              {video.title}
            </span>
          </span>
          <span className="bg-white rounded p-1 shadow-sm">{video.tag}</span>
        </div>
        <div
          className={`mt-3 rounded overflow-hidden ${styles['player-wrapper']}`}
        >
          <ReactPlayer
            className={`${styles['react-player']}`}
            url={video.url}
            controls
            light
            height="100%"
            width="100%"
          />
        </div>
      </div>

      <div className={`${styles['question-main']}`}>
        <div className="d-flex pb-1">
          <div
            className={`cursor-pointer ${styles['right-title']} ${
              styles['right-line']
            } ${selected === 0 && styles['right-title-selected']}`}
            onClick={() => setSelected(0)}
          >
            Related Questions
          </div>
          <div
            className={`cursor-pointer ${styles['right-title']} ${
              selected === 1 && styles['right-title-selected']
            }`}
            onClick={() => setSelected(1)}
          >
            References
          </div>
        </div>
        <div className={`${styles['questions-container']} mt-2`}>
          {selected === 0
            ? video.questions && video.questions.length > 0
              ? video.questions.map((q, index) => (
                  <Question
                    question={q}
                    key={index}
                    setVideos={setVideos}
                    video_id={video.id}
                  />
                ))
              : 'No Questions'
            : video.references && video.references.length > 0
            ? video.references.map((q, index) => (
                <Question question={q} key={index} />
              ))
            : 'No References'}
        </div>
      </div>
    </div>
  );
};
