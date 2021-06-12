import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { useSelector } from 'react-redux';
import styles from '../assets/css/groupsView.module.scss';
import { API_ENDPOINTS } from '../constants/api';
import axios from '../config/axios.config';
import myLog from '../utils/myLog';
import no_data from '../assets/images/groups/no_data.svg';

export default function AllGroups() {
  const [allTeams, setAllTeams] = useState([]);
  const [myTeam, setMyTeam] = useState({});
  const my_group_id = useSelector((state) => state.loginState.user.group_id);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!my_group_id) return;

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

  if (!my_group_id) {
    return (
      <div className="groups d-flex flex-column align-items-center justify-content-center px-3">
        <img
          className="img-fluid"
          src={no_data}
          alt="New things are coming soon!"
        />
        <h5 className="text-center text-muted mt-5 mb-2">
          You're not in any group yet.
          <br />
          Join our server and find one that fits you!
        </h5>
        <a
          href="https://discord.gg/DVmruvFfDN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our discord server
        </a>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="groups d-flex">
        <div className="spinner-border text-primary m-auto" role="status" />
      </div>
    );
  }

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
