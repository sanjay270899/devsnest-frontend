import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function CurriculumCard(props: any) {
  const { key, curriculumId, name, duration, slug, url } = props;
  const handleclick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Moved to Task page',
    });
  };
  let percentage = 0;
  let total = 100;
  var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
      originalDoughnutDraw.apply(this, arguments);

      var chart = this.chart.chart;
      var ctx = chart.ctx;
      var width = chart.width;
      var height = chart.height;

      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + 'em Verdana';
      ctx.textBaseline = 'middle';

      var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
    },
  });

  const state = {
    labels: ['', 'Completed'],
    datasets: [
      {
        backgroundColor: ['#c1c1c1', '#26ae60'],
        data: [total - percentage, percentage],
      },
    ],
    text: `${percentage}%`,
  };
  return (
    <Card className="card" key={key}>
      <Grid container direction="row" justify="space-between">
        <Grid item md={4}>
          <CardMedia component={'img'} image={url} title={name} />
        </Grid>
        <Grid item md={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {slug}
            </Typography>
            <div>
              <Doughnut
                data={state}
                width={200}
                height={100}
                options={{
                  legend: {
                    display: false,
                    horizontalAlign: 'left',
                    labels: {
                      fontColor: '#000',
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6}>
          <CardContent>
            <Typography gutterBottom component="h6">
              Estimated Duration : {duration}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item md={6}>
          <CardActions>
            <Button variant="contained" color="primary">
              <Link
                to={`/curriculum/${curriculumId}`}
                style={{ color: '#fff', textDecoration: 'none' }}
                onClick={handleclick}
              >
                Tasks
              </Link>
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CurriculumCard;
