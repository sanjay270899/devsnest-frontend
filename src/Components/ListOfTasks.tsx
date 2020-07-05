import React,{useState,useEffect} from 'react'
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import TaskCard from './TaskCard';
import Header from './Header'

type TaskType = any;

function ListOfTasks() {
  const [task, setTask] = useState([[]]);
  const token = localStorage.getItem("Token");
  const fetchDetails =async ()=>{
    const res= await Axios.get("http://localhost:3000/api/tasks",{
      headers:{
        'Authorization':'Bearer'+' '+token
      }
    });
    const {data} =res;

      setTask( data.data.map((item:any)=>{
          const tasks = {
              id:item.id,
              name:item.name,
              duration:item.duration,
              slug:item.slug,
              url:item.url,
              status:item.status
          };
          return tasks;
      }));
  }
  useEffect(() => {
    fetchDetails()
  }, [])
    return (
      <>
      <Header/>
        <div className="container">
            {task.map((card: TaskType)=>{
                console.log("Card ----", card);
                return(
                    <Grid container spacing={2} >
                        <Grid item md={6} >
                            <TaskCard
                            key={card.id+"#"}
                            taskId={card.id}
                            name={card.name}
                            duration={card.duration}
                            slug = {card.slug}
                            url = {card.url}
                            status = {card.status}
                            />
                        </Grid>
                    </Grid>

                )
            })}


        </div>
        </>
    )
}

export default ListOfTasks
