import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import axios from '../config/axios.config';
import CurriculumCard from './CurriculumCard';
import Header from './Header';
import { Redirect } from 'react-router';

type TaskType = any;

function ListOfCurriculum() {
  const [task, setTask] = useState([[]]);
  const token: string = localStorage.getItem('Token') || '';

  const fetchDetails = async () => {
    if (token != '') {
      const res = await axios.get('/api/curriculums', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;

      setTask(
        data.data.map((item: any) => {
          const tasks = {
            id: item.id,
            name: item.name,
            duration: item.duration,
            slug: item.slug,
            url: item.url,
            status: item.status,
          };
          return tasks;
        })
      );
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  if (token == '') {
    return <Redirect to={'/login'} />;
  }
  return (
    <>
      <Header />
      <div className="container">
        {task.map((card: TaskType) => {
          console.log('Card ----', card);
          return (
            <Grid container spacing={2}>
              <Grid item md={6}>
                <CurriculumCard
                  key={card.id + '#'}
                  curriculumId={card.id}
                  name={card.name}
                  duration={card.duration}
                  slug={card.slug}
                  url={card.url}
                  status={card.status}
                />
              </Grid>
            </Grid>
          );
        })}
      </div>
    </>
  );
}

export default ListOfCurriculum;
