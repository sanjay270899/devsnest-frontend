import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const ProfileCard: React.ElementType = ({ frequency }: any) => {
  console.log('Frequency', frequency);
  const graphData = frequency.map((item: any) => {
    const graph = {
      date: item.key,
      count: item.value,
    };
    return graph;
  });
  console.log('Graph data', graphData);
  return (
    <>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            style={{ fontWeight: 'bold', fontSize: '30px' }}
          >
            Submissions
          </Typography>
        </CardContent>
        <CardActions>
          <CalendarHeatmap
            startDate={new Date('2018-12-31')}
            endDate={new Date('2020-12-31')}
            values={[{}]}
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
