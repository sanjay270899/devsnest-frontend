import React from 'react';

// import Calendar from 'react-github-contribution-calendar';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

export const ActivityMap = () => {
  var values = [
    { date: '2020-03-30', count: 11 },
    { date: '2021-05-31', count: 1 },
    { date: '2020-06-07', count: 3 },
    { date: '2020-06-30', count: 1 },
    { date: '2020-07-01', count: 5 },
    { date: '2021-01-01', count: 1 },
    { date: '2021-03-01', count: 0 },
    { date: '2021-03-02', count: 2 },
    { date: '2021-03-03', count: 3 },
    { date: '2021-03-04', count: 4 },
    { date: '2021-03-05', count: 5 },
    { date: '2021-03-06', count: 6 },
    { date: '2021-05-21', count: 1 },
    { date: '2021-05-30', count: 3 },
    { date: '2021-05-31', count: 3 },
  ];

  const vals = [
    { date: '2021-02-01', count: 1 },
    { date: '2021-01-01', count: 0 },
    { date: '2021-01-02', count: 1 },
    { date: '2021-01-03', count: 2 },
    { date: '2021-01-04', count: 3 },
    { date: '2021-01-05', count: 4 },
    { date: '2021-01-06', count: 5 },
    { date: '2021-01-07', count: 6 },
  ];

  var panelColors = ['#EEEBF3', '#ACFFBE', '#57DB73', '#259B3E'];

  // Will Remove the Extra Space at Bottom: https://github.com/kevinsqi/react-calendar-heatmap/issues/146
  CalendarHeatmap.prototype.getHeight = function () {
    return (
      this.getWeekWidth() + (this.getMonthLabelSize() - this.props.gutterSize)
    );
  };

  return (
    <div className="shadow profile-card ml-5 mt-5 p-3 pr-4">
      <h1 className="h5 my-2 font-weight-bold">Activity:</h1>
      <CalendarHeatmap
        values={vals}
        showWeekdayLabels={true}
        weekdayLabels={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          if (value.count === 0) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          if (!value || !value.date) {
            return { 'data-tip': 'No Activity' };
          }
          return {
            'data-tip': `${value.count} on ${value.date}`,
          };
        }}
      />
      <ReactTooltip />
    </div>
  );
};
