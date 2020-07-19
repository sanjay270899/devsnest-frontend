import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import CardContent from "@material-ui/core/CardContent";
import { Pie } from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import BookIcon from "@material-ui/icons/Book";
import Collapse from "@material-ui/core/Collapse";
import axios from "../config/axios.config";
import { Redirect } from "react-router";


export interface Props {
  percentageCompleted: number;
  task: any;
  updateAllTasks: any;
}

function Chapter({ task, updateAllTasks, percentageCompleted }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [subTasks, setSubTasks] = useState([]);
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
            direction="row"<<<<<<< feature/typeicon
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
            <div>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <CardContent>
                    {subTasks
                      ? subTasks.map((subTask: any) => {
                          return (
                            <>
                              <Typography gutterBottom component="h6">

                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                >
                                  <Grid
                                    item
                                    style={{
                                      alignSelf: "center",
                                      padding: "20px",
                                    }}
                                  >
                                    {subTask.type === "QUESTION" ? (
                                      <HelpOutlineIcon
                                        style={{ fontSize: "50px" }}
                                      />
                                    ) : subTask.type === "TUTORIAL" ? (
                                      <BookIcon style={{ fontSize: "50px" }} />
                                    ) : subTask.type === "VIDEO" ? (
                                      <MovieCreationIcon
                                        style={{ fontSize: "50px" }}
                                      />
                                    ) : null}
                                  </Grid>
                                  <Grid
                                    item
                                    style={{
                                      alignSelf: "center",
                                    }}
                                  >
                                    {subTask.name}
                                  </Grid>

                                  <Grid
                                    item
                                    style={{
                                      alignSelf: "center",
                                      padding: "20px",
                                    }}
                                  >
                                    {subTask.url && (
                                      <a href={subTask.url}>Link</a>
                                    )}
                                  </Grid>
                                  <Grid
                                    item
                                    style={{
                                      alignSelf: "center",
                                      padding: "20px",
                                    }}
                                  >
                                    <Checkbox
                                      onClick={() =>
                                        changeStatus(
                                          subTask.id,
                                          subTask.status === "DONE"
                                            ? "UNDONE"
                                            : "DONE"
                                        )
                                      }
                                      color="primary"
                                      inputProps={{
                                        "aria-label": "secondary checkbox",
                                      }}
                                      checked={
                                        subTask.status === "DONE" ? true : false
                                      }
                                    />
                                  </Grid>
                                </Grid>

                              </Typography>
                            </>
                          );
                        })
                      : null}
                  </CardContent>
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
