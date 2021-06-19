import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../assets/css/groupsView.module.scss';
import TeamCard from '../components/AllTeams/TeamCard';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import myLog from '../utils/myLog';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [myTeam, setMyTeam] = useState({});
  const my_group_id = useSelector((state) => state.loginState.user.group_id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllTeams() {
      setIsLoading(true);
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
      setIsLoading(false);
    }

    getAllTeams();
  }, [my_group_id]);

  if (isLoading) {
    return (
      <div className="groups d-flex">
        <div className="spinner-border text-primary m-auto" role="status" />
      </div>
    );
  }

  return (
    <div className="groups">
      {myTeam && (
        <div id={styles.myTeam}>
          <TeamCard key={myTeam.id} {...myTeam.attributes} />
        </div>
      )}
      {allTeams.length > 1 && (
        <div id={styles.OtherTeamDemarcation}>
          <div></div>
          <p>Other Teams</p>
          <div></div>
        </div>
      )}
      <div className={styles.TeamView}>
        {allTeams.map((team) => (
          <TeamCard key={team.id} {...team.attributes} />
        ))}
      </div>
    </div>
  );
}
