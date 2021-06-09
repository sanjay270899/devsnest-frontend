import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';

import styles from '../assets/css/groupsView.module.scss';
import { API_ENDPOINTS } from '../constants/api';
import axios from '../config/axios.config';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [myTeam, setMyTeam] = useState({});

  useEffect(() => {
    async function getAllTeams() {
      try {
        const {
          data: { data, my_group_id },
        } = await axios.get(`${API_ENDPOINTS.GROUPS}`);

        let otherTeam = [],
          myTeam = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === my_group_id) {
            myTeam.push(data[i]);
          } else {
            otherTeam.push(data[i]);
          }
        }
        setMyTeam(myTeam[0]);
        setAllTeams(otherTeam);
      } catch (e) {
        console.error(e);
      }
    }
    getAllTeams();
  }, []);

  return (
    <>
      <div id={styles.myTeam}>
        <TeamCard key={myTeam.id} {...myTeam} />
      </div>
      {allTeams.length > 1 && (
        <div id={styles.OtherTeamDemarcation}>
          <div></div>
          <p>Other Teams</p>
          <div></div>
        </div>
      )}
      <div className={styles.TeamView}>
        {allTeams.map((team) => (
          <TeamCard key={team.id} {...team}></TeamCard>
        ))}
      </div>
    </>
  );
}
