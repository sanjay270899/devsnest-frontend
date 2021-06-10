import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { useSelector } from 'react-redux';
import styles from '../assets/css/groupsView.module.scss';
import { API_ENDPOINTS } from '../constants/api';
import axios from '../config/axios.config';
import myLog from '../utils/myLog';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [myTeam, setMyTeam] = useState({});
  const my_group_id = useSelector((state) => state.loginState.user.group_id);
  useEffect(() => {
    async function getAllTeams() {
      try {
        const {
          data: { data },
        } = await axios.get(`${API_ENDPOINTS.GROUPS}`);

        let otherTeam = [],
          myTeam = [];
        for (let i = 0; i < data.length; i++) {
          if (parseInt(data[i].id, 10) === my_group_id) {
            myTeam.push(data[i]);
          } else {
            otherTeam.push(data[i]);
          }
        }

        setMyTeam(myTeam[0]);
        setAllTeams(otherTeam);
      } catch (e) {
        myLog(e);
      }
    }
    getAllTeams();
  }, []);

  return (
    <>
      <div id={styles.myTeam}>
        <TeamCard key={myTeam.id} {...myTeam.attributes} />
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
          <TeamCard key={team.id} {...team.attributes}></TeamCard>
        ))}
      </div>
    </>
  );
}
