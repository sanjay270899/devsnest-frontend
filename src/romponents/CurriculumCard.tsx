import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './CurriculumCard.css';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Progress,
  CardFooter,
  Row,
  Col,
  Container,
} from 'reactstrap';

function CurriculumCard(props: any) {
  const {
    key,
    curriculumId,
    name,
    duration,
    slug,
    url,
    chapter_count,
    total_chapter,
  } = props;
  // console.log(key,
  //   curriculumId,
  //   name,
  //   duration,
  //   slug,
  //   url,
  //   chapter_count,
  //   total_chapter)
  console.log(chapter_count, total_chapter);
  let percent = Math.floor((chapter_count / total_chapter) * 100);
  let parsePercent = String(percent);
  console.log(percent, 'percent');
  const handleclick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Moved to Task page',
    });
  };
  let percentage = 0;
  let total = 100;
  if (chapter_count == null) {
    percentage = 0;
  } else {
    percentage = Math.floor((chapter_count / total_chapter) * 100);
  }
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
        backgroundColor: ['#c1c1c1', '#F1A615'],
        data: [total - percentage, percentage],
      },
    ],
    text: `${percentage}%`,
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="card-horizontal box-shadow">
            <Row className="no-gutters">
              <Col md="8">
                <CardBody>
                  <CardTitle className="CardTitle">{name}</CardTitle>
                  <CardText className="slugText">{slug}</CardText>
                  <button className="Explore mt-3">
                    <Link
                      to={`/curriculum/${curriculumId}`}
                      style={{ color: '#000000 ', textDecoration: 'none' }}
                      onClick={handleclick}
                    >
                      Explore
                    </Link>
                  </button>
                </CardBody>
                <CardFooter className="text-muted">
                  <Progress
                    style={{ backgroundColor: '#F1A615' }}
                    className="Progressbar"
                    value={parsePercent}
                    data={state.text}
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
                  >
                    {state.text}
                  </Progress>
                </CardFooter>
              </Col>
              <Col md="4">
                <CardImg className="image" src={url} title={name} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CurriculumCard;
