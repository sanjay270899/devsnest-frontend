import React from 'react';

// import Calendar from 'react-github-contribution-calendar';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

export const ActivityMap = ({ user }) => {
  let vals = Object.entries(user.activity).map((one) => {
    return {
      date: one[0],
      count: one[1],
    };
  });

  // Will Remove the Extra Space at Bottom: https://github.com/kevinsqi/react-calendar-heatmap/issues/146
  CalendarHeatmap.prototype.getHeight = function () {
    return (
      this.getWeekWidth() + (this.getMonthLabelSize() - this.props.gutterSize)
    );
  };

  return (
    <div className="shadow profile-card m-4 p-4">
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
          if (value.count > 4) {
            return 'color-max';
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
