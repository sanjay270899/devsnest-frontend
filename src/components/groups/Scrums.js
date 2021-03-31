import React, { useEffect, useState } from 'react';
import UserImage from '../UserImage';

import default_user from '../../assets/images/default_user.png';
import { useSelector } from 'react-redux';
import {
  getScrums,
  saveCurrentUserScrum,
  saveScrum,
} from '../../services/scrum';

export default function Scrums({ group, groupMembers }) {
  const user = useSelector((state) => state.loginState.user);
  const isTeamOwner = group.owner_id === user.id;
  const [members, setMembers] = useState(
    groupMembers.map((item) => ({ data: '', attendence: false, ...item }))
  );
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const saveScrums = async () => {
    setIsSaving(true);
    if (isTeamOwner) {
      for (let member of members) {
        if (member.user_id === user.id) {
          await saveCurrentUserScrum(member, true);
        } else {
          await saveScrum(member);
        }
      }
    } else {
      const data = members.find((member) => member.user_id === user.id);
      const resp = await saveCurrentUserScrum(data);
      const newMembers = members.map((mem) =>
        mem.user_id === resp.attributes.user_id
          ? { ...mem, ...resp.attributes, id: resp.id }
          : mem
      );
      setMembers(newMembers);
    }
    loadScrums();
    setIsSaving(false);
  };

  const loadScrums = async () => {
    setIsLoading(true);
    const scrums = await getScrums();
    const newMembers = members.map((mem) => {
      const data = scrums.data.find(
        (sc) => sc.attributes.user_id === mem.user_id
      );
      return data ? { ...mem, ...data.attributes, id: data.id } : mem;
    });
    setMembers(newMembers);
    setIsLoading(false);
  };

  useEffect(() => {
    loadScrums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateMember = (member, data) => {
    let newMembers = members.map((mem) =>
      mem.user_id === member.user_id ? { ...mem, ...data } : mem
    );
    setMembers(newMembers);
  };

  return (
    <div className="group-activity group-activity-scrums">
      <h3 className="h4 text-primary">Scrums</h3>

      <div className="scrums-wrapper">
        <div className="px-3">
          {members.map((member) => {
            const isCurrentUser = member.user_id === user.id;
            const canEdit = isCurrentUser || isTeamOwner;

            return (
              <div className="row my-3" key={member.user_id}>
                <div className="col-4">
                  <div className="d-flex align-items-center mt-1 mb-2">
                    <UserImage
                      height="26"
                      width="26"
                      className="mr-3 rounded-pill"
                      src={member.user_details.avatar || default_user}
                      alt=""
                    />
                    <p className="m-0 text-muted- text-truncate">
                      {member.user_details.username || 'Team member'}
                    </p>
                  </div>

                  <label
                    className="custom-switch"
                    htmlFor={`${member.user_id}-attendence`}
                  >
                    <input
                      id={`${member.user_id}-attendence`}
                      type="checkbox"
                      disabled={!isTeamOwner}
                      checked={member.attendence}
                      onChange={(e) =>
                        updateMember(member, { attendence: e.target.checked })
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="col-8">
                  <textarea
                    className="scrum-input"
                    placeholder="Write scrum here..."
                    rows="5"
                    disabled={!canEdit || isLoading}
                    value={member.data}
                    onChange={(e) =>
                      updateMember(member, { data: e.target.value })
                    }
                  />

                  {canEdit && (
                    <div className="d-flex">
                      <button
                        className="scrum-save-btn ml-auto mt-1"
                        onClick={saveScrums}
                        disabled={isSaving}
                      >
                        <i className="fa fa-floppy-o" aria-hidden="true" />
                        <span className="ml-2">Save</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
