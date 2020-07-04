import React,{useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Axios from 'axios'
import Header from '../Components/Header'
import SubTask from './SubTask'

import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';


function Task() {
  const [expanded, setExpanded] =useState(true)
  const [checked, setChecked] = useState(false);
  const [task,setTask] = useState([{}])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };
  let token = localStorage.getItem("Token")
  console.log('Bearer'+' '+token)

  const fetchDetails =async ()=>{
    const res= await Axios.get("http://localhost:3000/api/tasks",{
      headers:{
        'Authorization':'Bearer'+' '+token
      }
    })
    const {data} =res;
    const Task = data.data.map((item:any)=>{
      const task = {
        id:item.id,
        name:item.name,
        description:item.description,
      }
    })
    setTask([...task,Task])
  }
  useEffect(() => {
    fetchDetails()
  }, [])

    return (
      <>
      <Header/>
      {task.map(task=>{
        return(
          <div className="container">
      <Card  style={{boxShadow:' 4px 4px 8px 4px rgba(0,0,0,0.2)'}}>
        <Grid container  direction="row"
        justify="space-between"
        alignItems="flex-end">
          <Grid item >
          <CardContent>
          <Typography >
          <h2> Name</h2>
        </Typography>
      </CardContent>
          </Grid>
          <Grid item style={{alignSelf:"center",padding:"20px"}}>
         
            <Checkbox
                       
            aria-expanded={expanded}
            onClick={handleExpandClick}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <SubTask id={task.id}/>
      </Collapse>
    </Card>
    </div>
        )
      })}
      
    </>
  );

}

export default Task;
