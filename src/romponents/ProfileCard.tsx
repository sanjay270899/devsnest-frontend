import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const ProfileCard: React.ElementType = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Submissions
          </Typography>
        </CardContent>
        <CardActions>
          <CalendarHeatmap
            startDate={new Date('2018-12-31')}
            endDate={new Date('2019-12-31')}
            values={[
              { date: '2019-01-01', count: 1 },
              { date: '2019-03-03', count: 4 },
              { date: '2019-01-06', count: 2 },
              { date: '2019-01-08', count: 3 },
            ]}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-scale-${value.count}`;
            }}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default ProfileCard;
