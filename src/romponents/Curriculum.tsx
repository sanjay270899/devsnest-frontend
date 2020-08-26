import React, { useEffect, useState } from 'react';
import axios from '../config/axios.config';
import Header from './Header';
import Chapter from './Chapter';
import {} from '../config/axios.config';

function Curriculum(props: any) {
  const [xhapters, setChapters] = useState([[]]);

  const id: number = props.match.params.id;

  let token: string = localStorage.getItem('Token') || '';

  const fetchDetails = async () => {
    if (token !== '') {
      const res = await axios.get(`/api/curriculums/${id}/chapter`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      let allSubTasks = data.data.map((item: any) => {
        const task = {
          id: item.id,
          text: item.name,
          slug: item.slug,
          task_count: item.task_count,
          total_task: item.total_task,
        };
        return task;
      });
      setChapters(allSubTasks);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <Header />
      {xhapters.map((task: any) => {
        return (
          <>
            <Chapter task={task} updateAllTasks={() => fetchDetails()} />
          </>
        );
      })}
    </>
  );
}

export default Curriculum;
