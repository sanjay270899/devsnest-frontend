import React, { useState, useEffect } from 'react';
import axios from '../config/axios.config';
import CurriculumCard from './CurriculumCard';
import Header from './Header';
import { Redirect } from 'react-router';
import { Container } from 'reactstrap';

type TaskType = any;

function ListOfCurriculum() {
  const [task, setTask] = useState([[]]);

  const token: string = localStorage.getItem('Token') || '';

  const fetchDetails = async () => {
    if (token !== '') {
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
            chapter_count: item.chapter_count,
            total_chapter: item.total_chapter,
          };
          return tasks;
        })
      );
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  if (token === '') {
    return <Redirect to={'/login'} />;
  }
  return (
    <>
      <Header />
      <Container fluid={true} className="container_padding">
        <div className="row">
          {task.map((card: TaskType) => {
            return (
              <div className="col-md-6">
                <CurriculumCard
                  key={card.id + '#'}
                  curriculumId={card.id}
                  name={card.name}
                  duration={card.duration}
                  slug={card.slug}
                  url={card.url}
                  status={card.status}
                  chapter_count={card.chapter_count}
                  total_chapter={card.total_chapter}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default ListOfCurriculum;
