import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';
import { Pie } from 'react-chartjs-2';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import BookIcon from '@material-ui/icons/Book';
import Collapse from '@material-ui/core/Collapse';
import axios from '../config/axios.config';
import { Redirect } from 'react-router';
import ReactGA from 'react-ga';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 25,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export interface Props {
  percentageCompleted: number;
  task: any;
  updateAllTasks: any;
}

function Chapter({ task, updateAllTasks, percentageCompleted }: Props) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [subTasks, setSubTasks] = useState([]);
  const { id: chapterId } = task;

  const handleExpandClick = () => {
    getAllTasks();
    ReactGA.event({
      category: 'Button',
      action: 'functional symbol',
    });
    setExpanded(!expanded);
  };

  let token: string = localStorage.getItem('Token') || '';
  const getAllTasks = () => {
    axios
      .get(`api/chapters/${chapterId}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('Response', response);
        let tempSubTasks = [];
        tempSubTasks = response.data.data.map((sT: any) => {
          return {
            id: sT.id,
            status: sT.status,
            type: sT.type,
            name: sT.name,
            slug: sT.slug,
            url: sT.url,
          };
        });
        setSubTasks(tempSubTasks);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const changeStatus = (subTaskId: any, newStatus: any) => {
    if (token !== '') {
      axios
        .put(
          `api/tasks/${subTaskId}`,
          {
            status: newStatus,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          getAllTasks();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {}, [task.status]);
  if (token === '') {
    return <Redirect to={'/login'} />;
  }

  const total: number = 100;

  const state = {
    datasets: [
      {
        backgroundColor: ['#ffffff', '#4B77F5'],
        data: [total - percentageCompleted, percentageCompleted],
      },
    ],
  };

  return (
    <>
      <div className="container" key={task.id}>
        <Card style={{ boxShadow: ' 4px 4px 8px 4px rgba(0,0,0,0.2)' }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            style={{ height: '100px' }}
          >
            <Grid item>
              <CardContent style={{ display: 'flex' }}>
                <Typography>
                  <h2> {task ? task.text : null}</h2>
                </Typography>

                <CardContent>
                  <span
                    onClick={handleExpandClick}
                    style={{ alignSelf: 'center', padding: '20px' }}
                  >
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </span>
                </CardContent>
              </CardContent>
            </Grid>
            <Grid>
              <Pie
                data={state}
                width={100}
                height={300}
                options={{
                  legend: {
                    display: true,
                    position: 'left',
                    labels: {
                      fontColor: '#000',
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </Grid>
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div style={{}}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item xs={12} style={{}}>
                  <Container>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="customized table"
                      >
                        <TableBody>
                          {subTasks
                            ? subTasks.map((subTask: any) => (
                                <StyledTableRow>
                                  <StyledTableCell>
                                    {subTask.type === 'QUESTION' ? (
                                      <HelpOutlineIcon
                                        style={{ fontSize: '50px' }}
                                      />
                                    ) : subTask.type === 'TUTORIAL' ? (
                                      <BookIcon style={{ fontSize: '50px' }} />
                                    ) : subTask.type === 'VIDEO' ? (
                                      <MovieCreationIcon
                                        style={{ fontSize: '30px' }}
                                      />
                                    ) : null}
                                  </StyledTableCell>
                                  <StyledTableCell>
                                    <a
                                      className="textHover"
                                      style={{
                                        textDecoration: 'none',
                                        color: '#0e141e',
                                      }}
                                      href={subTask.url}
                                    >
                                      {' '}
                                      {subTask.name}
                                    </a>
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {subTask.url && (
                                      <ReactGA.OutboundLink
                                        eventLabel="CourseLink"
                                        to={subTask.url}
                                        target="_blank"
                                      >
                                        {/* link */}
                                        {/* <LinkIcon
                                          style={{ fontSize: '40px' }}
                                        /> */}
                                      </ReactGA.OutboundLink>
                                    )}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    {
                                      <Checkbox
                                        onClick={() =>
                                          changeStatus(
                                            subTask.id,
                                            subTask.status === 'DONE'
                                              ? 'UNDONE'
                                              : 'DONE'
                                          )
                                        }
                                        color="primary"
                                        inputProps={{
                                          'aria-label': 'secondary checkbox',
                                        }}
                                        checked={
                                          subTask.status === 'DONE'
                                            ? true
                                            : false
                                        }
                                      />
                                    }
                                  </StyledTableCell>

                                  <StyledTableCell align="right">
                                    {}
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))
                            : null}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Container>
                </Grid>
              </Grid>
            </div>
          </Collapse>
        </Card>
      </div>
    </>
  );
}

export default Chapter;
