import React from 'react';
import styles from '../../assets/css/groupsView.module.scss';
import Arrow from '../../assets/images/groups/teamCardArrow.svg';
import { Link } from 'react-router-dom';
export default function TeamCard({ name, leaderName, id }) {
  return (
    <div className={styles.TeamCard}>
      <div className={styles.TeamName}>
        <h1>{name}</h1>
        <button>
          <Link to={`/groups/${id}`}>
            <img src={Arrow} alt=""></img>
          </Link>
        </button>
      </div>
      <div>
        <h2>Leader : {leaderName}</h2>
        <h2>Vice-Leader : {'Name'}</h2>
      </div>
    </div>
  );
}
