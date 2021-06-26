import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import default_user from '../../assets/images/default_user.png';
import UserImage from '../Layout/UserImage';

import { StarRating, YesNoButton, CheckButton } from './ScrumButtons';
import { Table, Modal, Container, Row, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import icons from '../../utils/getIcons';
import NoGroupData from './NoGroupData';
import { getScrums, saveScrum } from '../../services/scrum';

import TableRow from './TableRow';

export default function Scrums({ group, groupMembers, groupId }) {
  const user = useSelector((state) => state.loginState.user);
  const isTeamOwner = group.owner_id === user.id;
  const isTeamCoOwner = group.co_owner_id === user.id;
  const [members, setMembers] = useState([...groupMembers]);
  const [questions, setQuestions] = useState([]);

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log('group data');
  console.log(group);
  useEffect(() => {
    async function fetchScrum() {
      try {
        console.log(members);
        const response = await getScrums(3);
        console.log(response);

        // Saved Users ID
        const savedUsersID = [];
        response.forEach((member) => {
          savedUsersID.push(member.user_id);
        });
        console.log(savedUsersID);

        members.forEach((member) => {
          if (!savedUsersID.includes(member.user_id)) {
            response.push({
              user_id: member.user_id,
              group_id: groupId,
              attendance: false,
              saw_last_lecture: false,
              tha_progress: '',
              topics_to_cover: '',
              backlog_reasons: '',
              class_rating: 0,
            });
          }
        });

        const idToDetails = {};
        members.forEach((member) => {
          idToDetails[member.user_id] = {
            name: member.user_details.username,
            avatar: member.user_details.avatar,
          };
        });

        // Name and Avatar
        response.forEach((member) => {
          const id = member.user_id;
          const { name, avatar } = idToDetails[id];
          member.name = name;
          member.avatar = avatar;
        });

        console.log(response);
        console.log(group);

        setQuestions(response);
      } catch (e) {
        console.log(e);
      }
    }
    fetchScrum();
  }, []);

  const updateQuestions = (index, newData) => {
    setQuestions((arr) =>
      arr.map((obj, i) => {
        if (i === index) {
          return {
            ...obj,
            ...newData,
          };
        } else {
          return obj;
        }
      })
    );
  };

  const postScrumData = async (member) => {
    try {
      const result = await saveScrum(member, isTeamOwner || isTeamCoOwner);
      console.log(result);
      toast.success(`Scrum Saved for ${member.name}!!`);
    } catch (e) {
      toast.success(e.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 0 20px #0003',
        height: '100%',
        borderRadius: '18px',
        maxWidth: '900px',
        padding: '40px 40px',
        width: 'calc(100% - 80px - 15px)',
      }}
    >
      <div className="d-flex justify-content-between ">
        <h3 className="h4 text-primary mb-3 ml-2">Scrums</h3>
        <div className="d-flex">
          <div className="mx-1">
            <img src={icons.scrums_calender} alt="calender" />
          </div>
          <div className="mx-1" style={{ color: '#9B9B9B' }}>
            {getDate()}
          </div>
        </div>
      </div>
      <Table
        responsive
        bordered
        class="mt-3"
        style={{ borderCollapse: 'collapse', padding: '0' }}
      >
        <thead>
          <tr style={{ color: '#9B9B9B', fontFamily: 'Montserrat' }}>
            <th>Name</th>
            <th>Saw Last Lecture</th>
            <th>THA progress</th>
            <th>Today's plan</th>
            <th>Backlogs</th>
            <th>Class Rating</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000', fontFamily: 'Montserrat' }}>
          {questions.map((question, index) => (
            <TableRow
              updateQuestions={updateQuestions}
              question={question}
              index={index}
              isTeamOwner={isTeamOwner}
              postScrumData={postScrumData}
              key={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;
  return today;
};
