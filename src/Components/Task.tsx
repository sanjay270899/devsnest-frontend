import React,{useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
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


function Task(props: any) {
  const [subTasks,setSubTasks] = useState([[]]);

  const id = props.match.params.id;
  let token = localStorage.getItem("Token")
  const fetchDetails =async ()=>{
    const res= await Axios.get(`http://localhost:3000/api/tasks/${id}`,{
      headers:{
        'Authorization':'Bearer'+' '+token
      }
    })
    const {data} =res;
     let allSubTasks = data.data.map((item:any)=>{
       console.log("Item", item.metaData);
      const task = {
        id:item.id,
        text:item.text,
        link:item.link,
        taskId: item.task_id,
        tutorials: !item.metaData ? null: item.metaData.tutorials
      }
      console.log("Task", task);
      return task;
    });
    setSubTasks(allSubTasks);
  };
  useEffect(() => {
    fetchDetails()
  }, []);
  console.log("All subtasks", subTasks);
    return (
      <>
      <Header/>
      {subTasks.map((task: any)=>{
        return(
            <>
              <SubTask
              task={task}
              />
              </>
        )
      })}

    </>
  );

}

export default Task;
