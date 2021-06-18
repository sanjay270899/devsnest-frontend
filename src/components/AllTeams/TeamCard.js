import React from 'react';
import styles from '../../assets/css/groupsView.module.scss';
import Arrow from '../../assets/images/groups/teamCardArrow.svg';
import { Link } from 'react-router-dom';

export default function TeamCard({ name, owner_name, co_owner_name, slug }) {
  return (
    <div className={styles.TeamCard}>
      <div className={styles.TeamName}>
        <h1 className="text-truncate">{name}</h1>
        <button>
          <Link to={`/groups/${slug}`}>
            <img src={Arrow} alt=""></img>
          </Link>
        </button>
      </div>
      <div>
        <h2>Leader : {owner_name || 'No owner'}</h2>
        <h2>Vice-Leader : {co_owner_name || 'No co-owner'}</h2>
      </div>
    </div>
  );
}
