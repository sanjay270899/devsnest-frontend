import React, { useEffect, useState } from 'react'
import axios from '../config/axios.config';
import Header from './Header'
import SubTask from './SubTask'
import {Redirect} from "react-router";


function Task(props: any) {
  const [subTasks, setSubTasks] = useState([[]]);

  const id: number = props.match.params.id;
  let token: string = localStorage.getItem("Token") || '';
  console.log(`Token ${token}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDetails = async () => {
    if( token != ''){
      console.log(`Token ${token}`)
      const res = await axios.get(`api/tasks/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const { data } = res;
      let allSubTasks = data.data.map((item: any) => {
        console.log("Item", item.metaData);
        const task = {
          id: item.id,
          text: item.text,
          slug: item.slug,
          taskId: item.task_id,
          status: item.status,
          tutorials: !item.metaData ? null : item.metaData.tutorials
        }
        console.log("Task", task);
        return task;
      });
      setSubTasks(allSubTasks);
    }

  };
  useEffect(() => {
    fetchDetails()
  }, []);
  if(token == ''){
    return <Redirect to={"/login"}/>;
  }
  console.log("All subtasks", subTasks);
  return (
    <>
      <Header />
      {subTasks.map((task: any) => {
        return (
          <>
            <SubTask
              task={task}
              updateAllTasks={ () => fetchDetails()}
            />
          </>
        )
      })}

    </>
  );

}

export default Task;
