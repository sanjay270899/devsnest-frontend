import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import axios from '../config/axios.config';
import { Redirect } from 'react-router';
import { createDeflateRaw } from 'zlib';

interface Number {
  id: number;
}

function Chapter({ task, updateAllTasks }: any) {
  const [expanded, setExpanded] = useState(false);
  const [subTasks, setSubTasks] = useState([]);
  console.log('Tasky', task);
  const { id: chapterId } = task;

  const handleExpandClick = () => {
    getAllTasks();
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
  if (token == '') {
    return <Redirect to={'/login'} />;
  }
  console.log('Subtask', task);
  return (
    <>
      <div className="container" key={task.id}>
        <Card style={{ boxShadow: ' 4px 4px 8px 4px rgba(0,0,0,0.2)' }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end"
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
                    <ExpandMoreIcon />
                  </span>
                </CardContent>
              </CardContent>
            </Grid>
            <Grid></Grid>
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item md={6}>
                  <CardContent>
                    {subTasks
                      ? subTasks.map((subTask: any) => {
                          return (
                            <>
                              <Typography gutterBottom component="h6">
                                <b>{subTask.type}</b>
                                &nbsp;&nbsp;&nbsp;
                                {subTask.name}
                                &nbsp;&nbsp;&nbsp;
                                {subTask.url && <a href={subTask.url}>Link</a>}
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
                                    subTask.status === 'DONE' ? true : false
                                  }
                                />
                              </Typography>
                            </>
                          );
                        })
                      : null}
                  </CardContent>
                </Grid>
                <Grid
                  item
                  style={{ alignSelf: 'center', padding: '20px' }}
                ></Grid>
              </Grid>
            </div>
          </Collapse>
        </Card>
      </div>
    </>
  );
}

export default Chapter;
