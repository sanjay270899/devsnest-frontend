import React, { useState, useEffect } from 'react';
import TeamCard from './teamCard';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/groupsView.module.scss';
import { API_ENDPOINTS } from '../../constants/api';
import axios from '../../config/axios.config';
import { useSelector } from 'react-redux';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [realAllTeams, setRealAllTeams] = useState([]);

  const { group_id } = useSelector((state) => state.loginState.user);

  useEffect(() => {
    async function getAllTeams() {
      const { data } = await axios.get(`${API_ENDPOINTS.GROUPS}`);

      setAllTeams(data);
    }
    getAllTeams();
  }, []);

  useEffect(() => {
    async function getLeaderName() {
      try {
        let groupData = [];
        for (let i = 0; i < allTeams.length; i++) {
          let temp = await axios.get(
            `${API_ENDPOINTS.GROUPS}/${allTeams[i].owner_id}/group-members`
          );
          groupData.push(temp);
        }

        for (let i = 0; i < groupData.length; i++) {
          const {
            data: { data: realData },
          } = groupData[i];
          for (let j = 0; j < realData.length; j++) {
            const {
              attributes: {
                user_id,
                user_details: { username },
              },
            } = realData[j];

            for (let k = 0; k < allTeams.length; k++) {
              if (user_id === allTeams[k].owner_id) {
                allTeams[k].leaderName = username;
              }
            }
          }
        }

        setRealAllTeams(allTeams);
      } catch (e) {}
    }

    getLeaderName();
  }, [allTeams]);

  return (
    <>
      <Link to={`/groups/${group_id}`}>View My Team</Link>
      <div className={styles.TeamView}>
        {realAllTeams.map((team) => (
          <TeamCard key={team.id} {...team}></TeamCard>
        ))}
      </div>
    </>
  );
}
