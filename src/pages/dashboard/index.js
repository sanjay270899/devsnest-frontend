import React from 'react';
import { useSelector } from 'react-redux';
import { ConnectWithDiscordBanner } from '../../components/Navbar';
import { AcademicDetails } from './AcademicDetails';
import { ActivityMap } from './ActivityMap';
import { BasicDetails } from './BasicDetails';
import { ProblemsDetails } from './ProblemsDetails';
import { ProjectsComingSoon } from './ProjectsComingSoon';

export default function Dashboard() {
  const user = useSelector((state) => state.loginState.user);

  return (
    <>
      <ConnectWithDiscordBanner />

      <div
        className="p-1 py-4"
        style={{
          minHeight: 'calc(100vh - 92px)',
          backgroundColor: '#F2EFF7',
        }}
      >
        <div
          className="d-flex flex-column m-auto justify-content-center"
          style={{ maxWidth: '1225px' }}
        >
          {/* Row 1 */}
          <div className="d-flex flex-wrap justify-content-center">
            <BasicDetails user={user} />
            <div className="d-flex flex-wrap flex-fill justify-content-center">
              <AcademicDetails user={user} />
              <ProblemsDetails user={user} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="d-flex flex-wrap justify-content-center">
            <ProjectsComingSoon />
            <ActivityMap user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
