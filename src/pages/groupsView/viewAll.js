import React, { useState, useEffect } from 'react';
import TeamCard from './teamCard';

import styles from '../../assets/css/groupsView.module.scss';
import { API_ENDPOINTS } from '../../constants/api';
import axios from '../../config/axios.config';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [myTeam, setMyTeam] = useState({});

  useEffect(() => {
    async function getAllTeams() {
      const {
        data: { data, my_group_id },
      } = await axios.get(`${API_ENDPOINTS.GROUPS}`);

      setAllTeams(() => {
        const otherTeam = data.filter(({ id }) => {
          return id !== my_group_id;
        });
        return otherTeam;
      });
      setMyTeam(() => {
        const myT = data.filter(({ id }) => {
          return id === my_group_id;
        });

        return myT[0];
      });
    }
    getAllTeams();
  }, []);

  return (
    <>
      <div id={styles.myTeam}>
        <TeamCard key={myTeam.id} {...myTeam} />
      </div>
      {allTeams.length > 1 && (
        <p
          dangerouslySetInnerHTML={{
            __html: '&nbsp&nbspOther Groups&nbsp&nbsp',
          }}
        ></p>
      )}
      <div className={styles.TeamView}>
        {allTeams.map((team) => (
          <TeamCard key={team.id} {...team}></TeamCard>
        ))}
      </div>
    </>
  );
}
