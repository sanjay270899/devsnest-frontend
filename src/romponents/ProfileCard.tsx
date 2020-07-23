import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Moment from 'moment';

const ProfileCard: React.ElementType = ({ frequency }: any) => {
  const graphData = frequency.map((item: any) => {
    const graph = {
      date: Moment(item.key).format('YYYY-MM-DD'),
      count: item.value,
    };
    return graph;
  });

  // const mapData = graphData.map((item: any) => {
  //   const data = {
  //     date: Moment(item.key).format('YYYY-MM-DD'),
  //     count: item.value,
  //   };
  //   return data;
  // });
  // console.log(mapData);
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
            startDate={new Date('2019-12-31')}
            endDate={new Date('2020-12-31')}
            values={graphData}
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
