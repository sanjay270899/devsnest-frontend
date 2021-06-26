import React, { useState } from 'react';
import { Button, Container, Modal, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

import icons from '../../utils/getIcons';
import { StarRating, YesNoButton } from './ScrumButtons';

const EditScrum = (props) => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => {
    if (formStep !== 5) {
      setFormStep((cur) => cur + 1);
    }
  };

  const prevFormStep = () => {
    if (formStep !== 0) {
      setFormStep((cur) => cur - 1);
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
            <img src={icons.scrums_cut_button} alt="" />
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
                      type="text"
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
                        width: '100%',
                        fontSize: '25px',
                        outline: 'none',
                        borderTopStyle: 'hidden',
                        borderRightStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderBottomStyle: 'groove',
                        backgroundColor: 'transparent',
                        background: 'transparent',
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
                  <div className="container mx-10">
                    <input
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
                        width: '100%',
                        fontSize: '25px',
                        outline: 'none',
                        borderTopStyle: 'hidden',
                        borderRightStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderBottomStyle: 'groove',
                        background: 'transparent',
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
                <div className="container mt-5 mb-8">
                  <div className="mt-3 mb-5">
                    <h1 style={{ color: '#301E4A' }}>
                      What is/are the reason(s) for <br />
                      your backlog?
                    </h1>
                  </div>
                  <div className="mx-10">
                    <input
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
                        width: '100%',
                        fontSize: '25px',
                        outline: 'none',
                        borderTopStyle: 'hidden',
                        borderRightStyle: 'hidden',
                        borderLeftStyle: 'hidden',
                        borderBottomStyle: 'groove',
                        background: 'transparent',
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
                      How would you rate yesterday&apos;s
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

          <div className="fixed-bottom" style={{ position: 'absolute' }}>
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
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={(e) => {
                      props.postScrumData(props.question, props.index);
                      props.onHide();
                    }}
                  >
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

export default EditScrum;
