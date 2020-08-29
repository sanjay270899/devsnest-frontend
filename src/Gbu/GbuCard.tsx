import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'moment';
import image from '../images/dummy.png';

const GbuCard = ({ gbu }) => {
  return (
    <>
      {gbu.map((item, index) => {
        return (
          <div style={{ padding: '10px' }} key={index}>
            <Card>
              <CardContent>
                <div style={{}}>
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
                </div>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 'bold' }}
                >
                  {item.username}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ textAlign: 'center' }}
                >
                  {ReactHtmlParser(item.description)}
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
      })}
    </>
  );
};
export default GbuCard;
