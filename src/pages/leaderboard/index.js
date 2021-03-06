import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../config/axios.config';
import { API_ENDPOINTS } from '../../constants/api';
import './leaderboard.scss';

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.loginState.user);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.LEADERBOARD)
      .then((res) => {
        setLeaderboardData(res.data.scoreboard);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  if (isLoading) {
    return (
      <div className="leaderboard d-flex">
        <div class="spinner-border text-primary m-auto" role="status" />
      </div>
    );
  }

  return (
    <div className="leaderboard">
      <div className="leaderboard__container row flex-row-reverse">
        <div className="col-md-12">
          <div className="leaderboard__table">
            <div className="leaderboard__table-header row py-3 my-1 mx-4">
              <div className="h5 mb-0 text-center col-2">Rank</div>
              <div className="h5 mb-0 col-6">Name</div>
              <div className="h5 mb-0 text-center col-4">Score</div>
            </div>

            {leaderboardData &&
              leaderboardData.map((item, index) => (
                <div
                  className={`row py-3 mx-4 ${
                    item.id === user.id ? 'current-user my-2' : 'my-0'
                  }`}
                  key={item.id}
                >
                  <div className="text-center col-2">{index + 1}.</div>
                  <div className="col-6">{item.name}</div>
                  <div className="text-center col-4">{item.score || '0'}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
