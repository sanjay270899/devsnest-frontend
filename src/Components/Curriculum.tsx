import React,{useState,useEffect} from 'react'
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import CurriculumCard from './CurriculumCard';
import Header from './Header'
import {resolveNaptr} from "dns";

type TaskType = any;

function Curriculum() {
  const [task, setTask] = useState([{
  }]);
  const token = localStorage.getItem("Token")
  const fetchDetails =async ()=>{
    const res= await Axios.get("http://localhost:3000/api/tasks",{
      headers:{
        'Authorization':'Bearer'+' '+token
      }
    })
    const {data} =res;
    data.data.map((item:any)=>{
      const tasks = {
        id:item.id,
        name:item.name,
        duration:item.duration,
      }
      setTask([...task,tasks])
    })

  }
  useEffect(() => {
    fetchDetails()
  }, [])
    return (
      <>
      <Header/>
        <div className="container">
            {task.map((card: TaskType)=>{
                return(
                    <Grid container spacing={2} >
                        <Grid item md={6} >
                            <CurriculumCard
                            key={card.id}
                            name={card.name}
                            duration={card.duration}
                            />
                        </Grid>
                    </Grid>

                )
            })}


        </div>
        </>
    )
}

export default Curriculum
