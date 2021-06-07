import React, { useState, useEffect } from 'react';
import TeamCard from './teamCard';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/groupsView.module.scss';
import { API_ENDPOINTS } from '../../constants/api';
import axios from '../../config/axios.config';
import { useSelector } from 'react-redux';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [myTeam, setMyTeam] = useState({});

  const { group_id } = useSelector((state) => state.loginState.user);

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
      <p
        dangerouslySetInnerHTML={{ __html: '&nbsp&nbspOther Groups&nbsp&nbsp' }}
      ></p>
      <div className={styles.TeamView}>
        {allTeams.map((team) => (
          <TeamCard key={team.id} {...team}></TeamCard>
        ))}
      </div>
    </>
  );
}
