import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

import default_user from '../../assets/images/default_user.png';
import UserImage from '../Layout/UserImage';

import { StarRating, YesNoButton, CheckButton } from './ScrumButtons';
import { Table, Modal, Container, Row, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  getScrums,
  saveCurrentUserScrum,
  saveScrum,
} from '../../services/scrum';
import icons from '../../utils/getIcons';
import NoGroupData from './NoGroupData';
// import axios from '../config/axios.config';
// import { API_ENDPOINTS } from '../constants/api';

export default function Scrums({ group, groupMembers, groupId }) {
  const user = useSelector((state) => state.loginState.user);
  const isTeamOwner = group.owner_id === user.id;
  const [members, setMembers] = useState([...groupMembers]);
  const [questions, setQuestions] = useState([]);

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchScrum() {
      try {
        console.log(members);
        const response = await getScrums(1);
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
              attendance: null,
              saw_last_lecture: null,
              tha_progress: null,
              topics_to_cover: null,
              backlog_reasons: null,
              class_rating: null,
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

  const postScrumData = () => {};

  return (
    <div
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 0 20px #0003',
        height: '100%',
        borderRadius: '18px',
        maxWidth: 'calc(100vw - 250px)',
        padding: '40px 40px',
        marginLeft: '60px',
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
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

const TableRow = ({ updateQuestions, question, index, isTeamOwner }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="mx-1 my-1">
            <CheckButton
              value={question.attendance}
              isTeamOwner={isTeamOwner}
              onChange={(newValue) => {
                updateQuestions(index, { attendance: newValue });
              }}
            ></CheckButton>
          </div>

          <div className="mx-1 my-1">
            <UserImage
              style={{
                margin: '1px 1px',
                display: 'flex',
                flexDirection: 'row',
                height: '30px',
                width: '30px',
                borderRadius: '100px',
              }}
              src={question.avatar || default_user}
              alt=""
            />
          </div>

          <div
            style={{ margin: '1px 1px', cursor: 'pointer' }}
            onClick={() => setModalShow(true)}
          >
            {limitForStr(question.name || 'No Name', 'name')}
          </div>
        </div>

        <MyVerticallyCenteredModal
          question={question}
          updateQuestion={(newData) => updateQuestions(index, newData)}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </td>

      <td>
        <div className="d-flex align-content-center justify-content-center">
          <YesNoButton
            size={'sm'}
            value={question.saw_last_lecture || false}
            onChange={(newValue) => {
              updateQuestions(index, { saw_last_lecture: newValue });
            }}
          ></YesNoButton>
        </div>
      </td>

      <td>
        {/* <input
          type="text"
          value={question.tha_progress}
          onChange={(e) =>
            updateQuestions(index, {
              tha_progress: e.target.value,
            })
          }
        /> */}
        {question.tha_progress}
      </td>

      <td>
        <input
          type="text"
          value={question.topics_to_cover}
          onChange={(e) =>
            updateQuestions(index, {
              topics_to_cover: e.target.value,
            })
          }
        />
      </td>

      <td>
        <input
          type="text"
          value={question.backlog_reasons}
          onChange={(e) =>
            updateQuestions(index, {
              backlog_reasons: e.target.value,
            })
          }
        />
      </td>

      <td>
        <StarRating
          value={question.class_rating || 0}
          onChange={(newValue) => {
            updateQuestions(index, { class_rating: newValue });
          }}
          size={20}
        ></StarRating>
      </td>
    </tr>
  );
};

const MyVerticallyCenteredModal = (props) => {
  const [formStep, SetFormStep] = useState(0);

  const nextFormStep = () => {
    if (formStep != 5) {
      SetFormStep((cur) => cur + 1);
    }
  };

  const prevFormStep = () => {
    if (formStep != 0) {
      SetFormStep((cur) => cur - 1);
    }
  };

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="scrum-modal"
    >
      <Modal.Header style={{ borderBottom: 'none' }}>
        <Modal.Title id="contained-modal-title-vcenter" className="d-flex">
          <button
            style={{ background: 'transparent', border: 'none' }}
            onClick={props.onHide}
          >
            <img src={icons.scrums_cut_button} />
          </button>
          <span className="ml-4 mt-1">
            <h2 style={{ color: '#707070' }}>
              Edit Scrums for{' '}
              <span style={{ color: '#301E4A' }}>
                {props.question.name || 'No Name'}
              </span>
            </h2>
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container
          style={{
            height: '400px',
            position: 'relative',
          }}
          fluid
        >
          <Row className="mb-5 d-flex align-items-center justify-content-center">
            {formStep === 0 && (
              <section>
                <div className="mt-5 mb-8">
                  <div className="mt-3 mb-5">
                    <h1 style={{ color: '#301E4A' }}>
                      Did you see the last lecture ?
                    </h1>
                  </div>
                  <div
                    className="mx-7"
                    style={{ height: '15px', width: '30px' }}
                  >
                    <YesNoButton
                      size={'lg'}
                      value={props.question.saw_last_lecture || false}
                      onChange={(newValue) => {
                        props.updateQuestion({
                          saw_last_lecture: newValue,
                        });
                        nextFormStep();
                      }}
                    ></YesNoButton>
                  </div>
                </div>
              </section>
            )}

            {formStep === 1 && (
              <section>
                <div className="mt-5 mb-8">
                  <div className="mt-3 mb-5">
                    <h1 style={{ color: '#301E4A' }}>
                      Till which THA are you done?
                    </h1>
                  </div>
                  <div className="mt-10">
                    <input
                      style={{
                        fontSize: '90px',
                        marginTop: '20px',
                        height: '40px',
                      }}
                      type="text"
                      size={60}
                      value={props.question.tha_progress}
                      onChange={(e) =>
                        props.updateQuestion({
                          tha_progress: e.target.value,
                        })
                      }
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          nextFormStep();
                        }
                      }}
                      style={{
                        outline: 'none',
                        borderTopStyle: 'hidden',
                        borderRightStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderBottomStyle: 'groove',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '10px',
                      fontColor: 'black',
                      fontSize: '20px',
                    }}
                  >
                    press <span style={{ fontWeight: 'bold' }}>Enter ↵</span>
                  </p>
                </div>
              </section>
            )}
            {formStep === 2 && (
              <section>
                <div className="mt-5 mb-8">
                  <div className="mt-3 mb-5">
                    <h1 style={{ color: '#301E4A' }}>
                      What are you planning on <br />
                      covering today?
                    </h1>
                  </div>
                  <div className="mx-10">
                    <input
                      size={60}
                      type="text"
                      value={props.question.topics_to_cover}
                      onChange={(e) =>
                        props.updateQuestion({
                          topics_to_cover: e.target.value,
                        })
                      }
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          nextFormStep();
                        }
                      }}
                      style={{
                        outline: 'none',
                        borderTopStyle: 'hidden',
                        borderRightStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderBottomStyle: 'groove',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '10px',
                      fontColor: 'black',
                      fontSize: '20px',
                    }}
                  >
                    press <span style={{ fontWeight: 'bold' }}>Enter ↵</span>
                  </p>
                </div>
              </section>
            )}
            {formStep === 3 && (
              <section>
                <div className="mt-5 mb-8">
                  <div className="mt-3 mb-5">
                    <h1 style={{ color: '#301E4A' }}>
                      What is/are the reason(s) for <br />
                      your backlog?
                    </h1>
                  </div>
                  <div className="mx-10">
                    <input
                      size={60}
                      type="text"
                      value={props.question.backlog_reasons}
                      onChange={(e) =>
                        props.updateQuestion({
                          backlog_reasons: e.target.value,
                        })
                      }
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          nextFormStep();
                        }
                      }}
                      style={{
                        outline: 'none',
                        borderTopStyle: 'hidden',
                        borderRightStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderBottomStyle: 'groove',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '10px',
                      fontColor: 'black',
                      fontSize: '20px',
                    }}
                  >
                    press <span style={{ fontWeight: 'bold' }}>Enter ↵</span>
                  </p>
                </div>
              </section>
            )}

            {formStep === 4 && (
              <section>
                <div className="mt-5 mb-8">
                  <div className="mt-3 mb-5">
                    <h1 style={{ color: '#301E4A' }}>
                      How would you rate yesterday's
                      <br /> class?
                    </h1>
                  </div>
                  <div>
                    <div className="pl-8 d-flex">
                      <StarRating
                        value={props.question.class_rating}
                        onChange={(newValue) => {
                          props.updateQuestion({
                            class_rating: newValue,
                          });
                          nextFormStep();
                        }}
                        size={40}
                        style={{ marginLeft: '40px' }}
                      ></StarRating>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {formStep === 5 && (
              <section>
                <div className="mt-5 mb-8 d-flex flex-row">
                  <div>
                    <div className="mt-3 mb-5">
                      <h2 style={{ color: '#301E4A', fontWeight: 'bold' }}>
                        Thanks for filling out your <br /> scrums Today.
                      </h2>
                    </div>
                    <div style={{ marginTop: '60px' }}>
                      <h2 style={{ color: '#444444', fontWeight: 'bold' }}>
                        See you again Tomorrow !!!
                      </h2>
                    </div>
                  </div>
                  <div className="ml-3 mb-7">
                    <img
                      src={icons.scrums_thanks_icon}
                      alt=""
                      width="200"
                      height="170"
                    />
                  </div>
                </div>
              </section>
            )}
          </Row>

          <div class="fixed-bottom" style={{ position: 'absolute' }}>
            <Row className="mt-6 d-flex flex-row-reverse align-items-end">
              {formStep !== 5 && (
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0 0',
                    marginRight: '6px',
                  }}
                  onClick={nextFormStep}
                  type="button"
                >
                  <img
                    src={icons.scrums_next_button}
                    alt="next"
                    width="50"
                    height="50"
                  />
                </button>
              )}

              {formStep !== 0 && (
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0 0',
                    marginRight: '6px',
                  }}
                  onClick={prevFormStep}
                  type="button"
                >
                  <img
                    src={icons.scrums_back_button}
                    alt="previous"
                    width="50"
                    height="50"
                  />
                </button>
              )}

              {formStep < 5 && (
                <div
                  style={{
                    width: '200px',
                    marginBottom: '18px',
                    marginRight: '9px',
                  }}
                >
                  <ProgressBar
                    now={(formStep + 1) * 20}
                    className="bg-light"
                  ></ProgressBar>
                </div>
              )}

              {formStep === 5 && (
                <div
                  style={{
                    marginBottom: '2px',
                    marginRight: '8px',
                  }}
                >
                  <Button variant="primary" size="lg" type="submit">
                    Submit
                  </Button>
                </div>
              )}
            </Row>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

function limitForStr(str, option) {
  let strLength = str.length;

  if (strLength > 9 && option === 'name') {
    let res = str.slice(0, 8);

    return res + '...';
  }

  if (strLength > 18 && option === 'other') {
    let res = str.slice(0, 17);

    return res + '...';
  }

  return str;
}

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;
  return today;
};
