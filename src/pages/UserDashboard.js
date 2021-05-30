import React from 'react';

// Images export
import default_user from '../assets/images/default_user.png';
import UserImage from '../components/UserImage';
import academicLevel from '../assets/images/dashboard/academicLevel.svg';
import batch from '../assets/images/dashboard/batch.svg';
import birthday from '../assets/images/dashboard/birthday.svg';
import branch from '../assets/images/dashboard/branch.svg';
import college from '../assets/images/dashboard/college.svg';
import github from '../assets/images/dashboard/github.svg';
import linkedin from '../assets/images/dashboard/linkedin.svg';
import resume from '../assets/images/dashboard/resume.svg';
import session from '../assets/images/dashboard/session.svg';
import team from '../assets/images/dashboard/team.svg';
import year from '../assets/images/dashboard/year.svg';

import Calendar from 'react-github-contribution-calendar';

export default function UserDashboard() {
  var values = {
    '2020-06-23': 1,
    '2020-06-26': 2,
    '2020-06-27': 3,
    '2020-06-28': 4,
    '2020-06-29': 4,
    '2020-09-29': 4,
    '2020-09-21': 4,
    '2020-09-22': 4,
  };
  var until = '2020-12-30';
  var weekNames = ['s', 'm', 't', 'w', 't', 'f', 's'];
  var monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  var panelColors = ['#EEEBF3', '#ACFFBE', '#57DB73', '#259B3E'];

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 92px)',
        backgroundColor: '#F2EFF7',
        padding: '3rem 0rem',
      }}
    >
      <div className="d-flex flex-wrap align-items-start justify-content-center">
        <div className="d-flex flex-column shadow profile-card mb-4 mx-5">
          <div className="profile-img-bg" />

          <div className="mx-4">
            <div className="d-flex flex-wrap align-items-start justify-content-between">
              <div>
                {' '}
                <UserImage
                  src={default_user}
                  alt={`Shrishti's profile`}
                  className="profile-img"
                />
              </div>
              <div>
                <img src={github} alt={github} onClick="" />
                <img src={linkedin} alt={linkedin} />
                <img src={resume} alt={resume} />
              </div>
            </div>

            <h1 className="h5 my-2">Shrishti</h1>
            <h5 className="h6 text-muted my-2">
              <img src={birthday} alt={birthday} />
              <span className="px-2">14th May 2000</span>
            </h5>
            <h5 className="h6 text-muted my-2">
              <img src={team} alt={team} />
              <span className="px-2">Team : Sentinels</span>
            </h5>
            <h5 className="h6 text-muted my-2">
              <img src={batch} alt={batch} />
              <span className="px-2">Batch : Summer 2021</span>
            </h5>
          </div>
        </div>

        <div className="d-flex flex-column shadow user-detail-card mb-4 mx-5">
          <div className="profile-img-bg" />

          <div className="mx-4" style={{ backgroundColor: '#FFFFFF' }}>
            <h1 className="h5 my-2">Academic Details</h1>
            <h5 className="h6 text-muted my-2">
              <img src={academicLevel} alt={academicLevel} />
              <span className="px-2">Undergraduate</span>
            </h5>
            <h5 className="h6 text-muted my-2">
              <img src={college} alt={college} />
              <span className="px-2">IIT Bhubaneswar</span>
            </h5>
            <h5 className="h6 text-muted my-2">
              <img src={branch} alt={branch} />
              <span className="px-2"> Electronics & Communication Engg.</span>
            </h5>
            <h5 className="h6 text-muted my-2">
              <img src={session} alt={session} />
              <span className="px-2"> 2018 - 2022</span>
            </h5>
            <h5 className="h6 text-muted my-2">
              <img src={year} alt={year} />
              <span className="px-2"> 3rd year</span>
            </h5>
          </div>
        </div>

        <div className="d-flex flex-column shadow user-detail-card mb-4 mx-5">
          <div className="profile-img-bg" />

          <div className="mx-4" style={{ backgroundColor: '#FFFFFF' }}>
            <h1 className="h5 my-2">Problems Solved: 1500/2000 </h1>
            <div class="my-4 progress">
              <div
                class="progress-bar progress-bar-easy"
                style={{ width: '70%' }}
              ></div>
            </div>
            <div class="my-4 progress">
              <div
                class="progress-bar progress-bar-medium"
                style={{ width: '50%' }}
              ></div>
            </div>
            <div class="progress my-2">
              <div
                class="progress-bar progress-bar-hard"
                style={{ width: '20%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 d-flex flex-wrap align-items-start justify-content-center">
        <div className="d-flex flex-column shadow user-detail-card mx-5">
          <div className="profile-img-bg" />

          <div className="mx-4">
            <h1 className="h5 my-2">Activity</h1>
            <Calendar
              values={values}
              until={until}
              panelColors={panelColors}
              weekNames={weekNames}
              monthNames={monthNames}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
