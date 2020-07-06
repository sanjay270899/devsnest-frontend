import React,{useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Axios from 'axios';


interface Number{
  id: number
}

function SubTask({task}: any) {
    const [expanded, setExpanded] =useState(false)
    const [done, setDone] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleDone = () => {
        setDone(!done);
        console.log(!done)

    };
    let token = localStorage.getItem("Token")
    const changeStatus=()=>{
        Axios.put(`http://localhost:3000/api/tasks/${task.id}/subtasks`,{"subtaskId":task.id},{
            headers:{
              'Authorization':'Bearer'+' '+token
            }
          })
              .then( (response)=> {
                  console.log(response)
              })
              .catch((error)=> {
                  console.log(error)
              })
    }

    useEffect(() => {
        changeStatus()
      }, [done]);
    console.log("Subtask", task);
    return (
        <>
                    <div className="container" key={task.id}>
                        <Card  style={{boxShadow:' 4px 4px 8px 4px rgba(0,0,0,0.2)'}}>
                            <Grid container  direction="row"
                                  justify="space-between"
                                  alignItems="flex-end">
                                <Grid item >
                                    <CardContent style={{display: 'flex'}}>
                                        <Typography >
                                            <h2 > {task? task.text: null}

                                            </h2>
                                        </Typography>

                                        <CardContent>
                                            <Checkbox
                                                onClick={handleDone}
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <span onClick={handleExpandClick} style={{alignSelf:"center",padding:"20px"}} ><ExpandMoreIcon /></span>
                                        </CardContent>
                                    </CardContent>
                                </Grid>
                                <Grid>

                                </Grid>
                            </Grid>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>

                                <div>

                                    <Grid container direction="row"
                                          justify="space-between"
                                          alignItems="flex-end">
                                        <Grid item md={6}>
                                            <CardContent>
                                                {
                                                    task.tutorials?

                                                        (task.tutorials.map((tutorail: any) => {
                                                            console.log("Tutorial", tutorail);
                                                            return (
                                                                <>
                                                                    <Typography gutterBottom  component="h6" >
                                                                        {tutorail.description? tutorail.description: null}
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        {tutorail.link? <a href="tutorail.link">TaskLink</a>: null}
                                                                    </Typography>

                                                                </>
                                                            );
                                                        })): null
                                                }
                                            </CardContent>
                                        </Grid>
                                        <Grid item style={{alignSelf:"center",padding:"20px"}}>

                                        </Grid>
                                    </Grid>
                                </div>
                            </Collapse>
                        </Card>
                    </div>
            </>

    )
};

export default SubTask







