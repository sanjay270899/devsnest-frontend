import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'moment';
import image from '../../images/dummy.png';

export default function MentorCard({ feedback }) {
  return (
    <>
      {feedback
        ? feedback.map((item) => {
            return (
              <div style={{ padding: '10px' }} key={item.id}>
                <Card>
                  <CardContent style={{ fontSize: '15px' }}>
                    {item.profileImage ? (
                      <img
                        alt="userprofile"
                        src={item.profileImage}
                        style={{ height: '60px', borderRadius: '100%' }}
                      />
                    ) : (
                      <img
                        src={image}
                        alt="profile"
                        style={{ height: '60px', borderRadius: '100%' }}
                      />
                    )}
                    <br />
                    <b>{item.name}</b>
                  </CardContent>
                  <CardContent>
                    {item.capability == 'GREEN' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b style={{ padding: '20px  ' }}>Effort:</b>
                        30-40 hrs (roughly 20+ questions, depends on question
                        type and difficulty)
                      </Typography>
                    ) : item.capability === 'Yellow' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b>Effort:</b>
                        <span style={{ paddingLeft: '20px' }}>
                          20-30 hrs (roughly 10-18 questions, depends on level)
                        </span>
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b>Effort:</b>-15-20 hrs (roughly 6-10 questions,
                        depends on level)
                      </Typography>
                    )}
                    {item.timeGiven == 'GREEN' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b>Understanding:</b>is able to solve all the questions
                        and understands the concept.
                      </Typography>
                    ) : item.timeGiven === 'Yellow' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b>Understanding:</b>has doubts but knows the topic, and
                        can solve some questions again.
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b>Understanding:</b>no cannot solve most of the last
                        week questions
                      </Typography>
                    )}

                    <Typography variant="body2" style={{ fontSize: '20px' }}>
                      <b>Feedback:</b>
                      {item.feedback}
                    </Typography>
                  </CardContent>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{ textAlign: 'right', padding: '20px' }}
                  >
                    <b>Posted At :</b> &nbsp;
                    {Moment(item.createdAt).format('DD/MM/YYYY')}
                  </Typography>
                </Card>
              </div>
            );
          })
        : null}
    </>
  );
}
