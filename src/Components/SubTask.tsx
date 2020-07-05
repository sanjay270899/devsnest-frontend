import React,{useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Collapse from '@material-ui/core/Collapse';

interface Number{
  id: number
}
function SubTask({task}: any) {
    const [expanded, setExpanded] =useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log("Subtask", task);
    return (
        <>
                    <div className="container" key={task.id}>
                        <Card  style={{boxShadow:' 4px 4px 8px 4px rgba(0,0,0,0.2)'}}>
                            <Grid container  direction="row"
                                  justify="space-between"
                                  alignItems="flex-end">
                                <Grid item >
                                    <CardContent>
                                        <Typography >
                                            <h2> {task? task.text: null}</h2>
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid item style={{alignSelf:"center",padding:"20px"}} onClick={handleExpandClick}
                                      aria-expanded={expanded}
                                      aria-label="show more">
                                    <ExpandMoreIcon />
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
                                                                    <Typography >
                                                                        {tutorail.description? tutorail.description: null}
                                                                        {tutorail.link? tutorail.link: null}
                                                                    </Typography>

                                                                </>
                                                            );
                                                        })): null
                                                }
                                            </CardContent>
                                        </Grid>
                                        <Grid item style={{alignSelf:"center",padding:"20px"}}>
                                            <Checkbox
                                                onClick={() => {
                                                    console.log("Hello")
                                                }}
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
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







