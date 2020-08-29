import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'moment';
import image from '../../images/dummy.png';

const MenteeCard = ({ feedback }) => {
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
                        <b style={{ padding: '20px' }}>Capability:</b>Gives
                        really good suggestions and solves all of my doubts
                      </Typography>
                    ) : item.capability === 'Yellow' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b style={{ padding: '20px' }}>Capability:</b>Is able to
                        solve my doubt and provides suggestions half the times.
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b style={{ padding: '20px' }}>Capability:</b>I don't
                        understand anything.
                      </Typography>
                    )}
                    {item.timeGiven == 'GREEN' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b style={{ padding: '20px' }}>Time Given:</b>3 or 3+
                        sessions
                      </Typography>
                    ) : item.timeGiven === 'Yellow' ? (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b>Time Given:</b>2 sessions
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ fontSize: '20px' }}
                      >
                        <b style={{ padding: '20px' }}>Time Given:</b>1
                        sessions.
                      </Typography>
                    )}

                    <Typography variant="body2" style={{ fontSize: '20px' }}>
                      <b style={{ padding: '20px' }}>Feedback:</b>
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
};
export default MenteeCard;
