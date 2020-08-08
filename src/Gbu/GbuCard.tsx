import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const GbuCard = ({ gbu }) => {
  return (
    <>
      {gbu
        ? (gbu.map = (item: any) => {
            return (
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontWeight: 'bold' }}
                  >
                    GBU
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        : null}
    </>
  );
};
export default GbuCard;
